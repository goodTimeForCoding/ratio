<template>
  <header class="header">
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer class="footer">
    <slot name="footer"></slot>
  </footer>
</template>

<script></script>

<style scoped lang="scss">
@import "@/assets/styles/components/header.scss";
@import "@/assets/styles/components/footer.scss";
</style>
