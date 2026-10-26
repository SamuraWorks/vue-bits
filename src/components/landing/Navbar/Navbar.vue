<template>
  <header class="ln-site-header" :class="{ 'is-scrolled': isScrolled, 'is-menu-open': isMenuOpen }">
    <div class="ln-header-shell">
      <a class="ln-brand" href="#top" aria-label="SaloneSchool home" @click="closeMenu">
        <span class="ln-brand-mark" aria-hidden="true">S</span>
        <span class="ln-brand-copy">
          <span class="ln-brand-name">SaloneSchool</span>
          <span class="ln-brand-location">SIERRA LEONE</span>
        </span>
      </a>

      <nav class="ln-desktop-nav" aria-label="Main navigation">
        <a v-for="link in navigationLinks" :key="link.href" class="ln-nav-link" :href="link.href" @click="closeMenu">
          {{ link.label }}
        </a>
      </nav>

      <div class="ln-header-actions">
        <a class="ln-login-link" href="#portal-access">Log in</a>
        <a class="ln-register-link" href="#for-schools">Register a school</a>
      </div>

      <button
        class="ln-menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="salone-mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="ln-mobile-menu">
      <div v-if="isMenuOpen" class="ln-mobile-menu-backdrop" @click.self="closeMenu">
        <nav id="salone-mobile-navigation" class="ln-mobile-menu" aria-label="Mobile navigation">
          <a v-for="link in mobileLinks" :key="link.href" :href="link.href" @click="closeMenu">
            {{ link.label }}
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="m6 3.5 4.5 4.5L6 12.5"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <p class="ln-mobile-menu-note">School directory and portal access are not live yet.</p>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';

const navigationLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Ministry portal', href: '#ministry-portal' },
  { label: 'Find a school', href: '#find-school' },
  { label: 'For schools', href: '#for-schools' }
];

const mobileLinks = [
  ...navigationLinks,
  { label: 'Log in', href: '#portal-access' },
  { label: 'Register a school', href: '#for-schools' }
];

const isMenuOpen = ref(false);
const isScrolled = ref(false);
let scrollFrame = 0;

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function updateScrollState() {
  if (scrollFrame) return;

  scrollFrame = window.requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 18;
    scrollFrame = 0;
  });
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu();
}

watch(isMenuOpen, isOpen => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState);
  window.removeEventListener('keydown', handleKeydown);
  if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
  document.body.style.overflow = '';
});
</script>

<style src="./Navbar.css"></style>
