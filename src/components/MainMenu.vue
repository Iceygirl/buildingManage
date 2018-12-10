<template>
  <!-- 预约的子菜单 -->
  <section>
    <div class="Menu">
      <div class="menuRow">
        <div class="menuItem" @click="goTo()">
          <span class="iconWrap">
            <i class="iconfont icon-fangke"></i>
          </span>
          <span class="menuText">访客预约</span>
        </div>
        <div class="menuItem">
          <span class="iconWrap">
            <i class="iconfont icon-huiyishi"></i>
          </span>
          <span class="menuText">会议室预约</span>
        </div>
      </div> 
      <div class="menuRow">
        <div class="menuItem">
          <span class="iconWrap">
            <i class="iconfont icon-bianji"></i>
          </span>
          <span class="menuText">预约编辑</span>
        </div>
        <div class="menuItem">
          <span class="iconWrap">
            <i class="iconfont icon-chaxun2"></i>
          </span>
          <span class="menuText">记录查询</span>
        </div>
      </div>  
    </div> 
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
    goTo() {
      this.$router.push('/reserve/visitorReserve')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'hotcss/px2rem.scss';

.Menu {
  .menuRow {
    margin-top:px2rem(100);
    display: flex;
    .menuItem {
      flex:1;
      text-align:center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconWrap {
        width:px2rem(120);
        height:px2rem(120);
        line-height:px2rem(120);
        text-align:center;
        border-radius:px2rem(16);
        background:linear-gradient(to top,  #fd7350, #ffc600);
        .iconfont {
          font-size:px2rem(60);
          color:#fff;
        }
      }
      .menuText {
        font-size:px2rem(30);
      }
    }
  }
}
</style>
