// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './service/store'

Vue.use(require('vue-moment'))

//Login Page
import LoginLanding from './components/login/loginLanding.vue' //login 

//landing page
import DashboardLanding from './components/dashboard/dashboardLanding.vue' //dashboard

//Project List
import ProjectAllLanding from './components/project/projectAllLanding.vue' //project
import ProjectListing from './components/project/projectList.vue' //project
import ProjectAdd from './components/project/projectAdd.vue' //project add

//supplier
import SupplierLanding from './components/supplier/supplierLanding.vue' //supplier
import SupplierList from './components/supplier/supplierList.vue' //supplier
import SupplierAdd from './components/supplier/supplierAdd.vue' //supplier
import SupplierView from './components/supplier/supplierView.vue' //supplier
import SupplierEdit from './components/supplier/supplierEdit.vue' //supplier

//customer
import CustomerLanding from './components/customer/customerLanding.vue' //customer landing
import CustomerList from './components/customer/customerList.vue' //customer list
import CustomerAdd from './components/customer/customerAdd.vue' //customer add
import CustomerView from './components/customer/customerView.vue' //customer view
import CustomerEdit from './components/customer/customerEdit.vue' //customer edit

//invoice
import InvoiceLanding from './components/invoice/invoiceLanding.vue' //invoice
import InvoiceList from './components/invoice/invoiceList.vue' //invoice
import InvoiceDetail from './components/invoice/invoiceDetail.vue' //invoice detail

//project detail
import ProjectDetailLanding from './components/projectDetail/projectLanding.vue' //project detail
import ProjectInformation from './components/projectDetail/projectInformation.vue' //project detail

//customer po
import PiCustomerPoView from './components/projectDetail/customer/purchaseOrder/CustomerPoView.vue' //customer po view
import PiCustomerPoAdd from './components/projectDetail/customer/purchaseOrder/CustomerPoAdd.vue' //customer po add
import PiCustomerPoList from './components/projectDetail/customer/purchaseOrder/CustomerPoList.vue' //customer po list
import PiCustomerPoEdit from './components/projectDetail/customer/purchaseOrder/CustomerPoEdit.vue' //customer po edit

//customer quotation
import PiCustomerQuotationView from './components/projectDetail/customer/quotation/customerQuotationView.vue' //customer quotation view
import PiCustomerQuotationAdd from './components/projectDetail/customer/quotation/customerQuotationAdd.vue' //customer quotation view
import PiCustomerQuotationList from './components/projectDetail/customer/quotation/customerQuotationList.vue' //customer quotation view
import PiCustomerQuotationEdit from './components/projectDetail/customer/quotation/customerQuotationEdit.vue' //customer quotation view

//customer rfq
import PiCustomerRfqView from './components/projectDetail/customer/requestForQuotation/customerRfqView.vue' //customer rfq view
import PiCustomerRfqList from './components/projectDetail/customer/requestForQuotation/customerRfqList.vue' //customer rfq view
import PiCustomerRfqEdit from './components/projectDetail/customer/requestForQuotation/customerRfqEdit.vue' //customer rfq view

//supplier po
import PiSupplierPoView from './components/projectDetail/supplier/purchaseOrder/supplierPoView.vue' //supplier po view
import PiSupplierPoAdd from './components/projectDetail/supplier/purchaseOrder/supplierPoAdd.vue' //supplier po view
import PiSupplierPoList from './components/projectDetail/supplier/purchaseOrder/supplierPoList.vue' //supplier po view
import PiSupplierPoEdit from './components/projectDetail/supplier/purchaseOrder/supplierPoEdit.vue' //supplier po view

//supplier quotation
import PiSupplierQuotationView from './components/projectDetail/supplier/quotation/supplierQuotationView.vue' //supplier quotation view
import PiSupplierQuotationAdd from './components/projectDetail/supplier/quotation/supplierQuotationAdd.vue' //supplier quotation view
import PiSupplierQuotationList from './components/projectDetail/supplier/quotation/supplierQuotationList.vue' //supplier quotation view
import PiSupplierQuotationEdit from './components/projectDetail/supplier/quotation/supplierQuotationEdit.vue' //supplier quotation view

