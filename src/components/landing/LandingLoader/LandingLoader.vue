<template>
  <div class="ln-loader" :class="{ 'ln-loader--hide': hiding }" role="status" aria-live="polite">
    <div class="ln-loader-wordmark" aria-hidden="true">
      <span class="ln-loader-mark">S</span>
      <span>SaloneSchool</span>
    </div>
    <span class="sr-only">Loading SaloneSchool</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ hiding: boolean }>();
</script>

<style src="./LandingLoader.css"></style>
