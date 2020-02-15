<template>
    <div id="customerList" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">CUSTOMER</h1>
  <p class="lead">This is the listing of supplier</p>
  <p class="lead"> 
       <router-link to="customer/add"><button type="button" class="btn btn-primary">Register New Customer</button></router-link>
  </p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Company</th>
          <th scope="col">License</th>
          <th scope="col">Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in customer" :key="index++">
          <th scope="row">{{ index }}</th>
          <td>{{ item.id }}</td>
          <td><router-link :to="'/customer/view/' + item.id" >{{ item.companyName }}</router-link></td>
          <td>{{ item.license }}</td>
          <td>{{ item.phone }}</td>
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
import {mapActions, mapGetters, mapMutations} from 'vuex'
import Http from '../../service/httpservice'
export default {
    name : "customerList",
    mounted() {
      Http.get("api/customers")
        .then(response => {
          this.createCustomer(response.data)
        })
    },
    computed: {
      ...mapGetters(["customer"])
    },
    methods: {
      ...mapActions(["createCustomer"])
    }
}
</script>

<style scoped>

</style>