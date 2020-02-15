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
        <tr v-for="(item, index) in displayedPosts" :key="index++">
          <!-- <th scope="row">{{ index }}</th> -->
          <td><router-link :to="'/project-detail/' + item.pid">{{ item.title }}</router-link></td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
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
export default {
    name : "projectList",
    data: function(){
        return {
            posts : [
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'test@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'afasdg@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'afg@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: '4rghg@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'htgr@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'rqegf@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'cgag@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'snhg@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'jywthegf@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'htef@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'aerhfdv@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'afg@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'jyh@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'wgda@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'asdg@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'adgva@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'adgar@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'asdga@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'asdgag@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'asdga@btc.com'}
            ],
            page: 1,
            perPage: 10,
            pages: [],	
        }
    },
    methods:{
      getPosts () {	
        let data = [];
        for(let i = 0; i < 10; i++){
          this.posts.push({
                suffix:'#' + i});
        }  
      },
      setPages () {
        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      paginate (posts) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  posts.slice(from, to);
      }
    },
    computed: {
      displayedPosts () {
        return this.paginate(this.posts);
      }
    },
    watch: {
      posts () {
        this.setPages();
      }
    },
    created(){
      this.getPosts();
    },
    filters: {
      trimWords(value){
        return value.split(" ").splice(0,20).join(" ") + '...';
      }
    }
}

</script>

<style scoped>

</style>