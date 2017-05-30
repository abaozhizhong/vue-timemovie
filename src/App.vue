<template>
    <div id="app">
        <transition name="router-in" mode="out-in">
          <router-view></router-view>
        </transition>
        <div class="spinner"></div>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss" scoped>
@import './common/common';
.router-in-enter, .router-in-leave-active{
  opacity: 0;
}
.router-in-enter-active, .router-in-leave-active{
  transition:opacity .3s ease;
}
#app{
    position:relative;
    background-color: #fff;
}
.spinner {
     position:fixed;
     top:0;
     bottom:0;
     left:0;
     right:0;
  width: rem(100);
  height: rem(100);
  margin: 50vh auto;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
</style>
