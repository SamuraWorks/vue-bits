<template>
  <main class="ln-login-page">
    <header class="ln-login-header">
      <RouterLink class="ln-login-brand" to="/" aria-label="Xkul-Salone home">
        <span class="ln-login-brand-mark" aria-hidden="true">X</span>
        <span class="ln-login-brand-copy">
          <strong>Xkul-Salone</strong>
        </span>
      </RouterLink>

      <div class="ln-login-header-actions">
        <ThemeToggle />
        <RouterLink class="ln-login-back-link" to="/">Back to home</RouterLink>
      </div>
    </header>

    <div class="ln-login-shell">
      <section class="ln-login-panel" aria-labelledby="ln-login-title">
        <p class="ln-login-kicker">
          <span aria-hidden="true"></span>
          SCHOOL MANAGEMENT SYSTEM
        </p>
        <h1 id="ln-login-title">Login to Xkul-Salone</h1>
        <p class="ln-login-lead">Access your school workspace with the account provided by your school.</p>
        <p v-if="selectedSchool" class="ln-login-selected-school">
          Selected school: <strong>{{ selectedSchool }}</strong>
        </p>

        <div id="ln-login-status" class="ln-login-status" role="note">
          <span class="ln-login-status-mark" aria-hidden="true">i</span>
          <span>
            <strong>Portal sign-in is not active yet.</strong>
            <small>This preview does not collect or store credentials. Contact your school administrator for access.</small>
          </span>
        </div>

        <fieldset class="ln-login-fields" disabled aria-describedby="ln-login-status">
          <legend class="sr-only">Login credentials</legend>
          <label for="login-email">School email</label>
          <input id="login-email" type="email" autocomplete="username" placeholder="name@school.edu" />
          <label for="login-password">Password</label>
          <input id="login-password" type="password" autocomplete="current-password" placeholder="Your password" />
          <button class="ln-login-submit" type="button" disabled>Login</button>
        </fieldset>

        <p class="ln-login-help">Need an account? Ask your school administrator to add you to the correct school and role.</p>
      </section>

      <aside class="ln-login-aside" aria-labelledby="ln-login-aside-title">
        <p class="ln-login-aside-kicker">ROLE-AWARE PORTAL</p>
        <h2 id="ln-login-aside-title">One system. The right view for every role.</h2>
        <p>School management tools are planned around each person&apos;s responsibilities and authorized access.</p>

        <div class="ln-login-role-groups">
          <div>
            <small>PLATFORM</small>
            <span>Super Admin</span>
            <span>Ministry of Education</span>
          </div>
          <div>
            <small>SCHOOL LEADERSHIP</small>
            <span>School Admin</span>
            <span>Principal · HOD</span>
          </div>
          <div>
            <small>STAFF</small>
            <span>Teacher · Subject / Class Master</span>
            <span>Librarian · Accountant</span>
          </div>
          <div>
            <small>SCHOOL COMMUNITY</small>
            <span>Students</span>
            <span>Parents and guardians</span>
          </div>
        </div>

        <p class="ln-login-aside-note">Illustrative role map only — no live accounts or school data are connected.</p>
      </aside>
    </div>

    <footer class="ln-login-footer">
      <span>© {{ currentYear }} Xkul-Salone</span>
      <span>Powered by Syscend</span>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from '@/components/ThemeToggle.vue';

const currentYear = new Date().getFullYear();
const route = useRoute();
const selectedSchool = computed(() => {
  const school = route.query.school;
  return typeof school === 'string' ? school.trim() : '';
});
</script>

<style src="./LoginPage.css"></style>
