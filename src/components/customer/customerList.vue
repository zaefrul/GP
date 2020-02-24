<template>
  <div id="customerList" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">CUSTOMER</h1>
      <p class="lead">This is the listing of supplier</p>
      <p class="lead">
        <router-link to="customer/add">
          <button type="button" class="btn btn-primary">Register New Customer</button>
        </router-link>
      </p>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col" class="text-center">Company</th>
                <th scope="col" class="text-center">License</th>
                <th scope="col" class="text-center">Contact</th>
                <th scope="col" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in customerItem" :key="index++">
                <th scope="row">{{ index }}</th>
                <td>{{ item.id }}</td>
                <td class="text-center">
                  <router-link :to="'/customer/view/' + item.id">{{ item.companyName }}</router-link>
                </td>
                <td class="text-center">{{ item.license }}</td>
                <td class="text-center">{{ item.phone }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="()=> deleteCust(item.id)"
                  >Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

          <nav aria-label="..." style="margin: auto;">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "customerList",
  data: function() {
    return {
      customerItem: []
    };
  },
  mounted() {
    this.getAllCustomers();
  },
  computed: {
    ...mapGetters(["customer"])
  },
  watch: {
    customer(val) {
      this.customerItem = val;
    }
  },
  methods: {
    deleteCust(id) {
      this.deleteCustomer(id);
    },
    ...mapActions(["getAllCustomers", "deleteCustomer"])
  }
};
</script>

<style scoped>
</style>