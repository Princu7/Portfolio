<template>
  <div>
    <navbar> </navbar>
    <main-header></main-header>
    <div id="portfolio">
      <h2 class="title"> PORTFOLIO </h2>
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
  font-size: 2.5em;
  text-decoration-line: underline;
  color: #2c3e50
}

.projects {
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
}

.project {
  flex-shrink: 1;
  padding-right: 40px;
  flex-basis: 300px;
}
</style>
