<template>
  <div class="fixed inset-0 -z-10 pointer-events-none">
    <TresCanvas clear-color="#0a0a0a">
      <TresPerspectiveCamera :position="[0, 0, 7]" />
      
      <Suspense>
        <ThreeScene />
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup>
// ThreeScene is auto-imported by Nuxt
</script>

<style scoped>
/* Styles if needed */
</style>



