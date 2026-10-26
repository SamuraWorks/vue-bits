<template>
  <main class="ln-login-page">
    <div class="ln-login-content">
      <router-link class="ln-login-logo" to="/" aria-label="Return to Xkul-Salone home">
        <img src="/xkul-salone-mark.svg" alt="Xkul-Salone" />
      </router-link>

      <section class="ln-login-card" aria-labelledby="ln-login-title">
        <h1 id="ln-login-title">Login</h1>
        <form class="ln-login-form" @submit.prevent="submitLogin">
          <fieldset aria-describedby="ln-login-status">
            <legend class="sr-only">Login credentials</legend>
            <label for="login-contact">Email or phone number</label>
            <input id="login-contact" v-model="contact" type="text" autocomplete="username" placeholder="Email or phone number" required />
            <label for="login-password">Password</label>
            <input id="login-password" v-model="password" type="password" autocomplete="current-password" placeholder="Your password" required />
            <button class="ln-login-submit" type="submit">Login</button>
          </fieldset>
          <p id="ln-login-status" class="ln-login-status" role="status">{{ statusMessage }}</p>
        </form>
      </section>
    </div>

    <p class="ln-login-powered">Powered by <strong>Syscend</strong></p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contact = ref('');
const password = ref('');
const statusMessage = ref('Enter your details to continue.');

function submitLogin() {
  statusMessage.value = 'Login UI is ready. Account verification will be connected next.';
}
</script>

<style src="./LoginPage.css"></style>
