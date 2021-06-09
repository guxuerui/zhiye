<template>
  <div class="pt-6 dark:text-white">
    <button class="rounded-lg mx-2 px-6 py-1 bg-blue-500 ring-4 ring-blue-500 ring-opacity-50">
      <router-link to="/" class="text-base text-white">首页</router-link>
    </button>
    <button class="rounded-lg mx-2 px-6 py-1 bg-yellow-500 ring-4 ring-yellow-500 ring-opacity-50">
      <router-link to="/list" class="text-base text-white">列表</router-link>
    </button>
    <button class="rounded-lg mx-2 px-6 py-1 bg-green-500 ring-4 ring-green-500 ring-opacity-50">
      <router-link to="/about" class="text-base text-white">历史</router-link>
    </button>
    <button class="rounded-lg mx-2 px-6 py-1 bg-purple-500 ring-4 ring-purple-500 ring-opacity-50">
      <span class="text-white" @click="toLight">浅色</span>
    </button>
    <button class="rounded-lg mx-2 px-6 py-1 bg-indigo-500 ring-4 ring-indigo-500 ring-opacity-50">
      <span class="text-white" @click="toDark">深色</span>
    </button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup: () => {
    onMounted(() => {
      let appElement = document.getElementById('html') || null;
      if (localStorage.theme && localStorage.theme === 'light') {
        appElement && appElement.classList.remove('dark');
      } else if (localStorage.theme && localStorage.theme === 'dark') {
        appElement && appElement.classList.add('dark');
      }
    })
    function toLight () {
      localStorage.theme = 'light'
      let appElement = document.getElementById('html') || null;
      appElement && appElement.classList.remove('dark');
    }

    function toDark () {
      localStorage.theme = 'dark'
      let appElement = document.getElementById('html') || null;
      appElement && appElement.classList.add('dark');
    }

    return {
      toLight,
      toDark
    }
  }
})
</script>

<style>
body {
  margin: 0; /* 清除页面默认边距 */
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
/* 去掉button点击后显示的边框 */
button:focus {
 outline: 0 none !important;
}
</style>
