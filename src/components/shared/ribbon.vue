<template>
  <div id="ribbon">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <img src="../../assets/img/gp-white-logo.png" alt width="230px" />

      <div class="collapse navbar-collapse userButton" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="user !== null">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Welcome, {{ user.firstName }} {{ user.lastName }}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/setting">
                <a class="dropdown-item" href="#">Setting</a>
              </router-link>

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="javascript:void(0)" @click="handleLogout">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ribbon",
  // data() {
  //   return {
  //     user: null
  //   };
  // },
  computed: {
    ...mapGetters(["user"])
  },
  watch: {
    user(val) {
      this.user = val;
    }
  },
  methods: {
    ...mapActions(["handleLogout"])
  }
};
</script>

<style>
.userButton {
  position: absolute;
  right: 0;
  margin-right: 25px;
}
</style>
