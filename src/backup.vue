<template>
  <div id="app">
    <!--app start here-->
      <button @click="selectedPage = 'pageDashboard'">Dashboard</button>
      <button @click="selectedPage = 'pageMetadata'">Metadata</button>
      <button @click="selectedPage = 'pageProjectDetail'">Project Detail</button>
      <button @click="selectedPage = 'pageCustomerRfqEdit'">Customer RFQ Edit</button>
      <button @click="selectedPage = 'pageSupplierRfqAdd'">Supplier RFQ Add</button>
      <button @click="selectedPage = 'pageCustomerQuotationAdd'">Customer Quotation Add</button>
      <button @click="selectedPage = 'pageSupplierQuotationAdd'">Supplier Quotation Add</button>
      <button @click="selectedPage = 'pageCustomerPoAdd'">Customer PO Add</button>
      <button @click="selectedPage = 'pageSupplierPoAdd'">Supplier PO Add</button>
      <button @click="selectedPage = 'pageAddNewProject'">Add Project</button>


          <div>choosen link: {{ selectedLink }}</div>
      <!--page component-->
      <component :is="selectedPage"></component>
  
  <!--app end here-->
  </div>
</template>

<script>


import Ribbon from './components/shared/ribbon.vue' //ribbon
import SiteFooter from './components/shared/footer.vue' //footer
import DashboardLanding from './components/dashboard/dashboardLanding.vue' //dashboard
import Metadata from './components/metadata/metadata.vue' //metadata
import ProjectLanding from './components/projectDetail/projectLanding.vue' //project detail

/**temp */

import piCustomerRfqEdit from './components/projectDetail/customerRfqEdit.vue' //customer rfq edit
import piSupplierRfqAdd from './components/projectDetail/supplierRfqAdd.vue' //supplier rfq add
import piCustomerQuotationAdd from './components/projectDetail/CustomerQuotationAdd.vue' //supplier rfq add
import piSupplierQuotationAdd from './components/projectDetail/supplierQuotationAdd.vue' //supplier rfq add
import piCustomerPoAdd from './components/projectDetail/CustomerPoAdd.vue' //supplier rfq add
import piSupplierPoAdd from './components/projectDetail/supplierPoAdd.vue' //supplier rfq add
import AddNewProject from './components/dashboard/addNewProject.vue'


export default {
  name: 'app',
  data: function(){
    return {
      selectedComponent: 'piMain',
      selectedPage: 'pageDashboard'
    }
  },
  components: {
    Ribbon, //ribbon
    SiteFooter, //footer
    pageDashboard: DashboardLanding, //dashboard
    pageMetadata: Metadata, //metadata
    pageProjectDetail: ProjectLanding, //project detail

    /**temp */
    pageCustomerRfqEdit: piCustomerRfqEdit,
    pageSupplierRfqAdd: piSupplierRfqAdd,
    pageCustomerQuotationAdd: piCustomerQuotationAdd,
    pageSupplierQuotationAdd: piSupplierQuotationAdd,
    pageCustomerPoAdd: piCustomerPoAdd,
    pageSupplierPoAdd: piSupplierPoAdd,
    pageAddNewProject: AddNewProject
  }
}


</script>