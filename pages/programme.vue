<script setup lang="ts">
const { data: hackathon } = await useAsyncData("hackathon", () =>
  queryCollection("content").path("/agenda/hackathon").first(),
);

const { data: classes } = await useAsyncData("classes", () =>
  queryCollection("content").path("/agenda/classes").first(),
);

const { data: conference } = await useAsyncData("conference", () =>
  queryCollection("content").path("/agenda/conference").first(),
);
</script>

<template>
  <div class="container">
    <h1>Programme for Brightcon 2025</h1>

    <div class="card">
      <header><h2>Hackathon 🛠️ - October 13th - 14th</h2></header>
      <p>We will gather to tackle different challenges, in a hackathon mode.</p>
      <div>
        <ContentRenderer v-if="hackathon" :value="hackathon" />
      </div>
    </div>

    <div class="card">
      <header><h2>Classes 🎓 - October 14th</h2></header>
      <p>We will gather to share our knowledge on brightway, but not only.</p>
      <ContentRenderer v-if="classes" :value="classes" />
    </div>

    <div class="card">
      <header><h2>Conference 📢 - October 15th - 17th</h2></header>
      <p>Our interactive gathering.</p>
      <ContentRenderer v-if="conference" :value="conference" />
    </div>
  </div>
</template>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