//supplier rfq
import PiSupplierRfqView from './components/projectDetail/supplier/requestForQuotation/supplierRfqView.vue' //supplier rfq view
import PiSupplierRfqAdd from './components/projectDetail/supplier/requestForQuotation/supplierRfqAdd.vue' //supplier rfq view
import PiSupplierRfqList from './components/projectDetail/supplier/requestForQuotation/supplierRfqList.vue' //supplier rfq view
import PiSupplierRfqEdit from './components/projectDetail/supplier/requestForQuotation/supplierRfqEdit.vue' //supplier rfq view

//setting page
//main
import SettingLanding from './components/setting/settingLanding.vue' //setting main
import SettingMain from './components/setting/settingMain.vue' //setting main

//metadata
import MetadataList from './components/setting/metadata/metadata.vue' //metadata

//user
import UserList from './components/setting/user/userList.vue' //metadata

Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  //homepage
  { path: '/', component: DashboardLanding },
  //Project Listing
  { path: '/project', component: ProjectAllLanding,
      children: [
        { path: '', component: ProjectListing },
        { path: 'add', component: ProjectAdd }
      ]  
  },
  //Project Detail
  { path: '/project-detail/:pid', component: ProjectDetailLanding,
      children: [
        { path: '', component: ProjectInformation },
        //customer po
        { path: 'cpo', component: PiCustomerPoList },
        { path: 'cpo/view', component: PiCustomerPoView },
        { path: 'cpo/add', component: PiCustomerPoAdd },
        { path: 'cpo/edit', component: PiCustomerPoEdit },
        //customer quotation
        { path: 'cq', component: PiCustomerQuotationList },
        { path: 'cq/view', component: PiCustomerQuotationView },
        { path: 'cq/add', component: PiCustomerQuotationAdd },
        { path: 'cq/edit', component: PiCustomerQuotationEdit },
        //customer rfq
        { path: 'crfq', component: PiCustomerRfqList },
        { path: 'crfq/view', component: PiCustomerRfqView },
        { path: 'crfq/edit', component: PiCustomerRfqEdit },
        //supplier po
        { path: 'spo', component: PiSupplierPoList },
        { path: 'spo/view', component: PiSupplierPoView },
        { path: 'spo/add', component: PiSupplierPoAdd },
        { path: 'spo/edit', component: PiSupplierPoEdit },
        //supplier quotation
        { path: 'sq', component: PiSupplierQuotationList },
        { path: 'sq/view', component: PiSupplierQuotationView },
        { path: 'sq/add', component: PiSupplierQuotationAdd },
        { path: 'sq/edit', component: PiSupplierQuotationEdit },
        //supplier rfq
        { path: 'srfq', component: PiSupplierRfqList },
        { path: 'srfq/view', component: PiSupplierRfqView },
        { path: 'srfq/add', component: PiSupplierRfqAdd },
        { path: 'srfq/edit', component: PiSupplierRfqEdit }
      ]
  },
  //Invoice
  { path: '/invoice', component: InvoiceLanding,
      children: [
        { path: '', component: InvoiceList },
        { path: 'view/:iid', component: InvoiceDetail }
      ]
  },
  //Supplier
  { path: '/supplier', component: SupplierLanding,
      children: [
        { path: '', component: SupplierList },
        { path: 'list', component: SupplierList },
        { path: 'view/:sid', component: SupplierView },
        { path: 'edit/:sid', component: SupplierEdit },
        { path: 'add', component: SupplierAdd }
      ]
    },
  //Customer  
  { path: '/customer', component: CustomerLanding,
    children: [
      { path: '', component: CustomerList },
      { path: 'list', component: CustomerList },
      { path: 'view/:cid', component: CustomerView },
      { path: 'edit/:cid', component: CustomerEdit },
      { path: 'add', component: CustomerAdd }
    ]
  },
  //Setting
  { path: '/setting', component: SettingLanding,
      children: [
        { path: 'metadata', component: MetadataList },
        { path: 'user', component: UserList }
      ] 
  },
  //login
  { path: '/login', component: LoginLanding }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  Axios,
  VueAxios,
  render: (h) => h(App)
})
