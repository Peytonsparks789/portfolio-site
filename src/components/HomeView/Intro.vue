<template>
    <div class="intro">
        <p class="intro-header">Hello, I am</p>
        <p class="intro-header">Peyton Sparks</p>
        <p class="intro-header">Software Engineer / Applications Developer</p>
        <button @click="openResume">Resume</button>
        <p class="intro-content">Based in Indianapolis, Indiana, I am a software engineer and an applications developer at Lids. After graduating from Trine University with a degree in Computer Science & Information Technology, I’ve focused on crafting powerful back-end systems and blending them with beautiful front-end designs to create seamless and unique user experiences. I'm always excited for the next big development challenge.</p>
        <p class="intro-content">When I’m not coding, you’ll find me enjoying a baseball game, diving into a great book, exploring the latest video game, or experimenting with my 3D printer to bring creative ideas to life.</p>

    </div>
</template> 

<script>
export default {
    name: "Intro",
    methods: {
        openResume() {
            window.open('Resume.pdf', '_blank');
        }
    }
};
</script>

<style scoped>
  .intro {
    margin: 0 0 80px 0;
  }
  .intro * {
    margin: 10px 0 10px 0;
  }
  .intro > .intro-header {
    font-size: 2em;
  }
  .intro > .intro-content {
    font-size: 1.5em;
  }
  .intro > button {
    color: white;
    font-size: 1.5em;
    width: fit-content;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: var(--header-grey);
    padding: 5px;
    padding: 10px 15px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }
</style>