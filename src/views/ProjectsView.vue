<template>
  <main>
    <Markdown :filePath="markdownFilePath" />
  </main>
</template>

<script>
  import Markdown from "../components/Markdown.vue";

  export default {
    components: {
      Markdown,
    },
    data() {
      return {
        // Provide the path to the Markdown file
        markdownFilePath: "assets/markdown-content/example.md",
      };
    },
  };
</script>

<style scoped>
  main {
    border: 1px solid red;
  }
</style>