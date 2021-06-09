<template>
  <div class="pt-4 px-4">
    我是首页
    <el-calendar v-model="date.value" class="dark:bg-black">
    </el-calendar>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue'
export default defineComponent({
  name: 'Home',
  setup: () => {
    const date = reactive({
      value: new Date()
    })

    onMounted(() => {
      console.log('date: ', date);
    })
    return {
      date
    }
  }
})
</script>
