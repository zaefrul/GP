<template>
  <div id="app">
    <!--ribbon-->
    <loader v-if="isLoading"></loader>
    <ribbon></ribbon>
    <!--routing-->
    <router-view></router-view>
    <!--footer-->
    <site-footer></site-footer>
  </div>
</template>

<script>
import Ribbon from "./components/shared/ribbon.vue"; //ribbon
import SiteFooter from "./components/shared/footer.vue"; //footer
import Loader from "./components/shared/loader.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "app",
  mounted() {
    this.initializeUserData();
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters(["user", "isLoading"])
  },
  watch: {
    user(val) {
      if (val === null) this.$router.push({ name: "login" });
    },
    isLoading(val) {
      setTimeout(() => {
        this.isLoading = val;
      }, 100);
    }
  },
  components: {
    Ribbon, //ribbon
    SiteFooter, //footer
    Loader
  },
  methods: {
    ...mapActions(["initializeUserData"])
  }
};
</script>
<style src="./app.css">
</style>