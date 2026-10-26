<template>
  <div class="ln-loader" :class="{ 'ln-loader--hide': hiding }" role="status" aria-live="polite">
    <div class="ln-loader-wordmark" aria-hidden="true">
      <span class="ln-loader-mark">X</span>
      <span>Xkul-Salone</span>
    </div>
    <span class="sr-only">Loading Xkul-Salone</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ hiding: boolean }>();
</script>

<style src="./LandingLoader.css"></style>
