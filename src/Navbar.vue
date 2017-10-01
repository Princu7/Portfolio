<template>
  <div id="navbar" v-bind:class="{responsive: clicked}">
    <div class="name">
      <a href="#" class="pull-left"> STUDENT DEVELOPER</a>
      <button @click="clicked = !clicked" class="icon">&#9776;</button>
    </div>
    <div class="links">
      <hr v-if="clicked"></hr>
      <a class="push-right" href="#portfolio"> PORTFOLIO </a>
      <a class="push-right" href="#about"> ABOUT </a>
      <a class="push-right" href="#contact"> CONTACT </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data: function() {
    return {
      clicked: 0
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  font-weight: bold;
  padding: 25px;
  text-align: center;
  text-decoration: none;
}

.links {
  float: right;
}

.icon {
  display: none;
  float: right;
  background-color: #2c3e50;
  color: white;
  padding: 25px;
  border: 0;
  outline: 0;
}

#navbar {
  background-color: #2c3e50;
  color: white;
  overflow: hidden;
}

.responsive {
  position: relative;
}

.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
}

.responsive .links {
  display: block;
  float: none;
}

.responsive .links .push-right {
  display: block;
  float: none;
  text-align: left;
}

.name {
  float: left;
}

.pull-left {
  float: left;
}

.push-right {
  float: right;
}

@media only screen and (max-width: 768px) {
  .links {
    display: none;
  }
  .icon {
    display: inline;
  }
  .name {
    display: block;
    float: none;
    overflow: hidden;
  }
}
</style>
