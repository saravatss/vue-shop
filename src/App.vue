<template>
  <div class="layout">
    <v-header/>

    <main class="layout__main">
      <router-view/>
    </main>

    <v-footer/>
  </div>
</template>

<script setup>
  import VHeader from '@/components/VHeader.vue';
  import VFooter from '@/components/VFooter.vue';
</script>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .layout__main {
    flex: 1;
  }
</style>