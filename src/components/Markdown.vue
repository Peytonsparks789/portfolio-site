<template>
    <div class="markdown-content" v-html="sanitizedMarkdown"></div>
  </template>
  
  <script>
  import { marked } from "marked";
  import DOMPurify from "dompurify";
  
  export default {
    props: {
      filePath: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        sanitizedMarkdown: "",
      };
    },
    async created() {
      try {
        // Dynamically import the Markdown file
        const rawMarkdown = await fetch(this.filePath).then((res) => res.text());

        // Parse and sanitize the Markdown
        const rawHtml = marked(rawMarkdown);
        this.sanitizedMarkdown = DOMPurify.sanitize(rawHtml);
      } 
      catch (error) {
        console.error("Error loading Markdown file:", error);
      }
    },
  };
</script>
  
<style>

</style>