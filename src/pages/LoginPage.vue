<template>
  <main class="ln-login-page">
    <div class="ln-login-content">
      <router-link class="ln-login-logo" to="/" aria-label="Return to Xkul-Salone home">
        <img src="/xkul-salone-mark.svg" alt="Xkul-Salone" />
      </router-link>

      <section class="ln-login-card" aria-labelledby="ln-login-title">
        <h1 id="ln-login-title">Login</h1>
        <form class="ln-login-form" @submit.prevent>
          <fieldset disabled aria-describedby="ln-login-status">
            <legend class="sr-only">Login credentials</legend>
            <label for="login-email">School email</label>
            <input id="login-email" type="email" autocomplete="username" placeholder="name@school.edu" />
            <label for="login-password">Password</label>
            <input id="login-password" type="password" autocomplete="current-password" placeholder="Your password" />
            <button class="ln-login-submit" type="submit" disabled>Login</button>
          </fieldset>
          <p id="ln-login-status" class="ln-login-status" role="note">
            Login is not active in this preview. No credentials are collected.
          </p>
        </form>
      </section>
    </div>

    <p class="ln-login-powered">Powered by <strong>Syscend</strong></p>
  </main>
</template>

<style src="./LoginPage.css"></style>
