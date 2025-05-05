<template>
  <div class="container">
    <h3>How to reach Grenoble</h3>
    <ul>
      <li>
        🚅 by Train. 8 TGV per day, linking Paris to Grenoble.
        <br />
        <a href="https://www.oui.sncf/train/trajet/paris/grenoble"
          >Paris - Grenoble tickets from sncf</a
        >
      </li>
      <li>
        ✈ By Plane. There are 3 airports close to the city:

        <ul>
          <li>
            <a href="https://www.grenoble-airport.com/"
              >Grenoble Alpes Isère Airport</a
            >. 30 minutes away from the city center
          </li>
          <li>
            <a href="https://www.gva.ch/fr/">Genève</a>. 1h45 from the city
            center of Grenoble
          </li>
          <li>
            <a href="https://www.lyonaeroports.com/en"
              >Lyon St Exupéry airport.
            </a>
            55 min way from the city center of Grenoble, the airport of Lyon
            allows an arrival on the territory from the entire Europe.
          </li>
        </ul>
      </li>
      <li>
        🚗 By Car. The motorway network of Auvergne-Rhône-Alpes, at the
        crossroads of Europe, is the densest in the country after Île-de-France.
        Thanks to the A41, A48, A49 and A51 freeways, Grenoble is easily
        connected to Lyon, the Rhône Valley, Switzerland and Italy.
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const hotels = [{}];
</script>
<style>
.with-indent {
  text-indent: 1.5rem;
}
.hotel-card {
  display: flex;
  flex-direction: column;
}
.grow {
  flex-grow: 1;
}
</style>
