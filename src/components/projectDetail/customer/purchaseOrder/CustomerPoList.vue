<template>
  <div id="piCustomerPoList">
    <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Part Name</th>
                <th scope="col">Part Number</th>
                <th scope="col">Serial Number</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in customerPoList" :key="index++">
                <td scope="row">{{ index }}</td>
                <td>{{ item.partName }}</td>
                <td>{{ item.partNumber }}</td>
                <td>{{ item.serialNumber }}</td>
                <td>{{item.remarks }}</td>
                <!-- <td><router-link :to="'po/view/' + item.poid" class="nav-link">View</router-link></td> -->
                <!-- <td>
                  <router-link to="cpo/view/" class="nav-link">View</router-link>
                </td>-->
              </tr>
            </tbody>
          </table>
          <button
            @click="onSubmit"
            class="btn btn-primary"
            style="float: right;"
            type="button"
            v-if="create"
          >Add New PO</button>
          <button
            @click="printReport"
            class="btn btn-success"
            style="float: right;"
            type="button"
            v-if="!create"
          >Print Report</button>
    <div id="piCustomerPoList">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">PO Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in customerPoList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.remarks }}</td>
                            <td>{{ item.status }}</td>
                            <td class="text-center"><router-link to="cpo/view/" class="nav-link">View PO</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link to="cpo/add/" class="btn btn-primary" style="float: right;" tag="button">Add New PO</router-link>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { QuotationItem } from "../../../../classess/projects";
export default {
  name: "piCustomerPoList",
  data: function() {
    return {
      customerPoList: [],
      create: true
    };
  },
  computed: {
    ...mapGetters([
      "currentCustomerPO",
      "currentCustomerQuotation",
      "success",
      "currentProject"
    ])
  },
  watch: {
    currentCustomerPO(val) {
      if (val) {
        this.create = false;
        const rfq = val.items.map(i => {
          let data = { ...i, amount: 0, currency: "MYR" };
          delete data["id"];
          return data;
        });
        this.customerPoList = [...rfq];
      }
    },
    currentCustomerQuotation(val) {
      if (val) {
        this.create = true;
        this.customerPoList = [...val.items];
      }
    }
    // success(val) {
    //   if (val) {
    //     this.$router.push({ name: "customerPOList" });
    //   }
    // }
  },
  mounted() {
    this.getBothCustomerPO(this.$route.params.pid);
  },
  methods: {
    cancel() {
      this.$router.push({ name: "customerQuotationList" });
    },
    onSubmit() {
      let formattedQuotation = [];
      this.customerPoList.map(q => {
        let data = new QuotationItem(q);
        formattedQuotation.push(data);
      });
      const data = {
        projectId: Number(this.$route.params.pid),
        items: formattedQuotation
      };
      if (this.create) this.createCustomerPO(data);
    },
    printReport() {
      window.print();
    },
    buttonTitle() {
      return this.create ? "Create Quotation" : "Edit Quotation";
    },
    ...mapActions(["getBothCustomerPO", "createCustomerPO"]),
    ...mapMutations(["resetSucess", "resetCurrentCustomerPO"])
  },
  destroyed() {
    this.resetCurrentCustomerPO();
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>