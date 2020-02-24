// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//Login Page
import LoginLanding from "./components/login/loginLanding.vue"; //login

//landing page
import DashboardLanding from "./components/dashboard/dashboardLanding.vue"; //dashboard

//Project List
import ProjectAllLanding from "./components/project/projectAllLanding.vue"; //project
import ProjectListing from "./components/project/projectList.vue"; //project
import ProjectAdd from "./components/project/projectAdd.vue"; //project add

//supplier
import SupplierLanding from "./components/supplier/supplierLanding.vue"; //supplier
import SupplierList from "./components/supplier/supplierList.vue"; //supplier
import SupplierAdd from "./components/supplier/supplierAdd.vue"; //supplier
import SupplierView from "./components/supplier/supplierView.vue"; //supplier
import SupplierEdit from "./components/supplier/supplierEdit.vue"; //supplier

//customer
import CustomerLanding from "./components/customer/customerLanding.vue"; //customer landing
import CustomerList from "./components/customer/customerList.vue"; //customer list
import CustomerAdd from "./components/customer/customerAdd.vue"; //customer add
import CustomerView from "./components/customer/customerView.vue"; //customer view
import CustomerEdit from "./components/customer/customerEdit.vue"; //customer edit

//invoice
import InvoiceLanding from "./components/invoice/invoiceLanding.vue"; //invoice
import InvoiceList from "./components/invoice/invoiceList.vue"; //invoice
import InvoiceDetail from "./components/invoice/invoiceDetail.vue"; //invoice detail

//project detail
import ProjectDetailLanding from "./components/projectDetail/projectLanding.vue"; //project detail
import ProjectInformation from "./components/projectDetail/projectInformation.vue"; //project detail

//customer po
import PiCustomerPoView from "./components/projectDetail/customer/purchaseOrder/CustomerPoView.vue"; //customer po view
import PiCustomerPoAdd from "./components/projectDetail/customer/purchaseOrder/CustomerPoAdd.vue"; //customer po add
import PiCustomerPoList from "./components/projectDetail/customer/purchaseOrder/CustomerPoList.vue"; //customer po list
import PiCustomerPoEdit from "./components/projectDetail/customer/purchaseOrder/CustomerPoEdit.vue"; //customer po edit
import PiCustomerPoReport from "./components/projectDetail/customer/purchaseOrder/CustomerPoReport.vue"; //customer po report

//customer do
import PiCustomerDoView from "./components/projectDetail/customer/deliveryOrder/CustomerDoView.vue"; //customer do view
import PiCustomerDoAdd from "./components/projectDetail/customer/deliveryOrder/CustomerDoAdd.vue"; //customer do add
import PiCustomerDoList from "./components/projectDetail/customer/deliveryOrder/CustomerDoList.vue"; //customer do list
import PiCustomerDoEdit from "./components/projectDetail/customer/deliveryOrder/CustomerDoEdit.vue"; //customer do edit
import PiCustomerDoReport from "./components/projectDetail/customer/deliveryOrder/CustomerDoReport.vue"; //customer do report

//customer quotation
import PiCustomerQuotationView from "./components/projectDetail/customer/quotation/CustomerQuotationView.vue"; //customer quotation view
import PiCustomerQuotationAdd from "./components/projectDetail/customer/quotation/CustomerQuotationAdd.vue"; //customer quotation add
import PiCustomerQuotationList from "./components/projectDetail/customer/quotation/CustomerQuotationList.vue"; //customer quotation list
import PiCustomerQuotationEdit from "./components/projectDetail/customer/quotation/CustomerQuotationEdit.vue"; //customer quotation edit
import PiCustomerQuotationReport from "./components/projectDetail/customer/quotation/CustomerQuotationReport.vue"; //customer quotation report

//customer rfq
import PiCustomerRfqView from "./components/projectDetail/customer/requestForQuotation/customerRfqView.vue"; //customer rfq view
import PiCustomerRfqList from "./components/projectDetail/customer/requestForQuotation/customerRfqList.vue"; //customer rfq list
import PiCustomerRfqEdit from "./components/projectDetail/customer/requestForQuotation/customerRfqEdit.vue"; //customer rfq edit
import PiCustomerRfqReport from "./components/projectDetail/customer/requestForQuotation/customerRfqReport.vue"; //customer rfq report

//supplier po
import PiSupplierPoView from "./components/projectDetail/supplier/purchaseOrder/supplierPoView.vue"; //supplier po view
import PiSupplierPoAdd from "./components/projectDetail/supplier/purchaseOrder/supplierPoAdd.vue"; //supplier po add
import PiSupplierPoList from "./components/projectDetail/supplier/purchaseOrder/supplierPoList.vue"; //supplier po list
import PiSupplierPoEdit from "./components/projectDetail/supplier/purchaseOrder/supplierPoEdit.vue"; //supplier po edit
import PiSupplierPoReport from "./components/projectDetail/supplier/purchaseOrder/supplierPoReport.vue"; //supplier po report

