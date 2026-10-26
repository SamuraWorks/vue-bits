<template>
  <main class="ln-enrollment-page">
    <div class="ln-enrollment-content">
      <RouterLink class="ln-enrollment-logo" to="/" aria-label="Return to Xkul-Salone home">
        <img src="/xkul-salone-mark.svg" alt="Xkul-Salone" />
      </RouterLink>

      <section class="ln-enrollment-card" aria-labelledby="enrollment-title">
        <p class="ln-enrollment-eyebrow">SCHOOL ACCESS</p>
        <h1 id="enrollment-title">Join {{ schoolName }}</h1>
        <p class="ln-enrollment-intro">Tell us how you are connected to this school so we can verify your access.</p>

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
            <button type="button" class="ln-back-button" @click="selectedRole = ''">Change role</button>
            <p class="ln-selected-role">Registering as <strong>{{ selectedRoleLabel }}</strong></p>

            <label for="school-id">School ID number{{ selectedRole === 'parent' ? ' (your child\'s)' : '' }}</label>
            <input id="school-id" v-model="form.schoolId" required autocomplete="off" placeholder="Enter school ID number" />

            <label for="full-name">Full name</label>
            <input id="full-name" v-model="form.fullName" required autocomplete="name" placeholder="Enter your full name" />

            <label for="contact">Email or phone number</label>
            <input id="contact" v-model="form.contact" required autocomplete="email" placeholder="name@example.com or +232..." />

            <label for="new-password">Create password</label>
            <input id="new-password" v-model="form.password" required type="password" minlength="8" autocomplete="new-password" placeholder="At least 8 characters" />

            <label for="confirm-password">Confirm password</label>
            <input id="confirm-password" v-model="form.confirmPassword" required type="password" minlength="8" autocomplete="new-password" placeholder="Re-enter your password" />

            <p v-if="passwordMismatch" class="ln-form-error" role="alert">Passwords do not match.</p>
            <button class="ln-primary-button" type="submit">Create account</button>
            <p v-if="submitted" class="ln-success-message" role="status">Your details are ready for school verification. Database registration will be connected next.</p>
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
const selectedRole = ref('');
const submitted = ref(false);
const roles = [
  { id: 'student', label: 'Student', description: 'I attend this school' },
  { id: 'staff', label: 'Staff', description: 'I work at this school' },
  { id: 'parent', label: 'Parent', description: 'My child attends this school' }
];
const form = reactive({ schoolId: '', fullName: '', contact: '', password: '', confirmPassword: '' });
const selectedRoleLabel = computed(() => roles.find(role => role.id === selectedRole.value)?.label ?? '');
const passwordMismatch = computed(() => Boolean(form.confirmPassword) && form.password !== form.confirmPassword);

function submitEnrollment() {
  submitted.value = !passwordMismatch.value;
}
</script>

<style src="./EnrollmentPage.css"></style>
