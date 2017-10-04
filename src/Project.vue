<template>
  <div>
    <div class="image">
      <img v-bind:src="project.image">
      <div class="overlay">
        <div class="caption">+</div>
      </div>
    </div>
    <i class="fa fa-bath fa-large"></i>
    <h3 class="project-title"> {{project.title}} </h3>
    <div slot="info"></div>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  props: ['preview', 'project']
}
</script>

<style scoped>
.image {
  position: relative;
}

.image img {
  max-width: 100%;
  height: auto;
}

.overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: #18bc9c;
  opacity: 0;
  transition: all 0.5s;
  padding-top: 25%;
  padding-left: 5%;
  box-sizing: border-box;
  font-size: 8em;
  color: white;
  font-weight: bold;
}

.image:hover .overlay {
  opacity: 0.5;
}
</style>
