<template>
  <section
    id="hero"
    class="ln-hero"
    :style="heroGlowStyle"
    aria-labelledby="ln-hero-title"
    @pointermove="updateHeroGlow"
  >
    <div class="ln-hero-content">
      <div class="ln-hero-copy">
        <div class="ln-hero-eyebrow">
          <span class="ln-sierra-flag" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>SIERRA LEONE</span>
          <span class="ln-hero-eyebrow-separator" aria-hidden="true">/</span>
          <span>SCHOOL MANAGEMENT SYSTEM</span>
        </div>

        <h1 id="ln-hero-title" aria-label="School management for Sierra Leone.">
          <span>School</span>
          <span>management for</span>
          <span class="ln-hero-title-accent">Sierra Leone.</span>
        </h1>

        <p class="ln-hero-description">
          A school management system designed to bring student records, attendance, fees, examinations, staff and family
          communication into one school-focused workspace.
        </p>

        <div class="ln-hero-actions">
          <RouterLink class="ln-button ln-button--primary" to="/login">
            Login
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4.2 10h11.6M10.4 4.6 15.8 10l-5.4 5.4"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>
          <a class="ln-button ln-button--quiet" href="#find-school">Find your school</a>
        </div>

        <div class="ln-hero-caption">
          <span class="ln-hero-caption-dot" aria-hidden="true"></span>
          <span>Role-aware views for school leaders, staff, students and parents</span>
        </div>
      </div>

      <div class="ln-hero-preview" role="group" aria-label="Illustrative Xkul-Salone school management portal preview">
        <div class="ln-dashboard-frame">
          <div class="ln-dashboard-topbar">
            <div class="ln-dashboard-window-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="ln-dashboard-wordmark">
              <span class="ln-dashboard-mark" aria-hidden="true">X</span>
              Xkul-Salone
            </div>
            <span class="ln-dashboard-status">CONCEPT PREVIEW</span>
          </div>

          <div class="ln-dashboard-body">
            <div class="ln-dashboard-heading-row">
              <div>
                <p class="ln-dashboard-overline">ROLE-AWARE PORTAL</p>
                <h2>One school, the right view.</h2>
              </div>
              <span class="ln-dashboard-lock" aria-hidden="true">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="3.25" y="7.25" width="11.5" height="8" rx="1.7" stroke="currentColor" stroke-width="1.3" />
                  <path
                    d="M5.7 7.2V5.5a3.3 3.3 0 0 1 6.6 0v1.7M9 10.1v2.3"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </div>

            <div class="ln-role-switch" role="group" aria-label="Illustrative portal roles">
              <button
                v-for="role in portalRoles"
                :key="role.id"
                type="button"
                :aria-pressed="activeRoleId === role.id"
                @click="activeRoleId = role.id"
              >
                {{ role.label }}
              </button>
            </div>

            <div class="ln-dashboard-card" aria-live="polite">
              <div class="ln-dashboard-card-heading">
                <div>
                  <p class="ln-dashboard-role-label">{{ activeRole.audience }}</p>
                  <h3>{{ activeRole.title }}</h3>
                </div>
                <span class="ln-dashboard-avatar" aria-hidden="true">{{ activeRole.initial }}</span>
              </div>
              <p class="ln-dashboard-role-description">{{ activeRole.description }}</p>

              <div class="ln-dashboard-module-list">
                <div v-for="(item, index) in activeRole.items" :key="item" class="ln-dashboard-module">
                  <span
                    class="ln-dashboard-module-mark"
                    :class="`ln-dashboard-module-mark--${index + 1}`"
                    aria-hidden="true"
                  ></span>
                  <span>{{ item }}</span>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="m6 3.5 4.5 4.5L6 12.5"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <p class="ln-dashboard-disclaimer">
              <span aria-hidden="true"></span>
              Visual preview only — no live school data or accounts
            </p>
          </div>
        </div>
      </div>
    </div>

    <a class="ln-hero-scroll" href="#platform" aria-label="Scroll to platform features">
      <span>SCROLL TO EXPLORE</span>
      <span class="ln-hero-scroll-line" aria-hidden="true"></span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type PortalRole = {
  id: string;
  label: string;
  audience: string;
  title: string;
  description: string;
  initial: string;
  items: string[];
};

const portalRoles: PortalRole[] = [
  {
    id: 'super-admin',
    label: 'Super Admin',
    audience: 'PLATFORM ADMIN',
    title: 'Platform governance',
    description: 'Platform-level tools for managing approved school workspaces and accounts.',
    initial: 'S',
    items: ['School workspaces', 'Account and role access', 'System settings']
  },
  {
    id: 'ministry',
    label: 'Ministry',
    audience: 'MINISTRY OF EDUCATION',
    title: 'National oversight',
    description: 'A planned reporting view for authorized Ministry of Education personnel.',
    initial: 'M',
    items: ['School-submitted reports', 'NPSE, BECE and WASSCE', 'Accreditation and inspection']
  },
  {
    id: 'school-admin',
    label: 'School Admin',
    audience: 'SCHOOL ADMIN',
    title: 'School operations',
    description: 'School-wide management tools for authorized administrators.',
    initial: 'A',
    items: ['School profile and terms', 'Student and staff records', 'School reports']
  },
  {
    id: 'staff',
    label: 'Staff',
    audience: 'SCHOOL STAFF',
    title: 'Work by responsibility',
    description:
      'Principals, librarians, accountants, teachers, subject masters, class masters and Heads of Department (HOD) access the tools assigned to their work.',
    initial: 'T',
    items: ['Principal and HOD overview', 'Library and account workflows', 'Classes, subjects and attendance']
  },
  {
    id: 'student',
    label: 'Student',
    audience: 'STUDENT VIEW',
    title: 'Your learning day',
    description: 'A student view of learning information shared by the school.',
    initial: 'S',
    items: ['Timetable', 'Results', 'School announcements']
  },
  {
    id: 'parent',
    label: 'Parent',
    audience: 'PARENT / GUARDIAN VIEW',
    title: 'Stay connected',
    description: 'A family view for parents and guardians of school updates and student progress.',
    initial: 'P',
    items: ['Attendance', 'Report cards', 'School updates']
  }
];

const activeRoleId = ref('student');
const activeRole = computed(() => portalRoles.find(role => role.id === activeRoleId.value) ?? portalRoles[0]);
const heroGlowStyle = computed(() => ({
  '--pointer-x': '50%',
  '--pointer-y': '45%'
}));

function updateHeroGlow(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || !(event.currentTarget instanceof HTMLElement)) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
  event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
}
</script>

<style src="./Hero.css"></style>
