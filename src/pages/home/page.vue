<template>
    <article class="home-wrapper">
        <!-- 顶部 nav 导航 -->
        <TopNav></TopNav>

        <!-- loading -->
        <div class="swiper-mask df-c" v-show="newsLoading">
            <!--<CircleLoading></CircleLoading>-->
        </div>

        <!-- 中间 -->
        <swiper ref="swiper-wrapper" id="swiper-container" @slideChangeTransitionEnd="end">
            <swiper-slide v-for="(news, index) in newsList" :key="index">
                <section class="swiper-box">
                    <ul>
                        <li v-for="(item,index) in news.list" :key="index" class="item border-half-bottom" @click="skip($router,item.id)">
                            <div v-if="item.images.length === 0">
                                <h4>{{item.title}}</h4>
                                <p class="wes-3">{{item.intro}}</p>
                                <div class="df-jc">
                                    <div class="small-box">
                                        <span>{{item.source}}</span>
                                        <span>评论：{{item.comment}}</span>
                                        <span>{{item.time}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="df-sb" v-else-if="item.images.length === 1">
                                <div class="item-l">
                                    <h4>{{item.title}}</h4>
                                    <p class="wes-2">{{item.intro}}</p>
                                    <div class="df-jc">
                                        <div class="small-box">
                                            <span>{{item.source}}</span>
                                            <span>评论：{{item.comment}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-r">
                                    <img :src="item.images[0]" alt="">
                                </div>
                            </div>
                            <div v-else>
                                <div class="item-t">
                                    <h4>{{item.title}}</h4>
                                    <p class="wes-1">{{item.intro}}</p>
                                </div>
                                <div class="item-b df-sb">
                                    <img :src="img" :alt="img" :style="{width: item.images.length === 2 ? '40%':'25%'}" v-for="(img,index) in item.images" :key="index">
                                </div>
                                <div class="df-jc">
                                    <div class="small-box">
                                        <span>{{item.source}}</span>
                                        <span>评论：{{item.comment}}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--<NoneData v-if="news.list&&news.list.length>0"></NoneData>-->
                </section>
            </swiper-slide>
        </swiper>

    </article>
</template>


<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'
  import TopNav from './topnav/index.vue'

  export default {
    components: {
      swiper,
      swiperSlide,
      TopNav
    },
    created () {
      this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
    },
    methods: {
      async end () {
        this.$store.state.home.newsIndex = this.swiper.activeIndex
        this.$store.state.home.newsPrevIndex = this.swiper.previousIndex
        // let data = await this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
      }
    },
    computed: {
      swiper (){
        return this.$refs['swiper-wrapper'].swiper
      },
      ...mapGetters([
        'newsList',
        'newsLoading',
        'homeNewsIndex',
        'homeNewsPrevIndex',
        'homeEnd',
      ])
    },
    watch: {
      homeNewsIndex () {
        this.swiper.slideTo(this.homeNewsIndex)
      }
    }
  }
</script>


<style lang="less" scoped>
    .home-wrapper {
        overflow-y: scroll;
    }
    .swiper-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;top: 0.4rem;
        background: #f4f4f4;
        z-index: 9;
    }
    #swiper-container {
        width: 100%;
        height: e("calc(100% - 0.4rem)");
        .swiper-box {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
        }
        .item {
            padding: 0.2rem 0.1rem;
            h4 {
                color: #f40;
            }
            p {
                font-size: 0.16rem;
                line-height: 1rem;
                margin: 0.1rem 0;
            }
            .small-box {
                >* {
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.1rem;
                    margin-right: 0.04rem;
                    color: #999;
                }
            }
        }
        .item-l {
            width: 70%;
            padding-right: 10px;
        }
        .item-r {
            width: 30%;
            img {
                width: 100%;
            }
        }
    }
    .df-sb {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .df-jc {
        display: flex;
        align-items: center;
    }
</style>
