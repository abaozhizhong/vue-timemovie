<template>
  <div class="wrap-detail">
    <nav ref="nav1" id='nav1' class="">
      <img src="../../assets/back.svg" alt="" @click="$router.go(-1)">
      <span v-text="detail.titleCn"></span>
    </nav>
    <div class="img-box">
      <img :src="detail.image" alt="">
      <div>
        <p v-text="detail.titleCn"></p>
        <p v-text="detail.titleEn"></p>
      </div>
    </div>
    <div class="detail-head">
      <div class="detail-head-img">
        <img :src="detail.image" alt="">
      </div>
      <dl class="detail-head-info">
        <dd v-text="detail.runTime"></dd>
        <dd >
          <span v-for="item in detail.type" v-text="`${item}/`"></span>
        </dd>
        <dd v-text="`${detail.release.date + detail.release.location}上映`"></dd>
        <dd v-text="`“${detail.commonSpecial}`" class="color"></dd>
        <dd class="cimera">
          <span v-if="detail.isIMAX3D">IMAX</span>
          <span v-if="detail.is3D">3D</span>
          <span v-if="detail.isDMAX">中国巨幕</span>
        </dd>
      </dl>
    </div>
    <div class="detail-content">
      <p v-text="`剧情：${detail.content}`" :class="isellipsis? 'ellipsis':''"></p>
      <img :src="isellipsis? imglist[0]:imglist[1] " alt="" @click="isellipsis = !isellipsis">
    </div>
    <div class="detail-actor">
      <dl class="director">
        <dt>导演</dt>
        <dd class="director-img">
          <img :src="detail.director.directorImg" alt="">
        </dd>
        <dd v-text="detail.director.directorName"></dd>
        <dd v-text="detail.director.directorNameEn"></dd>
      </dl>
      <dl class="actors" v-for="item in detail.actorList">
        <dt>主演</dt>
        <dd class="actor-img">
          <img :src="item.actorImg" alt="">
        </dd>
        <dd v-text="item.actor"></dd>
        <dd v-text="item.actorEn"></dd>
        <dd v-text="`饰${item.roleName}`"></dd>
      </dl>
    </div>
    <div class="detail-audio">

    </div>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      isellipsis: true,
      imglist: [require('../../assets/down.svg'), require('../../assets/up.svg')],
      ticking: false,
      header: document.getElementById('nav1')
    }
  },
  created () {
    var that = this
    let params = {
      locationid: that.locationid,
      moviesid: this.$route.query.moviesid
    }
    this.setdetail(params)
  },
  mounted () {
    let that = this
    window.addEventListener('scroll', function (e) {
      let pos = window.scrollY
      let header = document.getElementById('nav1')
      if (pos > 100 && !that.ticking) {
        header.classList.add('pulldown')
        that.ticking = true
      }
      if (pos < 100 && that.ticking) {
        header.classList.remove('pulldown')
        that.ticking = false
      }
    })
  },
  methods: {
    ...mapActions([
      'setdetail'
    ])
  },
  computed: {
    ...mapGetters([
      'detail',
      'locationid'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import './detail';
</style>
