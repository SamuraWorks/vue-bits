<template>
  <section id="find-school" class="ln-discovery-section" aria-labelledby="ln-discovery-title">
    <div class="ln-discovery-shell">
      <div class="ln-discovery-copy" data-reveal>
        <p class="ln-section-kicker">
          <span></span>
          SCHOOL DISCOVERY
        </p>
        <h2 id="ln-discovery-title">
          Find your
          <br />
          <span>school community.</span>
        </h2>
        <p class="ln-section-lead">
          Search by school name or town to get to the right school space. Verified listings will appear here as schools
          are onboarded.
        </p>
        <div class="ln-discovery-points">
          <p>
            <span aria-hidden="true"></span>
            School-specific access
          </p>
          <p>
            <span aria-hidden="true"></span>
            Portals organized by role
          </p>
          <p>
            <span aria-hidden="true"></span>
            Built for communities across Sierra Leone
          </p>
        </div>
      </div>

      <div class="ln-directory-card" data-reveal>
        <div class="ln-directory-card-header">
          <div>
            <p class="ln-directory-kicker">SALONESCHOOL DIRECTORY</p>
            <h3>Find a school</h3>
          </div>
          <span class="ln-directory-status">NOT LIVE</span>
        </div>

        <form class="ln-school-search" @submit.prevent="searchSchools">
          <label for="ln-school-search-input">School name or town</label>
          <div class="ln-school-search-controls">
            <input
              id="ln-school-search-input"
              v-model="schoolQuery"
              type="search"
              name="school"
              autocomplete="off"
              placeholder="Search school directory"
              aria-describedby="ln-directory-note ln-search-status"
            />
            <button type="submit">
              Search
              <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="4.5" stroke="currentColor" stroke-width="1.4" />
                <path d="m11.4 11.4 3.1 3.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <p id="ln-search-status" class="ln-search-status" role="status" aria-live="polite">{{ searchStatus }}</p>
        </form>

        <div class="ln-directory-empty" aria-label="No verified school listings are available yet">
          <span class="ln-directory-empty-mark" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <p>No verified school listings yet</p>
          <span>School listings will be added as institutions join.</span>
        </div>

        <p id="ln-directory-note" class="ln-directory-note">This preview does not send or save your search.</p>
        <a class="ln-directory-link" href="#for-schools">
          For school leaders: school onboarding
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M8.7 3.7 13 8l-4.3 4.3"
              stroke="currentColor"
              stroke-width="1.35"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const schoolQuery = ref('');
const searchStatus = ref('The verified school directory is not live yet.');

function searchSchools() {
  if (!schoolQuery.value.trim()) {
    searchStatus.value = 'Enter a school name or town. No search is stored.';
    return;
  }

  searchStatus.value = 'The directory is not live yet. Your search was not sent or saved.';
}
</script>

<style src="./LiveDemo.css"></style>
