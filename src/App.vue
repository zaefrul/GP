<template>
  <div id="app">
      <!--ribbon-->
      <ribbon></ribbon>
      <!--routing-->
      <router-view></router-view>
      <!--footer-->
      <site-footer></site-footer>
  </div>
</template>

<script>
import Ribbon from './components/shared/ribbon.vue' //ribbon
import SiteFooter from './components/shared/footer.vue' //footer

export default {
  name: 'app',
  data: function(){
    return {
      
    }
  },
  components: {
    Ribbon, //ribbon
    SiteFooter, //footer
  }
}


</script>

