<script setup lang="ts">
const content = ref('行则将至，道阻且长；行而不戳，未来可期！！！')
</script>

<template>
  <div>
    <HdWangEditor v-model="content" :height="300" />
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3">
      <template #header> 预览 </template>
      {{ content }}
    </el-card>
  </div>
</template>
