<template>
  <div class="area-wrap">
    <div class="area-nav">
      <h2>选择城市</h2>
    </div>
    <div class="area-head">
      <div class="getlocation" v-text='`当前城市:${location}`'>
      </div>
      <div class="hot-city">
        <p>热门城市</p>
        <div class="hot-city-box">
          <span v-for="item in gethot" v-text="item.n" @click="jumphome(item.id, item.n)"></span>
        </div>
      </div>
    </div>
    <div class='area-all'>
        <div class="area-all-item" v-for="(item, key) in newcity">
          <h2 v-text="key">
            
          </h2>
          <div class="area-all-box">
            <span v-for="item1 in item" v-text="item1.n" @click="jumphome(item1.id, item1.n)"></span>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import api from '../../store/api'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      location: '定位中...',
      city: [],
      zimu: [],
      newcity: null
    }
  },
  created () {
    let that = this
    var promise = new Promise((resolve, reject) => {
      resolve()
    })
      promise.then(function (value) {
        that.getallcity()
      })
      .then(function (value) {
        that.getlocation()
      })
  },
  methods: {
    ...mapActions([
      'setlocation'
    ]),
    getlocation () {
      api.getlocation()
        .then(res => {
          let area = res.data.content.address_detail.city.slice(0, res.data.content.address_detail.city.length - 1)
          this.location = area
        })
    },
    getallcity () {
      api.getallcity()
        .then(res => {
          console.log(res)
          this.city = res.data.p
          let zimu = []
          for (let i = 0, len = res.data.p.length; i < len; i++) {
            if (zimu.indexOf(res.data.p[i].pinyinFull.slice(0, 1).toUpperCase()) === -1) {
              zimu.push(res.data.p[i].pinyinFull.slice(0, 1))
            }
          }
          // this.zimu = zimu.sort()
          let newcity = {}
          for (let i = 0, len = zimu.length; i < len; i++) {
            let newarr = res.data.p.filter(function (value, index) {
              return value.pinyinFull.slice(0, 1).toUpperCase() === zimu[i]
            })
            newcity[zimu[i]] = newarr
          }
          this.newcity = newcity
        })
    },
    jumphome (id, text) {
      let params = {
        id: id,
        text: text
      }
      this.setlocation(params)
      this.$router.push({path: '/home'})
    }
  },
  filters: {
    gethot (value) {
      // return value.slice
    }
  },
  computed: {
    gethot () {
      return this.city.slice(0, 12)
    }
  }
}
</script>
<style lang="scss" scoped>
@import './area.scss';
</style>

