<template>
  <section id="how-it-works" class="ln-process-section" aria-labelledby="ln-process-title">
    <div class="ln-section-shell">
      <div class="ln-section-intro" data-reveal>
        <p class="ln-section-kicker">
          <span></span>
          HOW IT WORKS
        </p>
        <h2 id="ln-process-title">
          From school to
          <br />
          <span>shared community.</span>
        </h2>
        <p class="ln-section-lead">
          A simple, school-first journey for bringing people, records and everyday routines together.
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
                <span>Student</span>
                <span>Parent</span>
                <span>Teacher</span>
                <span>School team</span>
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
        This is the intended platform journey. School onboarding and account sign-in are not live in this preview.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    number: '01',
    caption: 'SCHOOL ONBOARDING',
    title: 'A school joins',
    description: 'School leaders request a school space and confirm the details for their institution.',
    visual: 'school'
  },
  {
    number: '02',
    caption: 'AUTHORIZED ACCESS',
    title: 'People get the right view',
    description: 'Portal access is designed around each person’s role and authorized school membership.',
    visual: 'roles'
  },
  {
    number: '03',
    caption: 'CONNECTED SCHOOL LIFE',
    title: 'Everyday work connects',
    description: 'Records, classes, attendance, results, fees and school updates belong to one community.',
    visual: 'platform'
  }
];
</script>

<style src="./QuickStart.css"></style>
