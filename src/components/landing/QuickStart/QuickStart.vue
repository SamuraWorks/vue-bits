<template>
  <section id="how-it-works" class="ln-process-section" aria-labelledby="ln-process-title">
    <div class="ln-section-shell">
      <div class="ln-section-intro" data-reveal>
        <p class="ln-section-kicker">
          <span></span>
          HOW IT WORKS
        </p>
        <h2 id="ln-process-title">
          School management,
          <br />
          <span>one clear workflow.</span>
        </h2>
        <p class="ln-section-lead">
          Bring student records, attendance, examinations, fees, staff responsibilities and family communication into one
          school-focused system.
        </p>
      </div>

      <ol class="ln-process-grid">
        <li v-for="step in steps" :key="step.number" class="ln-process-step" data-reveal>
          <div class="ln-step-meta">
            <span class="ln-step-number">{{ step.number }}</span>
            <span class="ln-step-caption">{{ step.caption }}</span>
          </div>

          <div class="ln-step-visual" :class="`ln-step-visual--${step.visual}`" aria-hidden="true">
            <template v-if="step.visual === 'school'">
              <div class="ln-step-school-card">
                <span class="ln-step-school-mark">S</span>
                <span class="ln-step-school-lines">
                  <i></i>
                  <i></i>
                </span>
                <span class="ln-step-school-outline"></span>
              </div>
              <div class="ln-step-school-foot">
                <span>School profile</span>
                <span>School details</span>
              </div>
            </template>

            <template v-else-if="step.visual === 'roles'">
              <div class="ln-step-role-orbit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="ln-step-role-chips">
                <span>Super Admin</span>
                <span>Ministry</span>
                <span>School Admin</span>
                <span>Staff</span>
                <span>Student</span>
                <span>Parent</span>
              </div>
            </template>

            <template v-else>
              <div class="ln-step-platform-header">
                <span>SCHOOL SPACE</span>
                <span></span>
              </div>
              <div class="ln-step-platform-grid">
                <span>Records</span>
                <span>Classes</span>
                <span>Attendance</span>
                <span>Updates</span>
              </div>
              <div class="ln-step-platform-foot">
                <i></i>
                <span>Connected school life</span>
              </div>
            </template>
          </div>

          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>

      <p class="ln-process-disclosure" data-reveal>
        <span aria-hidden="true">i</span>
        This is the intended school management workflow. Portal sign-in and live school data are not connected in this preview.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    number: '01',
    caption: 'SCHOOL SETUP',
    title: 'Set up the school',
    description: 'Organize the school profile, class structure and day-to-day records in one workspace.',
    visual: 'school'
  },
  {
    number: '02',
    caption: 'ROLE-AWARE ACCESS',
    title: 'Assign each role its view',
    description: 'Plan access for platform administrators, Ministry users, school leaders, staff, students and parents.',
    visual: 'roles'
  },
  {
    number: '03',
    caption: 'DAILY OPERATIONS',
    title: 'Manage the school day',
    description: 'Bring records, attendance, examinations, fees and school communication into one workflow.',
    visual: 'platform'
  }
];
</script>

<style src="./QuickStart.css"></style>
