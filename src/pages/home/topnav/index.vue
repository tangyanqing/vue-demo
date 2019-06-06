<template>
    <div class="home-topbar-wrapper border-half-bottom">
        <div class="top-menu-bar">
            <swiper :options="swiperOption" ref="swiper-box">
                <swiper-slide v-for="(news, index) in newsList" :key="index" :class="{'active': homeNewsIndex === index}" @click.native="active(index)">{{news.title}}</swiper-slide>
            </swiper>
        </div>
        <a class="top-menu-more-btn df-c" href="javascript:void(0)" @click="isTopBarBox=true"><i class="list-shadow"></i><span class="cross"></span></a>

        <AddNav :class="{'top-bar-active-active': isTopBarBox}" @close="isTopBarBox=false"></AddNav>

    </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'
  import AddNav from '../../../components/AddNav'
  export default {
    components: {
      swiper,
      swiperSlide,
      AddNav
    },
    data () {
      return{
        swiperOption: {
          slidesPerView: 6
        },
        isTopBarBox: false
      }
    },
    methods: {
      async active (index) {
        this.$store.state.home.newsIndex = index
        await this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
      }
    },
    computed: {
      swiper () {
        return this.$refs['swiper-box'].swiper
      },
      ...mapGetters([
        'newsList',
        'homeNewsIndex'
      ])
    }
  }
</script>
<style lang="less" scoped>
    @bar-color: #f4f5f6;
    .home-topbar-wrapper {
        height: 37px;
        line-height: 37px;
        color: #505050;
        font-size: 0.7rem;
        text-align: center;
        /*position: relative;*/
        width: 100%;
        position: fixed;
        z-index: 999;
        /*top: 44px;*/
        background: @bar-color;
        .active {
            color: #f40;
        }
        .top-menu-bar {
            width: e("calc(100% - 0.4rem)");
            position: absolute;

        }
        .top-bar-active-active {
            top: 0.1rem;
        }
        .top-menu-more-btn {
            position: absolute;
            right: 0;top: 0;
            /*width: 1.4rem;*/
            /*height: 0.8rem;*/
            width: 24px;
            height: 37px;
            background: @bar-color;
            z-index: 9;
            .list-shadow {
                position: absolute;
                right: 100%;top: 0;
                width: 0.1rem;
                height: 100%;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABIAAABXAK421QoAAAFiSURBVEjH1ZbbtoMgDERnKP//yaYPVSAhF077dHQtamU7k0RKAxwcPCF4ItF+tWMNsVZS91uJhNlRX7FGPMgizOrEObJSiZUUAnRkR6q0qnErm7Lhc9UDBaXUt0kN0FOaOo4SQ5BRCahOA3HT5KwTE50GZhV37VazJKYljjE2SE+sPsittC1XW/FmgNVsZJcvuhvrAbLqffNadPXLYgaLzs8wWSo6rk9FYdeBUW/x1DRswfS6ysuNlcDZ7ssTSCpIfDsZn/J8b+Omh8pjR/X8DkuWndwnINpOlukFbtvzVslAEmF+TCMaCC4fkr8oKUgVzmQ4IBojHfqFqwd28O0S6AXA7ib2P+HOTlzLcXZ3+tFz6yRObiOmGY+3k6ev5XN97Uq7FoCXkl5HTrT6tQiw2u1aY/TrZF551jyMFPZiOqW1O5zXiJx1PV/2Tw52tD8ddYc/9Zlq7qhBrlrtuhX/98cbycGBFpNaiv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDItMjdUMTc6NDQ6NDErMDg6MDDFbrv7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTAyLTI3VDE3OjQ0OjQxKzA4OjAwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=) no-repeat center right;
                background-size: contain;
            }
            .cross {
                width: 0.17rem;
                /*height: 0.17rem;*/
                height: 18px;
                &:before, &:after {
                    position: absolute;
                    content: ' ';
                    height: 0.67rem;
                    width: 0.08rem;
                    background-color: #f40;
                }
                &:before {
                    transform: rotate(90deg);
                }
            }

        }
    }
    .border-half-bottom:before {
        content: "";
        position: absolute;
        transform-origin: 0 0;
        transform: scale(.5);
        width: 200%;
        height: 2px;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #ddd;
    }
    .df-c {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
