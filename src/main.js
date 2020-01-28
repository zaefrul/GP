// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

//import all component
import DashboardLanding from './components/dashboard/dashboardLanding.vue' //dashboard
import Metadata from './components/metadata/metadata.vue' //metadata
import Project from './components/project/projectList.vue' //project
import Invoice from './components/invoice/invoiceList.vue' //invoice
import Supplier from './components/supplier/supplierList.vue' //supplier

//invoice
import InvoiceDetail from './components/invoice/invoiceDetail.vue'

//project detail
import ProjectDetail from './components/projectDetail/projectLanding.vue' //project detail
import ProjectAdd from './components/project/projectAdd.vue'


Vue.use(VueRouter);

const routes = [
  { path: '/', component: DashboardLanding },
  { path: '/project', component: Project },
  { path: '/projectAdd', component: ProjectAdd },
  { path: '/project-detail/:pid', component: ProjectDetail },
  { path: '/invoice', component: Invoice },
  { path: '/invoice-detail/:iid', component: InvoiceDetail },
  { path: '/metadata', component: Metadata },
  { path: '/supplier', component: Supplier },
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App)
})
