<template>
  <header class="main-header">
    <img
      src="../../../public/images/e-commerce-logo.svg"
      alt="logo on black letters"
      class="main-header__image"
    />
  </header>
</template>

<style scoped>
.main-header {
  height: 64px;
  display: flex;
}

.main-header__image {
  width: 120px;
  margin: 15px;
}

@media (min-width: 480px) {
  .main-header {
    height: 96px;
  }

  .main-header__image {
    width: 150px;
  }
}
</style>
