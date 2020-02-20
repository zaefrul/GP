<template>
  <div id="dashboardLanding" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <h1 class="display-4">DASHBOARD</h1>
            <p class="lead">Welcome to Request For Quotation System</p>
          </div>
          <div class="col-lg-3">
            <!-- <form class="form-inline my-2 my-lg-0" style="padding: 2.6em 0;">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>-->
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-bottom: 60px;">
      <div class="row">
        <div class="col-lg-8">
          <!--project status-->
          <project-status :projects="projects"></project-status>
        </div>
        <div class="col-lg-4">
          <!--invoice status-->
          <invoice-status :projects="allProjects"></invoice-status>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**project status */
import ProjectStatus from "./projectStatus.vue";
import InvoiceStatus from "./invoiceStatus.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "dashboardLanding",
  components: {
    ProjectStatus,
    InvoiceStatus
  },
  mounted() {
    this.getDashboardProjects();
  },
  data() {
    return {
      projects: [],
      allProjects: []
    };
  },
  computed: {
    ...mapGetters(["getLatestProjects", "project"])
  },
  watch: {
    getLatestProjects(val) {
      this.projects = val;
    },
    project(val) {
      this.allProjects = val;
    }
  },
  methods: {
    ...mapActions(["getDashboardProjects"])
  }
};
</script>

<style scoped></style>
