<template>
<div id="projectLanding">
      <div class="bg-grey csMenuHeader" >
        <div class="container">
          <h1 class="font-weight-normal">NCC10024115-19</h1>
          <h5>Bersatu Teguh Construction Sdn. Bhd.</h5>
        </div>
      </div>
    <div class="container csMenuMargin">
        <div class="row">
          <div class="col-lg-12">
            <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piMain'">Project Information</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piCustomerRfqList'">Cust RFQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piSupplierRfqList'">Supp RFQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piCustomerQuotationList'">Cust Quotation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piSupplierQuotationList'">Supp Quotation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piCustomerPoList'">Cust Purchase Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piSupplierPoList'">Supp Purchase Order</a>
            </li>
          </ul>

          <component :is="selectedComponent"></component>

          </div>
        </div>
      </div>
</div>
</template>

<script>

/**project detail */
import ProjectInformation from './projectInformation.vue'
import CustomerRfqView from './customerRfqView.vue'
import SupplierRfqView from './supplierRfqView.vue'
import SupplierQuotationView from './supplierQuotationView.vue'
import CustomerQuotationView from './CustomerQuotationView.vue'
import SupplierPoViewView from './supplierPoView.vue'
import CustomerPoView from './CustomerPoView.vue'

export default {
    name : 'projectLanding',
  data(){
    return {
      // dummyAPI: [],
      selectedComponent: 'piMain'
    }
  },
  //  mounted() {
  //    fetch("https://jsonplaceholder.typicode.com/todos/1")
  //    .then(response => response.json())
  //    .then(json => this.dummyAPI)
  //    .then(console.log(dummyAPI))
  //  },
  methods: {
    customerDetail: [
      { id: '10', pid: 'NCC100000000', title: 'Bersatu Teguh Construction Sdn. Bhd.', rdate: '12/12/2019', status: 'Pending' },
      { id: '11', pid: 'NCC100000111', title: 'Kayu Kayan Sdn. Bhd.', rdate: '12/12/2019', status: 'Pending' },
      { id: '12', pid: 'NCC100333300', title: 'Wak Joko Sdn. Bhd.', rdate: '11/01/2020', status: 'Pending' },
    ]
  },
  components: {
    piMain: ProjectInformation,
    piSupplierRfqList: SupplierRfqView,
    piCustomerRfqList: CustomerRfqView,
    piSupplierQuotationList: SupplierQuotationView,
    piCustomerQuotationList: CustomerQuotationView,
    piSupplierPoList: SupplierPoViewView,
    piCustomerPoList: CustomerPoView
  }

}
</script>

<style scoped>
h1 {
  color: red;
}
.csMenuHeader {
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.356);
  padding-top: 30px;
}
.csMenuMargin {
  margin-top: -40px;
  margin-bottom: 50px;
}
.bg-grey {
      background-color: #e9ecef;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {  
    border-color: transparent;
    background: #343a40;
    color: white;
}
a {
  color: #343a40;
  font-weight: bold;
}
ul {
  margin-bottom: 30px;
}

</style>