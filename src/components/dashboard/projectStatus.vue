<template>
    <div id="projectStatus" class="content-margin-top">
        
      <div class="card">
        <h5 class="card-header">Project Status
          <router-link to="/projectAdd"><button type="button" class="btn btn-primary btn-sm" style="float: right;">Add New Project</button></router-link>
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
              <tr v-for="(item, index) in project" :key="index++">
                <th scope="row">{{ index }}</th>
                <td>{{ item.dateCreated | moment("calendar") }}</td>
                <td><a href="#"><router-link :to="'/project-detail/' + item.id">{{ item.customer.companyName }}</router-link></a></td>
                <td>{{ item.stage }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'
import {Http} from '../../service/httpservice'
export default {
    name : "projectStatus",
    mounted(){
      Http.get("api/projects")
        .then(response => {
          this.createProject(response.data)
        })
    },
    computed: {
      ...mapGetters(["project"])
    },
    methods: {
      ...mapActions(["createProject"])
    }
}
</script>

<style>

</style>