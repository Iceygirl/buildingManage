<template>
  <!--底部路由组件 -->
  <section>
      <footer class="FooterNav border-1px">
        <div class="navItem" @click="goTo('/reserve')" :class="{'on':isCurrent('/reserve')}">
          <span class="itemIcon">
            <i class="iconfont icon-bi"></i>
          </span> 
          <span>预约</span>
        </div>
        <div class="navItem" @click="goTo('/notice')" :class="{'on':isCurrent('/notice')}">
          <span class="itemIcon">
            <i class="iconfont icon-xiaoxi1"></i>
          </span> 
          <span>通知</span>
        </div>
        <div class="navItem" @click="goTo('/mine')" :class="{'on':isCurrent('/mine')}">
          <span class="itemIcon">
            <i class="iconfont icon-mine-gray"></i>
          </span> 
          <span>我的</span>  
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
      console.log(this.$route)
    },
    isCurrent(path) {
      return (this.$route.path === path)
    }
  }
}
</script>

<style lang="scss" scoped>
.FooterNav {
  border-top:1px solid #e4e4e4;
  position:fixed;
  z-index:100;
  left:0;
  right:0;
  bottom:0;
  background-color:#fff;
  width:100%;
  height:50px;
  display:flex;
  .navItem {
    display:flex;
    flex:1;
    text-align:center;
    flex-direction:column;
    align-items:center;
    margin:5px;
    color:#999999;
    &.on {
      color:#00A1FF;
    }
    span {
      font-size:12px;
      margin-top:2px;
      margin-bottom:2px;
      .iconfont {
        font-size:22px;
      }
    }
     
  }
}
  
    
    
</style>
