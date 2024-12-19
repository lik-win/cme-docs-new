<template>
  <div class="page-sample">
    <div class="page-head">
      <slot name="page-head"></slot>
    </div>
    <div class="page-body" ref="contentRef">
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
                    <a v-if="eg.id === openId" class="img-box" @click="handleOpen">
                      <img v-lazy :data-src="eg.cover" />
                    </a>
                    <router-link v-else class="img-box" :to="`/${path}/${eg.id}`">
                      <img v-lazy :data-src="eg.cover" />
                    </router-link>
                    <p class="name-box">
                      <span class="name">{{ eg.title }}</span>
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
    <a v-if="show2Top" class="to-top" @click="toTop">
      <svg width="24" height="12" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path stroke-width="2" stroke="currentColor" fill="transparent" d="m0 12 L12 2 L24 12"></path>
      </svg>
      TOP
    </a>
  </div>
</template>

<script setup>
import TreeMenu from './../components/TreeMenu.vue'
import { useGlobal } from '../store/index.js'
import { computed, onMounted, useTemplateRef, watch, ref } from 'vue'
const store = useGlobal();

const contentEl = useTemplateRef('contentRef');
const props = defineProps({
  type: { type: String, required: true },
})

const path = computed(() =>
  props.type.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`),
)
const types = ['components', 'algorithms', 'dataServices']
watch(
  () => props.type,
  (val) => {
    if (!types.includes(val)) return
    store.updateMenus(props.type)
  },
  { immediate: true },
);


const classMap = {
  components: 'w260',
  algorithms: 'w280',
  dataServices: 'w320'
}
const menuClass = computed(() => classMap[props.type]);

function getTime(item) {
  const { updateTime, createTime } = item;
  return (updateTime || createTime || '').split(/\s/)[0];
}

const show2Top = ref(false);
onMounted(() => {
  const pageEl = document.querySelector('.cme-layout');
  const targetEl = contentEl.value;
  pageEl.addEventListener('scroll', e => {
    const topGap = 70 * window.innerWidth / 1920;
    const { top } = targetEl.getBoundingClientRect();
    if (top < topGap) {
      if (targetEl.classList.contains('sticky')) return;
      targetEl.classList.add('sticky');
      show2Top.value = true;
      return targetEl.click();
    }
    show2Top.value = false;
    targetEl.classList.remove('sticky');
    pageEl.click();
  });
});

const vLazy = {
  mounted(el) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.unobserve(lazyImage);
        }
      });
    });
    observer.observe(el);
  }
};

function toTop() {
  const page = document.querySelector('.cme-layout');
  page.scrollTop = 0;
}

// AI算法，单独打开窗口
const openId = '1867136462803275778';
function handleOpen() {
  window.open('http://10.40.88.119:12009/#/', '_blank');
}
</script>

<style lang="scss" scoped>
@import './../assets/mixins.scss';

.page-sample {
  display: grid;
  width: 100%;
  height: 100%;

  background-color: var(--background-color);

  .page-head {
    grid-column-start: span 2;
    border-bottom: 1px solid #dcdddf;
    padding: 80px 80px 60px;
    background: url('./../assets/images/bannerbg.webp') no-repeat center;
    background-size: 100% 100%;
  }

  .page-body {
    display: flex;
    width: 100vw;

    &.sticky {
      position: sticky;
      top: 60px;
      height: calc(100vh - 60px);
      overflow-y: auto;
    }
  }
}

.el-aside {
  padding-top: 30px;

  &.w260 {
    width: 260px;
  }

  &.w280 {
    width: 280px;
  }

  &.w320 {
    width: 320px;
  }
}

.content {
  flex: 1;
  padding: 0;
  padding-right: 48px;
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
      border: 1px solid #e4e4e4;
      border-radius: 8px;
      box-shadow:
        10px -10px 20px 0px #ffffff4d,
        -10px 10px 20px 0px #d9d9d980;
      overflow: hidden;
      background-color: #ffffff;

      &:hover {
        background: linear-gradient(315deg, #ebf8ff 1%, #c9d5ff 100%);
        border-color: #0071e3;
        box-shadow: 0 0 4px #0071e3;

        .name-box {
          font-weight: 600;
        }

        .version {
          background-color: #0071e3 !important;
          border-color: #0071e3 !important;
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
          @include setTheme('background-color',
            (dark: var(--text-color-active),
            ));
          @include setTheme('border',
            (light: 1px solid var(--text-color2),
            ));
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

.to-top {
  @include position(fixed, $bottom: 160px, $right: 40px);
  @include flex(center, center, column);
  @include setBox(48px, 48px);
  border-radius: 50%;
  background-color: #0071E3;
  @include setFont(14px, 24px);
  color: #ffffff;
  transition: 0.1s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
