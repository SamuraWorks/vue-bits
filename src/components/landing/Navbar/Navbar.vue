<template>
  <header class="ln-site-header" :class="{ 'is-scrolled': isScrolled, 'is-menu-open': isMenuOpen }">
    <div class="ln-header-shell">
      <RouterLink class="ln-brand" to="/" aria-label="Xkul-Salone home" @click="closeMenu">
        <span class="ln-brand-mark" aria-hidden="true">X</span>
        <span class="ln-brand-copy">
          <strong>Xkul-Salone</strong>
        </span>
      </RouterLink>

      <nav class="ln-desktop-nav" aria-label="Main navigation">
        <a v-for="link in navigationLinks" :key="link.href" class="ln-nav-link" :href="link.href">
          {{ link.label }}
        </a>
      </nav>

      <div class="ln-header-actions">
        <RouterLink class="ln-login-link" to="/login">Login</RouterLink>
      </div>

      <ThemeToggle />

      <button
        class="ln-menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="xkul-mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="ln-mobile-menu">
      <div v-if="isMenuOpen" class="ln-mobile-menu-backdrop" @click.self="closeMenu">
        <nav id="xkul-mobile-navigation" class="ln-mobile-menu" aria-label="Mobile navigation">
          <a v-for="link in mobileLinks" :key="link.href" :href="link.href" @click="closeMenu">
            {{ link.label }}
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.2 8h9.4M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <RouterLink class="ln-mobile-login" to="/login" @click="closeMenu">
            Login
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.2 8h9.4M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </RouterLink>
          <p class="ln-mobile-menu-note">Portal sign-in is not connected in this preview.</p>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ThemeToggle from '@/components/ThemeToggle.vue';

const navigationLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Ministry portal', href: '#ministry-portal' },
  { label: 'Find your school', href: '#find-school' },
  { label: 'Book a demo', href: '#book-demo' },
  { label: 'For schools', href: '#for-schools' }
];

const mobileLinks = [...navigationLinks];
const isMenuOpen = ref(false);
const isScrolled = ref(false);

function updateScrollState() {
  isScrolled.value = window.scrollY > 16;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu();
}

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState);
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style src="./Navbar.css"></style>
