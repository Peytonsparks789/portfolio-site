<template>
  <main>
    <Intro />
    <SkillTiles />
  </main>
</template>

<script>
  import Intro from '../components/HomeView/Intro.vue';
  import SkillTiles from '../components/HomeView/SkillTiles.vue';

  export default {
  name: 'Home',
  components: {
    Intro,
    SkillTiles,
  },
};
</script>
