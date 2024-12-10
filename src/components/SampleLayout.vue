<template>
  <div class="page-sample">
    <div class="page-head">
      <slot name="page-head"></slot>
    </div>
    <el-aside :class="menuClass" v-top>
      <TreeMenu :menus="store.menus"></TreeMenu>
    </el-aside>
    <el-main class="content">
      <template v-for="item in store.menus">
        <div :id="item.path" class="list-box">
          <p class="box-title">{{ item.name }}</p>
          <!-- <p class="menu-desc">这是描述</p> -->
          <template v-for="sub in item.children">
            <p class="sub-title" :id="sub.path">{{ sub.name }}</p>
            <div class="list">
              <template v-for="eg in store.samples[sub.id]">
                <div class="item">
                  <router-link class="img-box" :to="`/components/${eg.id}`">
                    <img :src="eg.cover">
                  </router-link>
                  <p class="name">
                    <span>{{ eg.title }}</span>
                    <span v-if="eg.latestVersion" class="version">{{ eg.latestVersion }}</span>
                  </p>
                  <p class="pub-date">发布 {{ getTime(eg) }}</p>
                </div>
              </template>
            </div>
          </template>
        </div>
      </template>
    </el-main>
  </div>
</template>

<script setup>
import TreeMenu from './../components/TreeMenu.vue';
import { useGlobal } from '../store/index.js';
import { computed, watch } from 'vue';
const store = useGlobal();

const props = defineProps({
  type: { type: String, required: true }
});

const types = ['components', 'algorithms', 'dataServices'];
watch(() => props.type, val => {
  if (!types.includes(val)) return;
  store.updateMenus(props.type);
}, { immediate: true });

const classMap = {
  components: 'w280',
  algorithms: 'w320',
  dataServices: 'w360'
}
const menuClass = computed(() => classMap[props.type]);

function getTime(item) {
  const { updateTime, createTime } = item;
  return (updateTime || createTime || '').split(/\s/)[0];
}

const vTop = {
  mounted(el) {
    const targetNode = document.querySelector('.cme-layout');
    const { top } = el.getBoundingClientRect();
    targetNode.addEventListener('scroll', e => {
      const dy = Math.max(e.target.scrollTop - top + 200, 0) * 10 / window.innerWidth;
      el.style.transform = `translateY(${dy}rem)`;
    }, { passive: true });
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.page-sample {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 40px;
  background-color: var(--background-color);

  .page-head {
    grid-column-start: span 2;
    border-bottom: 1px solid #dcdddf;
    padding: 60px 84px;
    background: linear-gradient(136deg, rgba(217, 253, 255, 0.29) 0%, #F0F6FF 22%, #D9E9FF 100%);
  }
}

.el-aside {
  position: relative;
  height: calc(100% - 120px);

  &.w280 {
    width: 280px;
  }

  &.w320 {
    width: 320px;
  }

  &.w360 {
    width: 360px;
  }
}

.content {
  flex: 1;
  padding-top: 0;
  padding-left: 24px;
  padding-right: 50px;
  // margin-left: 360px;
  border-left: 1px solid #dcdddf;
}

.anchor {
  display: block;
  padding: 0 12px;
  height: 40px;
  line-height: 40px;
  color: #ffffffa6;

  &:hover {
    color: #ffffff;
    background-color: #333333;
  }
}

.list-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  .box-title {
    margin-bottom: 20px;
    padding-left: 14px;
    @include setFont(40px, 56px, 500);
  }

  .menu-desc {
    padding-left: 14px;
  }

  .sub-title {
    margin: 16px 0;
    padding-left: 14px;
    @include setFont(24px, 32px);
  }

  .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 14px;
    padding: 10px 0;
    min-width: 400px;

    .item {
      display: inline-block;
      padding: 10px;
      border: 4px dashed transparent;
      border-radius: 8px;
      transition: 0.2s;

      &:hover {
        border-color: #47a1fe;
        background-color: #47a1fe22;

        .name {
          font-weight: 700;
        }

        .version {
          background-color: #47a1fe !important;
          border-color: #47a1fe !important;
          color: #ffffff;
        }
      }

      .img-box {
        display: inline-block;
        width: 100%;
        aspect-ratio: 1;
        margin-bottom: 12px;
        border-radius: 8px;
        overflow: hidden;
      }



      .name {
        margin-bottom: 8px;
        @include setFont(16px, 20px);
        color: var(--text-color3);

        span {
          padding: 0 6px;
          margin-left: 4px;
        }

        .version {
          @include setTheme('background-color', (dark: var(--text-color-active)));
          @include setTheme('border', (light: 1px solid var(--text-color2)));
          font-size: 12px;
          background-color: var(--background-color5);
          border-radius: 20px;
        }
      }

      .pub-date {
        color: var(--text-color2);
      }
    }
  }
}
</style>