//supplier do
import PiSupplierDoView from "./components/projectDetail/supplier/deliveryOrder/supplierDoView.vue"; //supplier do view
import PiSupplierDoAdd from "./components/projectDetail/supplier/deliveryOrder/supplierDoAdd.vue"; //supplier do add
import PiSupplierDoList from "./components/projectDetail/supplier/deliveryOrder/supplierDoList.vue"; //supplier do list
import PiSupplierDoEdit from "./components/projectDetail/supplier/deliveryOrder/supplierDoEdit.vue"; //supplier do edit
import PiSupplierDoReport from "./components/projectDetail/supplier/deliveryOrder/supplierDoReport.vue"; //supplier do report

//supplier quotation
import PiSupplierQuotationView from "./components/projectDetail/supplier/quotation/supplierQuotationView.vue"; //supplier quotation view
import PiSupplierQuotationAdd from "./components/projectDetail/supplier/quotation/supplierQuotationAdd.vue"; //supplier quotation add
import PiSupplierQuotationList from "./components/projectDetail/supplier/quotation/supplierQuotationList.vue"; //supplier quotation list
import PiSupplierQuotationEdit from "./components/projectDetail/supplier/quotation/supplierQuotationEdit.vue"; //supplier quotation edit
import PiSupplierQuotationReport from "./components/projectDetail/supplier/quotation/supplierQuotationReport.vue"; //supplier quotation report

//supplier rfq
import PiSupplierRfqView from "./components/projectDetail/supplier/requestForQuotation/supplierRfqView.vue"; //supplier rfq view
import PiSupplierRfqAdd from "./components/projectDetail/supplier/requestForQuotation/supplierRfqAdd.vue"; //supplier rfq add
import PiSupplierRfqList from "./components/projectDetail/supplier/requestForQuotation/supplierRfqList.vue"; //supplier rfq list
import PiSupplierRfqEdit from "./components/projectDetail/supplier/requestForQuotation/supplierRfqEdit.vue"; //supplier rfq edit
import PiSupplierRfqReport from "./components/projectDetail/supplier/requestForQuotation/supplierRfqReport.vue"; //supplier rfq report

//setting page
//main
import SettingLanding from "./components/setting/settingLanding.vue"; //setting main
import SettingMain from "./components/setting/settingMain.vue"; //setting main

//metadata
import MetadataLanding from "./components/setting/metadata/metadataLanding.vue"; //metadata landing
import MetadataList from "./components/setting/metadata/metadata.vue"; //metadata list
import MetadataAdd from "./components/setting/metadata/metadataAdd.vue"; //metadata Add
import MetadataEdit from "./components/setting/metadata/metadataEdit.vue"; //metadata Edit

//user
import UserLanding from "./components/setting/user/userLanding.vue"; //user landing
import UserList from "./components/setting/user/userList.vue"; //user list
import UserAdd from "./components/setting/user/userAdd.vue"; //user add
import UserEdit from "./components/setting/user/userEdit.vue"; //user Edit

import Vuelidate from "vuelidate";
import { getLogin } from "./service/auth-service";

Vue.use(VueRouter);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vuelidate);

import { store } from "./service/store";

