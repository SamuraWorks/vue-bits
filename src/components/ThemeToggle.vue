<template>
  <button
    class="ln-theme-toggle"
    type="button"
    :aria-label="isLight ? 'Switch to dark theme' : 'Switch to light theme'"
    :aria-pressed="isLight"
    @click="toggleTheme"
  >
    <svg v-if="isLight" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M16.4 12.4A6.8 6.8 0 0 1 7.6 3.6a6.9 6.9 0 1 0 8.8 8.8Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <svg v-else viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" stroke-width="1.5" />
      <path
        d="M10 1.9v2M10 16.1v2M18.1 10h-2M3.9 10h-2m13.83-5.73-1.42 1.42M5.61 14.39l-1.42 1.42m11.56 0-1.42-1.42M5.61 5.61 4.19 4.19"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isLight = ref(false);

function syncTheme() {
  isLight.value = document.documentElement.dataset.theme === 'light';
}

function toggleTheme() {
  const nextTheme = isLight.value ? 'dark' : 'light';
  isLight.value = nextTheme === 'light';
  document.documentElement.dataset.theme = nextTheme;

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  themeColor?.setAttribute('content', isLight.value ? '#f5f8f6' : '#090d0b');
}

onMounted(syncTheme);
</script>

<style src="./ThemeToggle.css"></style>
