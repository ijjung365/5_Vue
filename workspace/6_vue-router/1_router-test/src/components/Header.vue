<template lang="">
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link class="nav-link px-2 text-secondary" to="/">Home</router-link></li>
          <li><router-link class="nav-link px-2 text-secondary" to="/features">eatures</router-link></li>
          <li><router-link class="nav-link px-2 text-secondary" to="/pricing">Pricing</router-link></li>
          <li><router-link class="nav-link px-2 text-secondary" to="/faqs">FAQs</router-link></li>
          <li><router-link class="nav-link px-2 text-secondary" to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang=""></style>
