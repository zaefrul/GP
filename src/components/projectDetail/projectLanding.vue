<template>
  <div id="projectLanding" class="content-margin-top">
    <div class="bg-grey csMenuHeader">
      <div class="container">
        <h1 class="font-weight-normal text-info">{{currentProject.number}}</h1>
        <h5>{{currentProject.customer.companyName}}</h5>
      </div>
    </div>

    <div class="container csMenuMargin">
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid"
                class="nav-link"
              >Project Information</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/crfq'"
                class="nav-link"
              >Cust RFQ</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/srfq'"
                class="nav-link"
              >Supp RFQ</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/cq'"
                class="nav-link"
              >Cust Quotation</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/sq'"
                class="nav-link"
              >Supp Quotation</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/cpo'"
                class="nav-link"
              >Cust Purchase Order</router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/spo'"
                class="nav-link"
              >Supp Purchase Order</router-link>
            </li>
          </ul>

          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "projectLanding",
  data() {
    return {};
  },
  mounted() {
    this.getCurrentProject(this.$route.params.pid);
  },
  computed: {
    ...mapGetters(["currentProject"])
  },
  methods: {
    ...mapActions(["getCurrentProject"])
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
.csMenuHeader {
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.356);
  padding-top: 30px;
}
.csMenuMargin {
  margin-top: -40px;
  margin-bottom: 50px;
}
.bg-grey {
  background-color: #e9ecef;
}
.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: transparent;
  background: #343a40;
  color: white;
}
a {
  color: #343a40;
  font-weight: bold;
}
ul {
  margin-bottom: 30px;
}
</style>