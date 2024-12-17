<template>
  <embed type="application/pdf" :src="pdfUrl" />
</template>

<script setup>
import { ref } from 'vue';

const pdfUrl = ref('/cme/cme-support.pdf');
</script>

<style scoped>
embed {
  width: 100%;
  height: 100%;
}
</style>