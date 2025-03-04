<template>
  <div class="skills">
    <p>Skills</p>
    <ul>
      <li class="skill-header">Programming Languages</li>
      <ul class="skill-set">
        <li>T-SQL</li>
        <li>C#</li>
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
      <li class="skill-header">Front-End</li>
      <ul class="skill-set">
        <li>React</li>
        <li>Vue</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Figma</li>
      </ul>
      <li class="skill-header">Back-End</li>
      <ul class="skill-set">
        <li>PHP</li>
        <li>JavaScript</li>
        <li>SQL Server</li>
        <li>Azure Pipelines (ETL)</li>
      </ul>
    </ul>
  </div>
</template>
  
<script>
  export default {
    name: "SkillTiles",
  };
</script>
  
<style scoped>
    ul {
        padding: 0; /* Removes left padding */
        margin: 0;
    }
    .skill-set > li:first-child {
        margin-left: 40px;
    }
    .skills > p {
        font-size: 2.5em;
        margin: 0;
    }
    .skill-header {
        font-size: 2em;
        list-style: none;
        margin: 15px 0 15px 0;
    }
    .skill-set {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .skill-set > li {
        font-size: 1.5em;
        width: fit-content;
        border: 1px solid grey;
        border-radius: 5px;
        background-color: var(--header-grey);
        padding: 5px 15px 5px 15px;
    }
</style>
