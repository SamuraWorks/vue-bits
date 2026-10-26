<template>
  <section id="school-management-cta" class="ln-cta-section" aria-labelledby="ln-cta-title">
    <div class="ln-cta-shell" data-reveal>
      <div class="ln-cta-orbit ln-cta-orbit--one" aria-hidden="true"></div>
      <div class="ln-cta-orbit ln-cta-orbit--two" aria-hidden="true"></div>

      <div class="ln-cta-content">
        <p class="ln-section-kicker">
          <span></span>
          YOUR SCHOOL COMMUNITY
        </p>
        <h2 id="ln-cta-title">
          Every school,
          <br />
          <span>one connected community.</span>
        </h2>
        <p class="ln-cta-description">
          Xkul-Salone is a school management system designed for Sierra Leone — bringing student records, attendance,
          examinations, fees and school teams into one place.
        </p>

        <div class="ln-cta-actions">
          <RouterLink class="ln-button ln-button--primary" to="/login">
            Login
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4.2 10h11.6M10.4 4.6l5.4 5.4-5.4 5.4"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>
          <a class="ln-button ln-button--quiet" href="#platform">Explore school management</a>
        </div>

        <div class="ln-cta-status" role="note">
          <span aria-hidden="true"></span>
          Portal sign-in and live school records are not connected in this preview. It does not collect credentials or
          school data.
        </div>
        <p class="ln-cta-access-note">
          Portal access is planned around role and authorized school membership.
        </p>
      </div>
    </div>
  </section>
</template>

<style src="./CTA.css"></style>
