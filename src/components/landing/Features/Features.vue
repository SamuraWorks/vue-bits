<template>
  <section id="platform" class="ln-features-section" aria-labelledby="ln-features-title">
    <div class="ln-section-shell">
      <div class="ln-section-intro" data-reveal>
        <p class="ln-section-kicker">
          <span></span>
          THE PLATFORM
        </p>
        <h2 id="ln-features-title">
          One school day.
          <br />
          <span>All connected.</span>
        </h2>
        <p class="ln-section-lead">
          A school-centered platform designed to bring the essential parts of school life into one shared community.
        </p>
      </div>

      <div class="ln-features-grid">
        <article v-for="(feature, index) in features" :key="feature.title" class="ln-feature-card" data-reveal>
          <div class="ln-feature-card-topline">
            <span class="ln-feature-index">0{{ index + 1 }}</span>
            <span class="ln-feature-card-arrow" aria-hidden="true">↗</span>
          </div>

          <div class="ln-feature-visual" :class="`ln-feature-visual--${feature.visual}`" aria-hidden="true">
            <template v-if="feature.visual === 'records'">
              <div class="ln-record-top">
                <span>STUDENT RECORD</span>
                <span class="ln-record-status"></span>
              </div>
              <div class="ln-record-profile">
                <span class="ln-record-avatar"></span>
                <span class="ln-record-lines">
                  <i></i>
                  <i></i>
                </span>
              </div>
              <div class="ln-record-fields">
                <span>Enrollment</span>
                <i></i>
                <span>Student details</span>
                <i></i>
              </div>
            </template>

            <template v-else-if="feature.visual === 'people'">
              <div class="ln-people-heading">
                <span>YOUR SCHOOL COMMUNITY</span>
                <span class="ln-record-status"></span>
              </div>
              <div class="ln-people-chips">
                <span>Student</span>
                <span>Parent</span>
                <span>Teacher</span>
                <span>School team</span>
              </div>
              <div class="ln-people-lines">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </template>

            <template v-else-if="feature.visual === 'timetable'">
              <div class="ln-timetable-head">
                <span>WEEKLY TIMETABLE</span>
                <span>CLASS VIEW</span>
              </div>
              <div class="ln-timetable-grid">
                <span v-for="day in 5" :key="day" class="ln-timetable-day">
                  <i></i>
                  <b></b>
                  <i></i>
                </span>
              </div>
              <div class="ln-timetable-legend">
                <i></i>
                <span>Class and attendance overview</span>
              </div>
            </template>

            <template v-else-if="feature.visual === 'reports'">
              <div class="ln-report-heading">
                <span>ASSESSMENT SPACE</span>
                <span class="ln-report-ring"></span>
              </div>
              <div class="ln-report-row">
                <span class="ln-report-icon"></span>
                <span>Examinations</span>
                <i></i>
              </div>
              <div class="ln-report-row">
                <span class="ln-report-icon"></span>
                <span>Results</span>
                <i></i>
              </div>
              <div class="ln-report-row">
                <span class="ln-report-icon"></span>
                <span>Report cards</span>
                <i></i>
              </div>
            </template>

            <template v-else-if="feature.visual === 'fees'">
              <div class="ln-fee-receipt">
                <div class="ln-fee-receipt-head">
                  <span>FEE RECORD</span>
                  <span class="ln-fee-receipt-mark"></span>
                </div>
                <div class="ln-fee-line">
                  <span>School fees</span>
                  <i></i>
                </div>
                <div class="ln-fee-line">
                  <span>Payment history</span>
                  <i></i>
                </div>
                <div class="ln-fee-receipt-foot"><span>School-managed records</span></div>
              </div>
            </template>

            <template v-else>
              <div class="ln-community-banner">
                <span class="ln-community-spark"></span>
                <span>SCHOOL COMMUNITY</span>
              </div>
              <div class="ln-community-message">
                <i></i>
                <span>School announcement</span>
              </div>
              <div class="ln-community-message ln-community-message--muted">
                <i></i>
                <span>Administration</span>
              </div>
              <div class="ln-community-footer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </template>
          </div>

          <div class="ln-feature-card-copy">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Student enrollment and records',
    description: 'Keep student profiles and enrollment information organized within each school.',
    visual: 'records'
  },
  {
    title: 'Teachers, staff, classes and subjects',
    description: 'Bring school teams, class structures and subject management into a shared view.',
    visual: 'people'
  },
  {
    title: 'Attendance and timetables',
    description: 'Connect the school day with attendance routines and class schedules.',
    visual: 'timetable'
  },
  {
    title: 'Exams, results and report cards',
    description: 'Keep assessments, results and student reporting together in the school space.',
    visual: 'reports'
  },
  {
    title: 'School fees and payments',
    description: 'Give school fee records and payment information a clear, organized home.',
    visual: 'fees'
  },
  {
    title: 'Announcements and administration',
    description: 'Support school administration and make room for clear community updates.',
    visual: 'community'
  }
];
</script>

<style src="./Features.css"></style>
