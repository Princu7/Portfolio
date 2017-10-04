<template>
  <div class="header">
    <img class="display-picture" src="./assets/princu7.jpg">
    <div class="intro-text">
      <div class="name">ABHISHEK RASTOGI</div>
      <hr class="line-break"></hr>
      <div class="skills">Web Developer - Blockchain - Algorithms</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoped>
.header {
  background-color: #18bc9c;
  text-align: center;
  padding-top: 140px;
  padding-bottom: 90px;
}

.intro-text {
  word-wrap: break-word;
  color: white;
}

.name {
  font-size: 3.5em;
  font-weight: bold;
  margin-bottom: 30px;
}

.line-break {
  width: 20%;
  height: 3px;
  background-color: white;
  margin-bottom: 40px;
}

.skills {
  font-size: 1.75em;
}

.display-picture {
  max-width: 100%;
  max-height: 250px;
  border-radius: 200px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 768px) {
  .name {
    font-size: 2em;
  }

  .skills {
    font-size: 1.25em;
  }

  .line-break {
    width: 90%;
  }
}
</style>
