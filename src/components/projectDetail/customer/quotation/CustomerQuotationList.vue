<template>
  <div id="piCustomerQuotationList">
    <div class="container-fluid" style="margin-bottom: 60px;">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Date</th>
                <th scope="col">Reference</th>
                <th scope="col">Quotation Status</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="!generateQuotation">
                <tr v-for="(item, index) in currentCustomerQuotation" :key="index++">
                  <td scope="row">{{ index }}</td>
                  <td>{{ item.dateCreated }}</td>
                  <td>{{ item.number }}</td>
                  <td>{{ item.active }}</td>
                  <td class="text-center"><router-link :to="'cq/view/' + item.id" class="nav-link">View Quotation</router-link></td>
                </tr>
              </template>
              <template v-if="generateQuotation">
                <tr>
                  <td colspan="4">
                    <p class="text-center">No data available</p>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <button
            v-if="generateQuotation"
            class="btn btn-primary"
            style="float: right;"
            @click="goToAddQuotation"
          >Generate Quotation</button>
          <button
            v-if="!generateQuotation"
            class="btn btn-primary"
            style="float: right;"
            @click="goToAddQuotation"
          >Edit Quotation</button>
    <!-- <div id="piCustomerQuotationList">
        <div class="container" style="margin-bottom: 60px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Quotation Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in customerQuotationList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.remarks }}</td>
                            <td>{{ item.status }}</td>
                            <td class="text-center"><router-link to="cq/view/" class="nav-link">View Quotation</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-primary" style="float: right;" @click="selectedComponent = 'piSupplierPoList'">Add New Quotation</button>
                </div>
            </div>
        </div>
      </div> -->
    </div>
  </div>
    </div></div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "piCustomerQuotationList",
  data: function() {
    return {
      customerQuotationList: [],
      generateQuotation: true
    };
  },
  computed: {
    ...mapGetters(["currentProject","currentCustomerQuotation"])
  },
  watch: {
    currentProject(val) {
      console.log(val);
    }
  },
  mounted() {
    // this.getRfq();
    // if (this.currentProject.quotations.length > 0) {
    //   this.generateQuotation = false;
    //   this.customerQuotationList = [...this.currentProject.quotations];
    // } else {
    //   this.generateQuotation = true;

    //   this.customerQuotationList = [...this.currentProject.rfQs];
    // }
    this.getProjectCustomerQuotation(this.$route.params.pid)
    if(this.currentCustomerQuotation.length > 0)
    {
      this.generateQuotation = false;
    }
  },
  methods: {
    goToAddQuotation() {
      this.$router.push({ name: "customerQuotation" });
    },
    ...mapActions(["getProjectCustomerQuotation"])
  }
};
</script>

<style scoped>
</style>