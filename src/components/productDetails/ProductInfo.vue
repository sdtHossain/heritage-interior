<script setup lang="ts"></script>
<template>
  <div class="mt-20">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >
          Description
        </button>
        <button
          class="nav-link"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Information
        </button>
        <button
          class="nav-link"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-contact"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
        >
          Reviews
        </button>
      </div>
    </nav>
    <div class="tab-content pt-5" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
        tabindex="0"
      >
        <h4 class="mb-3">Product Description</h4>
        <p>
          Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
          invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
          consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
          Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos
          dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
          nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
          tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
        </p>
        <p>
          Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor
          consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita
          clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum.
          Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
        </p>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
        tabindex="0"
      >
        <h4 class="mb-3">Information</h4>
        <p>
          Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
          invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
          consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
          Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos
          dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
          nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
          tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
        </p>
        <p>
          Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor
          consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita
          clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum.
          Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
        </p>
      </div>
      <div
        class="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
        tabindex="0"
      >
        <h4 class="mb-3">Reviews</h4>
        <p>
          Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam
          invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
          consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam.
          Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos
          dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod
          nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt
          tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.
        </p>
        <p>
          Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor
          consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita
          clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum.
          Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
        </p>
      </div>
      <div
        class="tab-pane fade"
        id="nav-disabled"
        role="tabpanel"
        aria-labelledby="nav-disabled-tab"
        tabindex="0"
      >
        ...
      </div>
    </div>
  </div>
</template>
<style scoped></style>
