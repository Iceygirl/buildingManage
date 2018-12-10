<template>
  <!-- 预约主页 -->
  <section>
    <div class="ReserveMain">
      <header-tit :title="title"/>
      <main-menu/>
    </div>
  </section> 
</template>

<script>
import MainMenu from 'components/MainMenu'
import HeaderTit from 'components/HeaderTit'
export default {
  components: {
    'main-menu':MainMenu,
    'header-tit':HeaderTit,
  },
  data () {
    return {
      title:'智能预约'
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
