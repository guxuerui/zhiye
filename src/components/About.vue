<template>
  <div class="pt-8 w-40 mx-auto">
    <div class="mb-6">
      <h1 class="text-gray-800 dark:text-white mb-2">Dark Mode is here!</h1>
      <el-button type="primary" @click="handleClick">添加节点</el-button>
    </div>
    <el-timeline class="mt-4">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp">
        <span class="dark:text-white">{{activity.content}}</span>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
export default defineComponent({
  name: 'About',
  setup: () => {
    const timeArr = reactive({
       activities: [{
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
        size: 'large'
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }],
      handleClick: () => {
        timeArr.activities.unshift({
          content: '新的时间节点',
          timestamp: '2021-06-09 10:20',
          size: 'large',
          color: '#55bd87'
        });
      }
    });

    onMounted(() => {
      console.log('timeArr: ', timeArr);
    })
    return {
      ...timeArr
    }
  }
})
</script>