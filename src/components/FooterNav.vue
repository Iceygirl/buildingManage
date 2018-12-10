<template>
  <!--底部路由组件 -->
  <section>
      <footer class="FooterNav border-1px">
        <div class="navItem" @click="goTo('/reserve')" :class="{'on':isCurrent('/reserve')}">
          <span class="itemIcon">
            <i class="iconfont icon-bi"></i>
          </span> 
          <span class="itemText">预约</span>
        </div>
        <div class="navItem" @click="goTo('/notice')" :class="{'on':isCurrent('/notice')}">
          <span class="itemIcon">
            <i class="iconfont icon-xiaoxi1"></i>
          </span> 
          <span class="itemText">通知</span>
        </div>
        <div class="navItem" @click="goTo('/mine')" :class="{'on':isCurrent('/mine')}">
          <span class="itemIcon">
            <i class="iconfont icon-mine-gray"></i>
          </span> 
          <span class="itemText">我的</span>  
        </div>
      </footer>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted() {

  },
  methods: {  
    goTo(path) {
      this.$router.replace(path)
    },
    isCurrent(path) {
      return (this.$route.path === path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'hotcss/px2rem.scss';
 
.FooterNav {
  border-top:px2rem(2) solid #e4e4e4;
  position:fixed;
  z-index:100;
  left:0;
  right:0;
  bottom:0;
  background-color:#fff;
  width:100%;
  height:px2rem(90);
  display:flex;
  .navItem {
    display:flex;
    flex:1;
    text-align:center;
    flex-direction:column;
    align-items:center;
    color:#999999;
    &.on {
      color:#00A1FF;
    }
    .itemIcon {
      margin-top:px2rem(6);
      margin-bottom:px2rem(4);
      .iconfont {
        font-size:px2rem(44);
      }
    }
    .itemText {
      font-size:px2rem(24);
    }
  }
}
  
    
    
</style>