const routes = [
  //homepage
  {
    path: "/",
    component: DashboardLanding,
    name: "home",
    meta: {
      loginRequired: true
    }
  },
  //Project Listing
  {
    path: "/project",
    component: ProjectAllLanding,
    meta: {
      loginRequired: true
    },
    children: [
      { path: "", component: ProjectListing, name: "projectList" },
      { path: "add", component: ProjectAdd, name: "projectAdd" }
    ]
  },
  //Project Detail
  {
    path: "/project-detail/:pid",
    component: ProjectDetailLanding,
    meta: {
      loginRequired: true
    },
    children: [
      { path: "", component: ProjectInformation },
      //customer po
      { path: "cpo", component: PiCustomerPoList, name: "customerPOList" },
      { path: "cpo/view", component: PiCustomerPoView },
      { path: "cpo/add", component: PiCustomerPoAdd },
      { path: "cpo/edit", component: PiCustomerPoEdit },
      { path: "cpo/report/:cpoid", component: PiCustomerPoReport },
      //customer do
      { path: "cdo", component: PiCustomerDoList },
      { path: "cdo/view", component: PiCustomerDoView },
      { path: "cdo/add", component: PiCustomerDoAdd },
      { path: "cdo/edit", component: PiCustomerDoEdit },
      { path: "cdo/report/:cdoid", component: PiCustomerDoReport },
      //customer quotation
      {
        path: "cq",
        component: PiCustomerQuotationList,
        name: "customerQuotationList"
      },
      { path: "cq/view/:cqid", component: PiCustomerQuotationView },
      {
        path: "cq/add",
        component: PiCustomerQuotationAdd,
        name: "customerQuotation"
      },
      { path: "cq/edit", component: PiCustomerQuotationEdit },
      { path: "cq/report/:cqid", component: PiCustomerQuotationReport },
      //customer rfq
      { path: "crfq", component: PiCustomerRfqList },
      { path: "crfq/view", component: PiCustomerRfqView },
      { path: "crfq/edit", component: PiCustomerRfqEdit },
      { path: "crfq/report/:crfqid", component: PiCustomerRfqReport },
      //supplier po
      { path: "spo", component: PiSupplierPoList },
      { path: "spo/view", component: PiSupplierPoView },
      { path: "spo/add", component: PiSupplierPoAdd },
      { path: "spo/edit", component: PiSupplierPoEdit },
      { path: "spo/report/:spoid", component: PiSupplierPoReport },
      //supplier do
      { path: "sdo", component: PiSupplierDoList },
      { path: "sdo/view/:sdoid", component: PiSupplierDoView },
      { path: "sdo/add", component: PiSupplierDoAdd },
      { path: "sdo/edit", component: PiSupplierDoEdit },
      { path: "sdo/report/:sdoid", component: PiSupplierDoReport },
      //supplier quotation
      {
        path: "sq",
        component: PiSupplierQuotationList,
        name: "supplierQuotationList"
      },
      { path: "sq/view/:sqid", component: PiSupplierQuotationView },
      {
        path: "sq/add",
        component: PiSupplierQuotationAdd,
        name: "supplierQuotation"
      },
      { path: "sq/edit", component: PiSupplierQuotationEdit },
      { path: "sq/report/:sqid", component: PiSupplierQuotationReport },
      //supplier rfq
      { path: "srfq", component: PiSupplierRfqList, name: "LSRFQ" },
      { path: "srfq/view", component: PiSupplierRfqView },
      { path: "srfq/add", component: PiSupplierRfqAdd, name:"ASRFQ" },
      { path: "srfq/edit", component: PiSupplierRfqEdit },
      { path: "srfq/report/:srfqid", component: PiSupplierRfqReport }
    ]
  },
  //Invoice
  {
    path: "/invoice",
    component: InvoiceLanding,
    meta: {
      loginRequired: true
    },
    children: [
      { path: "", component: InvoiceList },
      { path: "view/:iid", component: InvoiceDetail }
    ]
  },
  //Supplier
  {
    path: "/supplier",
    component: SupplierLanding,

    meta: {
      loginRequired: true
    },
    children: [
      { path: "", component: SupplierList, name: "supplier" },
      { path: "list", component: SupplierList },
      { path: "view/:sid", component: SupplierView },
      { path: "edit/:sid", component: SupplierEdit },
      { path: "add", component: SupplierAdd }
    ]
  },
  //Customer
  {
    path: "/customer",
    component: CustomerLanding,

    meta: {
      loginRequired: true
    },
    children: [
      { path: "", component: CustomerList, name: "customer" },
      { path: "list", component: CustomerList },
      { path: "view/:cid", component: CustomerView },
      { path: "edit/:cid", component: CustomerEdit },
      { path: "add", component: CustomerAdd }
    ]
  },
  //Setting
  {
    path: "/setting",
    component: SettingLanding,
    meta: {
      loginRequired: true
    },
    children: [
      {
        path: "metadata",
        component: MetadataLanding,
        children: [
          { path: "", component: MetadataList, name: "metadataList" },
          { path: "add", component: MetadataAdd },
          { path: "edit/:mid", component: MetadataEdit, name: "metadataEdit" }
        ]
      },
      {
        path: "user",
        component: UserLanding,
        children: [
          { path: "", component: UserList, name: "userList" },
          { path: "add", component: UserAdd },
          { path: "edit/:uid", component: UserEdit }
        ]
      }
    ]
  },
  //login
  { path: "/login", component: LoginLanding, name: "login" }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

// Routing check
router.beforeEach((to, from, next) => {
  const loginRequired = to.matched.some(record => record.meta.loginRequired);
  const token = getLogin();
  if (token === null && loginRequired) {
    return next({ name: "login" });
  }
  next();
});

new Vue({
  // eslint-disable-line no-new
  el: "#app",
  router,
  store,
  render: h => h(App)
});
