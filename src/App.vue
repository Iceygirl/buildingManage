<template>
  <div id="app">
    <router-view/>
    <footer-nav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterNav from 'components/FooterNav'
export default {
    components: {
      'footer-nav':FooterNav
    }
}
</script>

<style>
#app {
}
</style>
