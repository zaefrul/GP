<template>
  <div id="projectStatus">
    <div class="card">
      <h5 class="card-header">
        Project Status
        <router-link to="/project/add">
          <button type="button" class="btn btn-primary btn-sm" style="float: right;">Add New Project</button>
        </router-link>
      </h5>
      <div class="card-body">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Customer</th>
              <th scope="col">Stage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in formattedProjects" :key="index++">
              <th scope="row">{{ index }}</th>
              <td>{{ item.date }}</td>
              <td>
                <a href="#">
                  <router-link :to="'/project-detail/' + item.id">{{ item.companyName }}</router-link>
                </a>
              </td>
              <td>{{ item.stage }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ProjectLandingAdapter } from "../../classess/adapter";
export default {
  name: "projectStatus",
  props: {
    projects: []
  },
  computed: {
    formattedProjects() {
      let data = this.projects.map(data => new ProjectLandingAdapter(data));
      return data;
    }
  }
};
</script>

<style>
</style>