<template>
    <div id="projectList">

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
          <th scope="col">#</th>
          <th scope="col">Company Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in projectListItem" :key="index++">
          <th scope="row">{{ index }}</th>
          <td><router-link :to="'/project-detail/' + item.pid">{{ item.title }}</router-link></td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td><a href="#">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">
    <nav aria-label="..." style="margin: auto;">
      <ul class="pagination">
        <li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a> </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page"> <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
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
            projectListItem : [
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'},
                { pid: 'NCC10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', phone: '+603-2424 567', email: 'admin@btc.com'}
            ]
        }
    }
}
</script>

<style scoped>

</style>