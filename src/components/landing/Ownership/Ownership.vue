<template>
  <section id="for-schools" class="ln-schools-section" aria-labelledby="ln-schools-title">
    <div class="ln-schools-shell">
      <div class="ln-school-space-card" data-reveal aria-label="Illustrative school space and role access preview">
        <div class="ln-school-space-window">
          <div class="ln-school-space-topbar">
            <span class="ln-school-space-dots" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>SCHOOL SPACE</span>
            <span class="ln-school-space-label">ILLUSTRATIVE</span>
          </div>

          <div class="ln-school-space-content">
            <div class="ln-school-space-heading">
              <span class="ln-school-space-mark" aria-hidden="true">S</span>
              <div>
                <small>SCHOOL COMMUNITY</small>
                <strong>One school, its own space</strong>
              </div>
            </div>

            <div class="ln-school-space-divider"></div>

            <div class="ln-school-member-list">
              <div>
                <span class="ln-school-member-mark ln-school-member-mark--green">S</span>
                <span>Students</span>
                <span>Learning portal</span>
              </div>
              <div>
                <span class="ln-school-member-mark ln-school-member-mark--blue">P</span>
                <span>Parents</span>
                <span>Family portal</span>
              </div>
              <div>
                <span class="ln-school-member-mark ln-school-member-mark--green">T</span>
                <span>Teachers and staff</span>
                <span>Staff portal</span>
              </div>
              <div>
                <span class="ln-school-member-mark ln-school-member-mark--blue">A</span>
                <span>Administrators</span>
                <span>School tools</span>
              </div>
            </div>

            <div class="ln-school-access-note">
              <span class="ln-school-access-icon" aria-hidden="true">
                <svg viewBox="0 0 18 18" fill="none">
                  <rect x="3.25" y="7.25" width="11.5" height="8" rx="1.7" stroke="currentColor" stroke-width="1.3" />
                  <path
                    d="M5.7 7.2V5.5a3.3 3.3 0 0 1 6.6 0v1.7M9 10.1v2.3"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <span>
                <small>ACCESS MODEL</small>
                <strong>Role + authorized school membership</strong>
              </span>
            </div>
          </div>
        </div>
        <p class="ln-school-space-disclaimer">Visual concept only — school spaces are not live</p>
      </div>

      <div class="ln-schools-copy" data-reveal>
        <p class="ln-section-kicker">
          <span></span>
          FOR SCHOOLS
        </p>
        <h2 id="ln-schools-title">
          A school management
          <br />
          <span>system for Sierra Leone.</span>
        </h2>
        <p class="ln-schools-lead">
          Xkul-Salone is designed around the day-to-day work of Sierra Leone schools — student records, attendance,
          examinations, fees, staff responsibilities and communication with families.
        </p>

        <ul class="ln-school-benefits">
          <li>
            <span aria-hidden="true">01</span>
            <span>
              <strong>School-specific spaces</strong>
              <small>Keep each school’s community and information distinct.</small>
            </span>
          </li>
          <li>
            <span aria-hidden="true">02</span>
            <span>
              <strong>Role-aware school portals</strong>
              <small>Separate views for Super Admin, Ministry of Education, School Admin, staff, students and parents.</small>
            </span>
          </li>
          <li>
            <span aria-hidden="true">03</span>
            <span>
              <strong>Connected school routines</strong>
              <small>Bring administration and everyday school life into one experience.</small>
            </span>
          </li>
        </ul>

        <div class="ln-schools-actions">
          <RouterLink class="ln-button ln-button--primary" to="/login">Login</RouterLink>
          <span>Portal sign-in is not connected in this preview.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./Ownership.css"></style>
