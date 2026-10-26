<template>
  <main class="ln-enrollment-page">
    <div class="ln-enrollment-content">
      <RouterLink class="ln-enrollment-logo" to="/" aria-label="Return to Xkul-Salone home">
        <img src="/xkul-salone-mark.svg" alt="Xkul-Salone" />
      </RouterLink>

      <section class="ln-enrollment-card" aria-labelledby="enrollment-title">
        <div class="ln-school-brand" aria-label="Selected school">
          <img :src="schoolLogo" :alt="`${schoolName} logo`" @error="useFallbackLogo" />
        </div>
        <p class="ln-enrollment-eyebrow">SCHOOL ACCESS</p>
        <h1 id="enrollment-title">Join {{ schoolName }}</h1>
        <p class="ln-enrollment-intro">Confirm your place in the school community, then create a secure account for your portal.</p>

        <form class="ln-enrollment-form" @submit.prevent="submitEnrollment">
          <fieldset v-if="!selectedRole" class="ln-role-fieldset">
            <legend>Choose your role</legend>
            <div class="ln-role-options">
              <button v-for="role in roles" :key="role.id" type="button" class="ln-role-option" @click="selectedRole = role.id">
                <strong>{{ role.label }}</strong>
                <span>{{ role.description }}</span>
              </button>
            </div>
          </fieldset>

          <template v-else>
            <button type="button" class="ln-back-button" @click="goBack">Change role</button>
            <p class="ln-selected-role">Registering as <strong>{{ selectedRoleLabel }}</strong></p>

            <template v-if="!detailsConfirmed">
              <label for="school-id">School ID number{{ selectedRole === 'parent' ? ' (your child\'s)' : '' }}</label>
              <input id="school-id" v-model="form.schoolId" required autocomplete="off" placeholder="Enter school ID number" />
              <label for="full-name">Full name</label>
              <input id="full-name" v-model="form.fullName" required autocomplete="name" placeholder="Enter your full name" />
              <label for="contact">Email or phone number</label>
              <input id="contact" v-model="form.contact" required autocomplete="email" placeholder="name@example.com or +232..." />
              <button class="ln-primary-button" type="button" @click="confirmDetails">Verify my school details</button>
            </template>
            <template v-else>
              <p class="ln-verification-message" role="status">Details confirmed. Create your password to continue to the {{ selectedRoleLabel.toLowerCase() }} portal.</p>
              <label for="new-password">Create password</label>
              <input id="new-password" v-model="form.password" required type="password" minlength="8" autocomplete="new-password" placeholder="At least 8 characters" />
              <label for="confirm-password">Confirm password</label>
              <input id="confirm-password" v-model="form.confirmPassword" required type="password" minlength="8" autocomplete="new-password" placeholder="Re-enter your password" />
              <p v-if="passwordMismatch" class="ln-form-error" role="alert">Passwords do not match.</p>
              <button class="ln-primary-button" type="submit">Create my account</button>
              <p v-if="submitted" class="ln-success-message" role="status">Account ready. Your {{ selectedRoleLabel.toLowerCase() }} portal access will open after registration is connected.</p>
            </template>
          </template>
        </form>
      </section>
    </div>

    <p class="ln-enrollment-powered">Powered by <strong>Syscend</strong></p>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const schoolName = computed(() => typeof route.query.school === 'string' && route.query.school ? route.query.school : 'your school');
const schoolLogo = ref(typeof route.query.logo === 'string' && route.query.logo ? route.query.logo : '/xkul-salone-mark.svg');
const selectedRole = ref('');
const detailsConfirmed = ref(false);
const submitted = ref(false);
const roles = [
  { id: 'student', label: 'Student', description: 'I attend this school' },
  { id: 'staff', label: 'Staff', description: 'I work at this school' },
  { id: 'parent', label: 'Parent', description: 'My child attends this school' }
];
const form = reactive({ schoolId: '', fullName: '', contact: '', password: '', confirmPassword: '' });
const selectedRoleLabel = computed(() => roles.find(role => role.id === selectedRole.value)?.label ?? '');
const passwordMismatch = computed(() => Boolean(form.confirmPassword) && form.password !== form.confirmPassword);

function useFallbackLogo() {
  schoolLogo.value = '/xkul-salone-mark.svg';
}

function goBack() {
  selectedRole.value = '';
  detailsConfirmed.value = false;
  submitted.value = false;
}

function confirmDetails() {
  if (form.schoolId.trim() && form.fullName.trim() && form.contact.trim()) {
    detailsConfirmed.value = true;
  }
}

function submitEnrollment() {
  submitted.value = detailsConfirmed.value && !passwordMismatch.value;
}
</script>

<style src="./EnrollmentPage.css"></style>
