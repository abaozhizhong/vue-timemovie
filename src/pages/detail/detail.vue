<template>
  <div class="wrap-detail" v-load-more="loadmore">
    <nav ref="nav1" id='nav1' class="">
      <img src="../../assets/back.svg" alt="" @click="$router.go(-1)">
      <span v-text="detail.titleCn" v-show="detail.titleCn"></span>
    </nav>
    <div class="img-box">
      <img :src="detail.image" alt="">
      <div>
        <p v-text="detail.titleCn" v-show="detail.titleCn"></p>
        <p v-text="detail.titleEn" v-show="detail.titleEn"></p>
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
    <div class="detail-actor" @click="$router.push({path:'/worker',query:{moviesid: $route.query.moviesid}})">
      <div class="detail-actor-head">
        <span>{{detail.personCount}}位演职员</span>
        <img src="../../assets/down.svg" alt="">
      </div>
      <div class="detail-actor-content">
          <dl class="director">
            <dt>导演</dt>
            <dd class="director-img">
              <img :src="detail.director.directorImg" alt="">
            </dd>
            <dd v-text="detail.director.directorName"></dd>
            <dd v-text="detail.director.directorNameEn"></dd>
          </dl>
          <dl class="actors" v-for="(item, index) in detail.actorList">
            <dt v-text="index === 0? '主要演员': '  '"></dt>
            <dd class="actor-img">
              <img :src="item.actorImg" alt="">
            </dd>
            <dd v-text="item.actor"></dd>
            <dd v-text="item.actorEn"></dd>
            <dd v-text="`饰${item.roleName}`"></dd>
          </dl>
      </div>
    </div>
    <div class="detail-images">
      <header>
        <span v-text="`${detail.imageCount}张图片`"></span>
        <img src="../../assets/down.svg" alt="">
      </header>
      <div class="detail-images-content">
        <img :src="item" alt="" v-for="item in detail.images">
      </div>
    </div>
    <div class="detail-commentsplus">
      <header>
        <span v-text="`精彩影评(${commentsplus.totalCount})`"></span>
        <img src="../../assets/down.svg" alt="">
      </header>
      <div class="detail-commentsplus-content">
        <p v-text="commentsplus.comments[0].title" class="commentsplus-title"></p>
        <p v-text="commentsplus.comments[0].content" class="commentsplus-content" ></p>
      </div>
      <dl class="commentsplus-info">
        <dt>
          <img :src="commentsplus.comments[0].headurl" alt="">
        </dt>
        <dd>
          <p v-text="commentsplus.comments[0].nickname"></p>
          <span>{{commentsplus.comments[0].modifyTime | getlocaltime }} 看过 - 评分 </span><span class="commentsplus-point">{{commentsplus.comments[0].rating | getdot}}</span>
        </dd>
      </dl>
    </div>
    <iframe :src="banner.advList[0].url" v-show="banner.count === 1" class="banner">

    </iframe>
    <div class="detail-commentsmini">
      <header>
        <span v-text="`网友短评(${commentsmini.totalCommentCount})`"></span>
        <img src="../../assets/down.svg" alt="">
      </header>
      <div class="commentsmini-content">
        <dl class="commentsmini-content-item" v-for="item in commentsmini.cts">
          <dt>
            <img :src="item.caimg" alt="">
          </dt>
          <dd >
            <p class="commentsmini-title">
              <i v-text="item.ca" class="commentsmini-title-name"></i>
              <time class="time">
                <span>{{item.cd | timeago}} </span>
                <i v-show="item.cr > 0">- 评</i>
                <span v-show="item.cr > 0" class="point">{{item.cr | getdot}}</span>
              </time>
            </p>
            <p v-text="item.ce" class="commentsmini-body"></p>
            <p class="commentsmini-footer">
              <a href="#">
                <i class="goods">

                </i>
                <span>赞</span>
              </a>
              <a>
                <i class="concat"></i>
                <span v-text="item.commentCount === 0? '回复': item.commentCount"></span>
              </a>

            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import {loadMore} from '../../common/mixin'
import api from '@/store/api'
export default {
  data () {
    return {
      isellipsis: true,
      imglist: [require('../../assets/down.svg'), require('../../assets/up.svg')],
      ticking: false,
      header: document.getElementById('nav1'),
      preventload: true, // 防止多次触底加载
      page: 1, // 短评页数
      commentsmini: [] // 点评数组
    }
  },
  created () {
    var that = this
    let params = {
      locationid: that.locationid,
      moviesid: this.$route.query.moviesid
    }
    let params1 = {
      moviesid: this.$route.query.moviesid,
      page: 1
    }
    this.setdetail(params)
    this.setbanner(params)
    // this.setcommentsmini(params1)
    this.setcommentsplus(params1)
    api.getcommentsmini(this.$route.query.moviesid, 1)
      .then(res => {
        this.commentsmini = res.data
      })
  },
  mixins: [loadMore],
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
      'setdetail',
      'setcommentsplus',
      'setbanner',
      'setcommentsmini'
    ]),
    loadmore () {
      console.log(1111)
      if (!this.preventload) {
        return
      }
      if (this.$route.name !== 'detail') return
      // console.log(this.$route)
      this.preventload = false
      this.page += 1
      api.getcommentsmini(this.$route.query.moviesid, this.page)
      .then(res => {
        this.commentsmini.cts = [...this.commentsmini.cts, ...res.data.cts]
        this.preventload = true
        if (res.data.cts.length === 0) {
          this.preventload = false
        }
      })
    }
  },
  computed: {
    ...mapGetters([
      'detail',
      'locationid',
      'commentsplus',
      'banner'
      // 'commentsmini'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import './detail';
</style>
