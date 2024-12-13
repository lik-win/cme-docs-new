<template>
  <!-- <iframe :src="pdfUrl" frameborder="0"></iframe> -->
  <embed type="application/pdf" :src="pdfUrl" />
</template>

<script setup>
import { ref } from 'vue';

const url = 'http://localhost:8090/cmd-support.pdf';


const pdfUrl = ref(null);
fetch(url).then(res => res.blob()).then(data => {
  pdfUrl.value = URL.createObjectURL(data)
});
</script>

<style scoped>
iframe,
embed {
  width: 100%;
  height: 100%;
}
</style>