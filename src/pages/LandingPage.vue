<template>
  <main id="top" class="ln-site" :class="{ 'ln-motion-ready': motionReady }">
    <LandingLoader v-if="!loaded" :hiding="hiding" />

    <div class="landing-wrapper" :class="revealed ? 'ln-loaded' : 'ln-loading'" :aria-busy="!revealed">
      <Navbar />
      <Hero />
      <Features />
      <QuickStart />
      <MinistryPortal />
      <Ownership />
      <CTA />
      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import CTA from '@/components/landing/CTA/CTA.vue';
import Features from '@/components/landing/Features/Features.vue';
import Footer from '@/components/landing/Footer/Footer.vue';
import Hero from '@/components/landing/Hero/Hero.vue';
import LandingLoader from '@/components/landing/LandingLoader/LandingLoader.vue';
import MinistryPortal from '@/components/landing/MinistryPortal/MinistryPortal.vue';
import Navbar from '@/components/landing/Navbar/Navbar.vue';
import Ownership from '@/components/landing/Ownership/Ownership.vue';
import QuickStart from '@/components/landing/QuickStart/QuickStart.vue';

const MIN_LOADER_MS = 800;
const loaded = ref(false);
const hiding = ref(false);
const revealed = ref(false);
const motionReady = ref(false);
const prefersReducedMotion = ref(false);

let revealTimer: number | undefined;
let hideTimer: number | undefined;
let revealObserver: IntersectionObserver | undefined;

function revealPage() {
  hiding.value = true;
  revealed.value = true;
  hideTimer = window.setTimeout(
    () => {
      loaded.value = true;
    },
    prefersReducedMotion.value ? 0 : 600
  );
}

watch(
  loaded,
  isLoaded => {
    document.documentElement.style.overflow = isLoaded ? '' : 'hidden';
    document.body.style.overflow = isLoaded ? '' : 'hidden';
  },
  { immediate: true }
);

onMounted(() => {
  const startedAt = performance.now();
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  motionReady.value = !prefersReducedMotion.value;

  const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (prefersReducedMotion.value || !('IntersectionObserver' in window)) {
    revealTargets.forEach(target => target.classList.add('is-visible'));
  } else {
    requestAnimationFrame(() => {
      revealObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      revealTargets.forEach(target => {
        if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
          target.classList.add('is-visible');
        } else {
          revealObserver?.observe(target);
        }
      });
    });
  }

  const fontsReady = 'fonts' in document ? document.fonts.ready : Promise.resolve();

  void fontsReady.then(() => {
    const elapsed = performance.now() - startedAt;
    const remaining = prefersReducedMotion.value ? 0 : Math.max(0, MIN_LOADER_MS - elapsed);
    revealTimer = window.setTimeout(revealPage, remaining);
  });
});

onUnmounted(() => {
  if (revealTimer !== undefined) window.clearTimeout(revealTimer);
  if (hideTimer !== undefined) window.clearTimeout(hideTimer);
  revealObserver?.disconnect();
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
});
</script>
