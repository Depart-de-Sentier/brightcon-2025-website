<script setup lang="ts">
const { data: allagenda } = await useAsyncData("hackathon", () =>
  queryCollection("agenda").all(),
);
</script>

<template>
  <div class="container">
    <h1>Programme for Brightcon 2025</h1>
    <div class="row">
      <div class="col-10 prose" v-for="phase in allagenda" :key="phase.path">
        <ContentRenderer :value="phase" />
      </div>
    </div>
  </div>
</template>
