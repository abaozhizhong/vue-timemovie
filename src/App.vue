<template>
    <transition name="router-in" mode="out-in">
      <router-view></router-view>
    </transition>
</template>

<script>
export default {
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
</style>
