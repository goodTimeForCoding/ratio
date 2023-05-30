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
.header {
  padding: 27px 0;
  background-color: #eff0f2;
}

.footer {
  color: #484848;
  background-color: #eff0f2;
}
</style>
