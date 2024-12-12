<template>
  <div class="page-sample">
    <div class="page-head">
      <slot name="page-head"></slot>
    </div>
    <div class="page-body">
      <el-aside :class="menuClass">
        <TreeMenu :menus="store.menus"></TreeMenu>
      </el-aside>
      <el-main class="content">
        <div v-if="$slots.module" class="list-box module">
          <slot name="module"></slot>
        </div>
        <template v-for="item in store.menus">
          <div v-if="!item.ignore" :id="item.path" class="list-box">
            <h3 class="box-title">{{ item.name }}</h3>
            <!-- <p class="menu-desc">这是描述</p> -->
            <template v-for="sub in item.children">
              <p class="sub-title" :id="sub.path">{{ sub.name }}</p>
              <div class="list">
                <template v-for="eg in store.samples[sub.id]">
                  <div class="item" :title="eg.title">
                    <router-link class="img-box" :to="`/${path}/${eg.id}`">
                      <img :src="eg.cover">
                    </router-link>
                    <p class="name-box">
                      <span class="name">{{ eg.title }}</span>
                      <span v-if="eg.latestVersion" class="version">v{{ eg.latestVersion }}</span>
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

const path = computed(() => props.type.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`));
const types = ['components', 'algorithms', 'dataServices'];
watch(() => props.type, val => {
  if (!types.includes(val)) return;
  store.updateMenus(props.type);
}, { immediate: true });

const classMap = {
  components: 'w280',
  algorithms: 'w320',
  dataServices: 'w400'
}
const menuClass = computed(() => classMap[props.type]);

function getTime(item) {
  const { updateTime, createTime } = item;
  return (updateTime || createTime || '').split(/\s/)[0];
}

// const vTop = {
//   mounted(el) {
//     const targetNode = document.querySelector('.cme-layout');
//     const headH = document.querySelector('.page-head').offsetHeight;
//     const { top } = el.getBoundingClientRect();
//     targetNode.addEventListener('scroll', e => {
//       const dy = Math.max(e.target.scrollTop - top + 60, 0) * 10 / window.innerWidth;
//       console.log('dy ===>', e.target.scrollTop, top, headH);
//       el.style.transform = `translateY(${dy}rem)`;
//     });
//   }
// }
</script>

<style lang="scss" scoped>
@import "./../assets/mixins.scss";

.page-sample {
  display: grid;
  width: 100%;
  height: 100%;

  background-color: var(--background-color);

  .page-head {
    grid-column-start: span 2;
    border-bottom: 1px solid #dcdddf;
    padding: 80px 80px 60px;
    background: url("./../assets/images/bannerbg.webp") no-repeat center;
    background-size: 100% 100%;
  }

  .page-body {
    position: sticky;
    top: 60px;
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;

  }
}

.el-aside {
  padding-top: 60px;

  &.w280 {
    width: 320px;
  }

  &.w320 {
    width: 320px;
  }

  &.w400 {
    width: 400px;
  }
}

.content {
  flex: 1;
  padding: 0;
  border-left: 1px solid #dcdddf;
  scroll-behavior: smooth;
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
  padding-top: 60px;
  padding-left: 24px;
  padding-right: 50px;

  &:first-of-type {
    padding-top: 60px;
  }

  &.module {
    padding: 0;
    background-color: #ffffff;

    // &+.list-box {
    //   padding-top: 30px;
    // }
  }

  .box-title {
    @include setFont(40px, 56px, 500);
  }

  .menu-desc {
    padding-left: 14px;
  }

  .sub-title {
    margin: 30px 0 10px;
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
      border: 1px solid #E4E4E4;
      border-radius: 8px;
      box-shadow: 10px -10px 20px 0px #ffffff4d, -10px 10px 20px 0px #d9d9d980;
      overflow: hidden;
      background-color: #ffffff;

      &:hover {
        background: linear-gradient(315deg, #EBF8FF 1%, #C9D5FF 100%);
        border-color: #0071E3;
        box-shadow: 0 0 4px #0071E3;

        .name-box {
          font-weight: 600;
        }

        .version {
          background-color: #0071E3 !important;
          border-color: #0071E3 !important;
          color: #ffffff;
        }
      }

      .img-box {
        display: inline-block;
        width: 100%;
        aspect-ratio: 1;
        margin-bottom: 12px;
        overflow: hidden;

        img {
          border: none;
        }
      }



      .name-box {
        display: flex;
        margin-bottom: 8px;
        padding-right: 10px;
        @include setFont(16px, 20px);
        color: #323439;

        span:first-child {
          padding-left: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        span:last-child {
          padding: 0 6px;
          margin-left: 8px;
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
        padding-left: 14px;
        margin-bottom: 14px;
        color: var(--text-color2);
        @include setFont(14px, 16px);
      }
    }
  }
}
</style>