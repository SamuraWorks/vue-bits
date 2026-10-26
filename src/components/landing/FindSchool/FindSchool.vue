<template>
  <section id="find-school" class="ln-find-school-section" aria-labelledby="ln-find-school-title">
    <div class="ln-find-school-shell">
      <div class="ln-find-school-copy" data-reveal>
        <p class="ln-find-school-eyebrow"><span aria-hidden="true"></span> SCHOOL ACCESS</p>
        <h2 id="ln-find-school-title">Find your <span>school.</span></h2>
        <p class="ln-find-school-lead">
          Search for the school workspace you belong to. Finding a school is separate from logging in or requesting a demo.
        </p>

        <form class="ln-find-school-form" @submit.prevent>
          <label for="find-school-query">School name</label>
          <div class="ln-find-school-field">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.9" cy="8.9" r="5.8" stroke="currentColor" stroke-width="1.4" />
              <path d="m13.2 13.2 4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            <input
              id="find-school-query"
              v-model="searchQuery"
              type="search"
              autocomplete="off"
              placeholder="Type your school name..."
              aria-controls="find-school-results"
            />
            <button type="submit">Search</button>
          </div>
        </form>

        <p class="ln-find-school-help">Already know your school? Choose it below to continue to Login.</p>
      </div>

      <div class="ln-find-school-results" data-reveal>
        <div class="ln-find-school-results-header">
          <div>
            <span>SAMPLE DIRECTORY</span>
            <strong>School results</strong>
          </div>
          <span class="ln-find-school-preview">Preview entries</span>
        </div>

        <ul id="find-school-results" class="ln-find-school-list">
          <li v-for="school in filteredSchools" :key="school.name">
            <span class="ln-find-school-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="m3 9 9-5 9 5v11H3V9Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                <path d="M9 20v-6h6v6M7 10h.01M12 10h.01M17 10h.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
              </svg>
            </span>
            <span class="ln-find-school-details">
              <strong>{{ school.name }}</strong>
              <small>School management workspace</small>
            </span>
            <RouterLink
              class="ln-find-school-login"
              :to="{ path: '/login', query: { school: school.name } }"
              :aria-label="`Continue to Login for ${school.name}`"
            >
              Continue to Login
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </RouterLink>
          </li>
          <li v-if="filteredSchools.length === 0" class="ln-find-school-empty" role="status">
            No sample school matches that name. Try another search.
          </li>
        </ul>

        <p class="ln-find-school-disclaimer">
          Sample school entries are shown for this preview; the live school directory is not connected.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const searchQuery = ref('');
const schoolDirectory = [
  { name: 'Ebenezer Comprehensive Pre Primary and Secondary School' },
  { name: 'Modern Foundation Academy' }
];

const filteredSchools = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase();

  if (!query) return schoolDirectory;

  return schoolDirectory.filter(school => school.name.toLocaleLowerCase().includes(query));
});
</script>

<style src="./FindSchool.css"></style>
