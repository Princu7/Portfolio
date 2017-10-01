<template>
  <div id="navbar" v-bind:class="{responsive: clicked}">
    <div class="name">
      <a href="#"> Developer</a>
      <button @click="clicked = !clicked" class="icon">&#9776;</button>
    </div>
    <div class="links">
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

.icon {
  display: none;
  float: right;
  font-size: 1.2em;
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
}

.responsive .links .push-right {
  display: block;
  float: none;
  text-align: left;
}


.name {
  float: left;
  font-size: 2em;
}


.push-right {
  float: right;
}

@media only screen and (max-width: 768px) {
  .links {
    display: none;
  }
  .icon {
    display: block;
  }
  .name {
    display: block;
    float: none;
  }
}
</style>
