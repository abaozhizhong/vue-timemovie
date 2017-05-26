<template>
  <div class="wrap-home">
    <div class="home-nav">
      <div class="area" @click="$router.push({path: '/area'})">
        <span v-text="locationtext"></span>
        <img src="../../assets/下标.svg" alt="">
      </div>
      <h3></h3>
    </div>
    <div class="home-tab">
      <span @click="show = true">正在热映</span>
      <span @click="show = false">即将上映</span>
    </div>
    <div class="home-switch" :class="show? '': 'active'">
      <span></span>
    </div>
    <div class="home-content">
        <div v-show="show">
          <div class="on-list">
            <dl class="on-list-item" v-for="item in  onlist">
              <dt>
                <img :src="item.img" alt="">
              </dt>
              <dd class="item-info">
                <h1 >
                  <span v-text="item.tCn"></span>
                  <span v-show="item.r != -1" v-text="item.r" class="point"></span>
                </h1>
                <h3 v-text="`“${item.commonSpecial}`" v-show="item.commonSpecial !== ''"></h3>
                <h4 v-show="item.commonSpecial === ''"><span  class="people" v-text="`${item.wantedCount}`"></span><span v-text="`人想看-${item.movieType}`"></span></h4>
                <p v-text="`${item.rd}上映`"></p>
                <p v-text="`今日${item.NearestCinemaCount}家影院上映${item.NearestShowtimeCount}场`"></p>
                <div class="movie-types">
                  <span v-show="item.is3D">3D</span>
                  <span v-show="item.isIMAX3D">IMAX</span>
                  <span v-show="item.isDMAX">中国巨幕</span>
                </div>
                <div class="buy">购票</div>
              </dd>
            </dl>
          </div>
        </div>
        <div v-show="!show">
          <div class="attention-nav">
            <span class="active">最受关注</span>
            <span>六月大片</span>
            <span>七月大片</span>
            <span>八月大片</span>
            <span>有望引入</span>
          </div>
          <div class="attention-content">
            <div class="attention-content-item" v-for="item in soonlist.attention">
              <header v-text="`${item.rMonth}月${item.rDay}日`"></header>
              <div class="img-box">
                <img :src="item.image" alt="">
              </div>
              <p v-text="item.title"></p>
              <div class="whowantsee">
                <span v-text="`${item.wantedCount}人想看`"></span>
                <img src="../../assets/爱心.svg" alt="">
              </div>
            </div>
          </div>
          <p class="title">即将上映</p>
          <div class="moviecomings-content">
            <dl class="moviecomings-item" v-for="item in soonlist.moviecomings">
              <dt>
                <img :src="item.image" alt="">
              </dt>
              <dd>
                <p class="date">{{item.title}}<span v-text="item.releaseDate"></span></p>
                <p class="type">{{item.wantedCount}}<span v-text="`人想看-${item.type}`"></span></p>
                <p class="actor" v-text="`${item.actor1} / ${item.actor2}`"></p>
                <span class="buy">预售</span>
              </dd>
            </dl>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      show: true
    }
  },
  created () {
    this.setonlist(this.locationid)
    this.setsoonlist(this.locationid)
  },
  computed: {
    ...mapGetters([
      'locationid',
      'locationtext',
      'onlist',
      'soonlist'
    ])
  },
  methods: {
    ...mapActions([
      'setonlist',
      'setsoonlist'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import './home';
</style>

