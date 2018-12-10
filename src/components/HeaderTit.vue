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
.Header {
  height:42px;
  line-height:42px;
  text-align:center;
  background: #00A1FF;
  color:#fff;
  font-size:18px;
}
</style>
