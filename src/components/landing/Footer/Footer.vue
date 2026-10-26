<template>
  <footer class="ln-footer">
    <div class="ln-footer-main">
      <div class="ln-footer-brand-column">
        <a class="ln-brand ln-footer-brand" href="#top" aria-label="Xkul-Salone school management home">
          <span class="ln-brand-mark" aria-hidden="true">X</span>
          <span class="ln-brand-copy">
            <span class="ln-brand-name">Xkul-Salone</span>
            <span class="ln-brand-location">SIERRA LEONE</span>
          </span>
        </a>
        <p class="ln-footer-tagline">School Management for Sierra Leone.</p>
        <p class="ln-footer-description">Student records, attendance, examinations, fees and school teams in one school-focused system.</p>
        <p class="ln-footer-powered">Powered by <strong>Syscend</strong></p>
      </div>

      <nav class="ln-footer-nav" aria-label="School management links">
        <h2>School management</h2>
        <a href="#platform">Modules</a>
        <a href="#how-it-works">How it works</a>
        <a href="#for-schools">Role-aware access</a>
        <a href="#ministry-portal">Ministry portal concept</a>
      </nav>

      <nav class="ln-footer-nav" aria-label="School access links">
        <h2>Access</h2>
        <a href="#for-schools">For schools</a>
        <RouterLink to="/login">Login</RouterLink>
        <a href="#ministry-portal">Ministry portal</a>
      </nav>

      <div class="ln-footer-note-column">
        <span class="ln-footer-location-pill">
          <i aria-hidden="true"></i>
          SIERRA LEONE
        </span>
        <p>Portal sign-in and live school records are not connected in this preview.</p>
      </div>
    </div>

    <div class="ln-footer-bottom">
      <span>© {{ currentYear }} Xkul-Salone</span>
      <span>School management system for Sierra Leone · Powered by Syscend</span>
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
