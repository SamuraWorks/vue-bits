<template>
  <footer class="ln-footer">
    <div class="ln-footer-main">
      <div class="ln-footer-brand-column">
        <a class="ln-brand ln-footer-brand" href="#top" aria-label="SaloneSchool home">
          <span class="ln-brand-mark" aria-hidden="true">S</span>
          <span class="ln-brand-copy">
            <span class="ln-brand-name">SaloneSchool</span>
            <span class="ln-brand-location">SIERRA LEONE</span>
          </span>
        </a>
        <p class="ln-footer-tagline">Every School, One Connected Community.</p>
        <p class="ln-footer-description">A school management platform designed for the communities of Sierra Leone.</p>
      </div>

      <nav class="ln-footer-nav" aria-label="Platform links">
        <h2>Platform</h2>
        <a href="#platform">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#ministry-portal">Ministry portal concept</a>
        <a href="#find-school">Find a school</a>
      </nav>

      <nav class="ln-footer-nav" aria-label="School community links">
        <h2>School community</h2>
        <a href="#for-schools">For schools</a>
        <a href="#portal-access">Register a school</a>
        <a href="#portal-access">Portal access</a>
      </nav>

      <div class="ln-footer-note-column">
        <span class="ln-footer-location-pill">
          <i aria-hidden="true"></i>
          SIERRA LEONE
        </span>
        <p>School directory, registration and portal sign-in are not live yet.</p>
      </div>
    </div>

    <div class="ln-footer-bottom">
      <span>© {{ currentYear }} SaloneSchool</span>
      <span>Every School, One Connected Community.</span>
      <a href="#top">
        Back to top
        <span aria-hidden="true">↑</span>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style src="./Footer.css"></style>
