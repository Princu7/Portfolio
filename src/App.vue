<template>
  <div>
    <navbar> </navbar>
    <main-header></main-header>
    <div id="portfolio">
      <h2 class="title"> PORTFOLIO </h2>
      <hr class="dash"></hr>
      <div class="projects">
        <div class="project" v-for="project in projects">
          <project preview="1" v-bind:project="project"></project>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      projects: [
        {
          'title': 'Open Event Webapp',
          'image': './src/assets/princu7.jpg',
          'id': 1
        },
        {
          'title': 'Open Event Webapp',
          'image': './src/assets/princu7.jpg',
          'id': 2
        },
        {
          'title': 'Open Event Webapp',
          'image': './src/assets/princu7.jpg',
          'id': 3
        },
        {
          'title': 'Open Event Webapp',
          'image': './src/assets/princu7.jpg',
          'id': 4
        },
        {
          'title': 'Open Event Webapp',
          'image': './src/assets/princu7.jpg',
          'id': 5
        },
        {
          'title': 'Open Event Webapp',
          'image': './src/assets/princu7.jpg',
          'id': 6
        }
      ]
    }
  }
}
</script>

<style>
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

.title {
  text-align: center;
  font-size: 3.0em;
  color: #2c3e50;
  margin-top: 120px;
  margin-bottom: 20px;
}

.dash {
  color: black;
  width: 22%;
  margin: 0 auto;
  height: 4px;
  background-color: black;
}

.projects {
  width: 90%;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
}

.project {
  flex-shrink: 1;
  padding-right: 40px;
  flex-basis: 300px;
  margin-bottom: 20px;
}
</style>
