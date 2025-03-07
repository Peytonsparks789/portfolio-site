<template>
  <a class="grid-tile" :href="link">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <img v-if="image" :src="image" :alt="title" />
  </a>
</template>

<script>
  export default {
    name: 'GridTile',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: null
      },
      link: {
        type: String,
        default: null
      }
    },
  };
</script>

<style>
  .grid-tile {
    text-align: center;
    position: relative;

    font-size: 1em;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: var(--header-grey);
    padding: 5px 15px 5px 15px;
  }
</style>
