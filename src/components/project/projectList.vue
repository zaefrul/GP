<template>
  <div id="projectList" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">PROJECT LIST</h1>
      <p class="lead">This is the listing of our projects</p>
      <p class="lead">
        <router-link to="project/add">
          <button type="button" class="btn btn-primary">Register New Project</button>
        </router-link>
      </p>
    </div>

    <div class="container" style="margin-bottom: 60px;">
      <div class="row">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
              <th scope="col" class="text-center">Phone Number</th>
              <th scope="col" class="text-center">Email</th>
              <th scope="col" class="text-center">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in displayedPosts" :key="index++">
              <th scope="row">{{ index }}</th>
              <td>
                <router-link :to="'/project-detail/' + item.id">{{ item.companyName }}</router-link>
              </td>
              <td class="text-center">{{ item.phone }}</td>
              <td class="text-center">{{ item.email }}</td>
              <td class="text-center">
                <a href="#" class="text-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <nav aria-label="Page navigation example" style="margin: auto;">
          <ul class="pagination">
            <li class="page-item">
              <button type="button" class="page-link" v-if="page != 1" @click="page--">Previous</button>
            </li>
            <li class="page-item" style="display: flex;">
              <button
                type="button"
                class="page-link"
                v-for="(pageNumber,index) in pages.slice(page-1, page+5)"
                @click="page = pageNumber"
                :key="index++"
              >{{pageNumber}}</button>
            </li>
            <li class="page-item">
              <button
                type="button"
                @click="page++"
                v-if="page < pages.length"
                class="page-link"
              >Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ProjectListAdapter } from "../../classess/adapter";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "projectList",
  data: function() {
    return {
      posts: [],
      page: 1,
      perPage: 10,
      pages: []
    };
  },
  mounted() {
    this.getAllProjects();
  },
  methods: {
    getPosts() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        this.posts.push({
          suffix: "#" + i
        });
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    formattedProjects(data) {
      let temp = data.map(d => new ProjectListAdapter(d));
      return temp;
    },
    ...mapActions(["getAllProjects"])
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
    ...mapGetters(["getLatestProjects", "project"])
  },
  watch: {
    posts() {
      this.setPages();
    },
    project(val) {
      this.posts = this.formattedProjects(val);
    }
  },
  // created() {
  //   this.getPosts();
  // },
  filters: {
    trimWords(value) {
      return (
        value
          .split(" ")
          .splice(0, 20)
          .join(" ") + "..."
      );
    }
  }
};
</script>

<style scoped>
</style>