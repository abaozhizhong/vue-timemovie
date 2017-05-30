<template>
    <div class="wrap-worker">
        <nav ref="nav1" id='nav1' class="">
          <img src="../../assets/back.svg" alt="" @click="$router.go(-1)">
          <span>演职员表</span>
        </nav>
        <div class="worder-content">
            <section class="worker-item" v-for="item in list">
                <h2 v-text="item.typeName"></h2>
                <ul>
                    <li v-for="item1 in item.persons">
                        <div class="worker-img">
                            <img :src="item1.image" alt="">
                        </div>
                        <div class="worker-name">
                            <p v-text="item1.name" class="worker-name-real"></p>
                            <p v-text="item1.nameEn" class="worker-name-realen"></p>
                            <p v-text="`饰:${item1.personate}`" v-sho="item1.personate" class="worker-name-role"></p>
                        </div>
                        <div class="worder-actor" v-show="item1.roleCover">
                            <img :src="item1.roleCover" alt="">
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
import api from '../../store/api'
export default {
    data () {
        return {
            list: []
        }
    },
    created () {
        api.getworker(this.$route.query.moviesid)
            .then(res => {
                this.list = res.data.types
            })
    }
}
</script>
<style lang="scss" scoped>
@import './worker.scss';
</style>