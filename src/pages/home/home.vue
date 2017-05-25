<template>
  <div class="wrap-home">
    <div class="home-nav">
      <div class="area" @click="$router.push({path: '/area'})">
        <span v-text="locationtext"></span>
        <img src="../../assets/下标.svg" alt="">
      </div>
      <h3>时光网电影</h3>
    </div>
    <div class="home-tab">
      <span>正在热映</span>
      <span>即将上映</span>
    </div>
    <div class="home-switch">
      <span></span>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      // locationtext: ''
    }
  },
  computed: {
    ...mapGetters([
      'locationid',
      'locationtext'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import './home';
</style>

