<template>
    <div id="projectList" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
    <h1 class="display-4">PROJECT LIST</h1>
    <p class="lead">This is the listing of our projects</p>
    <p class="lead"> 
       <router-link to="project/add"><button type="button" class="btn btn-primary">Register New Project</button></router-link>
    </p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">Company Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in project" :key="index++">
          <th scope="row">{{ index }}</th>
          <td><router-link :to="'/project-detail/' + item.id">{{ item.customer.companyName }}</router-link></td>
          <td>{{ item.customer.phone }}</td>
          <td>{{ item.customer.email }}</td>
          <td><a href="#">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">

    <nav aria-label="Page navigation example" style="margin: auto;">
			<ul class="pagination">
				<li class="page-item">
					<button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
				</li>
				<li class="page-item" style="display: flex;">
					<button type="button" class="page-link" v-for="(pageNumber,index) in pages.slice(page-1, page+5)" @click="page = pageNumber" :key="index++"> {{pageNumber}} </button>
				</li>
				<li class="page-item">
					<button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
				</li>
			</ul>
		</nav>

  </div>

</div>

    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import Http from '../../service/httpservice'
export default {
    name : "projectList",
    mounted(){
      Http.get("/api/projects")
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

<style scoped>

</style>