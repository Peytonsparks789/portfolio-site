<template>
  <main>
    <div class="grid">
      <GridTile title="SimpleConv" image="./assets/site-icons/simpleconv.png" link="https://simpleconv.com"/>
      <GridTile title="Advent of Code" image="./assets/site-icons/GitHubLogo.webp" link="https://github.com/Peytonsparks789/AdventOfCode"/>
      <GridTile title="SimpleCalculator" image="./assets/site-icons/GitHubLogo.webp" link="https://github.com/Peytonsparks789/SimpleCalculator"/>
      <GridTile title="Password Generator" image="./assets/site-icons/GitHubLogo.webp" link="https://github.com/Peytonsparks789/Password-Generator"/>
    </div>
  </main>
</template>

<script>
  import GridTile from '..//components/Grid-Tile.vue';

  export default {
    components: {
      GridTile,
    },
  };
</script>

<style>
  .grid {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 30px;
    width: fit-content;
    margin: 50px 0 0 0;
    justify-content: center;
  }
  .grid > .grid-tile {
    display: flex;
    height: 150px;
    width: 300px;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    text-decoration: none;
  }

  .grid > .grid-tile > img {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
  }

  @media (min-width: 768px) {
    .grid {
      margin: 0 0 0 0;
      justify-content: left;
    }
  }
</style>