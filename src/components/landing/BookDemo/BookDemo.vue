<template>
  <section id="book-demo" class="ln-book-demo-section" aria-labelledby="ln-book-demo-title">
    <div class="ln-book-demo-shell">
      <div class="ln-book-demo-copy" data-reveal>
        <p class="ln-book-demo-eyebrow"><span aria-hidden="true"></span> BOOK A DEMO</p>
        <h2 id="ln-book-demo-title">Let us learn about <span>your school.</span></h2>
        <p class="ln-book-demo-lead">
          Share your school information first, then the school administrator&apos;s details. We&apos;ll prepare a guided look
          at the school management system for your team.
        </p>
        <div class="ln-book-demo-points" aria-label="Information requested">
          <span><i aria-hidden="true">01</i> School information</span>
          <span><i aria-hidden="true">02</i> School Admin information</span>
        </div>
        <p class="ln-book-demo-copy-note">
          This demo request is separate from Login and Find your school. No form information is stored in this preview.
        </p>
      </div>

      <div class="ln-book-demo-card" data-reveal>
        <form class="ln-book-demo-form" @submit.prevent>
          <fieldset>
            <legend>School information</legend>
            <div class="ln-book-demo-grid">
              <label class="ln-book-demo-field ln-book-demo-field--wide" for="demo-school-name">
                <span>School name</span>
                <input id="demo-school-name" name="schoolName" type="text" autocomplete="organization" placeholder="Your school name" required />
              </label>
              <label class="ln-book-demo-field" for="demo-school-type">
                <span>School type</span>
                <select id="demo-school-type" name="schoolType" required>
                  <option value="" disabled selected>Select school type</option>
                  <option>Nursery</option>
                  <option>Primary</option>
                  <option>Junior Secondary</option>
                  <option>Senior Secondary</option>
                  <option>Combined</option>
                </select>
              </label>
              <label class="ln-book-demo-field" for="demo-school-location">
                <span>District or town</span>
                <input id="demo-school-location" name="schoolLocation" type="text" autocomplete="address-level2" placeholder="District or town" required />
              </label>
              <label class="ln-book-demo-field" for="demo-school-email">
                <span>School email</span>
                <input id="demo-school-email" name="schoolEmail" type="email" autocomplete="email" placeholder="office@school.edu" required />
              </label>
              <label class="ln-book-demo-field" for="demo-school-phone">
                <span>School phone</span>
                <input id="demo-school-phone" name="schoolPhone" type="tel" autocomplete="tel" placeholder="School contact number" />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>School Admin information</legend>
            <div class="ln-book-demo-grid">
              <label class="ln-book-demo-field" for="demo-admin-name">
                <span>Administrator full name</span>
                <input id="demo-admin-name" name="adminName" type="text" autocomplete="name" placeholder="Full name" required />
              </label>
              <label class="ln-book-demo-field" for="demo-admin-role">
                <span>Role at school</span>
                <input id="demo-admin-role" name="adminRole" type="text" autocomplete="organization-title" placeholder="Principal or School Admin" required />
              </label>
              <label class="ln-book-demo-field" for="demo-admin-email">
                <span>Administrator email</span>
                <input id="demo-admin-email" name="adminEmail" type="email" autocomplete="email" placeholder="admin@school.edu" required />
              </label>
              <label class="ln-book-demo-field" for="demo-admin-phone">
                <span>Administrator phone</span>
                <input id="demo-admin-phone" name="adminPhone" type="tel" autocomplete="tel" placeholder="Direct contact number" />
              </label>
            </div>
          </fieldset>

          <div class="ln-book-demo-submit-row">
            <p id="demo-email-status" role="note">
              Direct email is not configured yet. Your details are not sent or stored in this preview.
            </p>
            <button class="ln-book-demo-submit" type="submit" disabled aria-describedby="demo-email-status">
              Send demo request
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="m3 5 7 5 7-5M4 15h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style src="./BookDemo.css"></style>
