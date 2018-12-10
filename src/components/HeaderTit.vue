<template>
  <!-- 头部标题组件 -->
  <section>
    <div class="Header">
      {{title}}
    </div>
  </section>
</template>
 
<script> 
export default {
  props:{
    title:String
  },
  data () {
    return {
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
 
<style lang="scss" scoped>
@import 'hotcss/px2rem.scss';

.Header {
  width:100%;
  height:px2rem(80); 
  line-height:px2rem(80);
  text-align:center;
  background: #00A1FF;
  color:#fff;
  font-size:px2rem(34);
}
</style>
