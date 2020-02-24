<template>
  <div id="piSupplierPoList">
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
              <tr v-for="(item, index) in supplierPoList" :key="index++">
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
    <div id="piSupplierPoList">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col" class="text-center">PO Status</th>
                            <th scope="col" class="text-center">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in supplierPoList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.supplier }}</td>
                            <td class="text-center">{{ item.status }}</td>
                            <td class="text-center"><router-link to="spo/view/" class="nav-link">View PO</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <router-link :to="'/project-detail/' + this.$route.params.pid + '/spo/add'" class="btn btn-primary ml-3" style="float: right;" tag="button">Add New PO</router-link>

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
  name: "piSupplierPoList",
  data: function() {
    return {
      supplierPoList: [],
      create: true
    };
  },
  computed: {
    ...mapGetters([
      "currentSupplierPO",
      "currentSupplierQuotation",
      "success",
      "currentProject"
    ])
  },
  watch: {
    currentSupplierPO(val) {
      if (val) {
        this.create = false;
        const rfq = val.items.map(i => {
          let data = { ...i, amount: 0, currency: "MYR" };
          delete data["id"];
          return data;
        });
        this.supplierPoList = [...rfq];
      }
    },
    currentSupplierQuotation(val) {
      if (val) {
        this.create = true;
        this.supplierPoList = [...val.items];
      }
    }
    // success(val) {
    //   if (val) {
    //     this.$router.push({ name: "customerPOList" });
    //   }
    // }
  },
  mounted() {
    this.getBothSupplierPO(this.$route.params.pid);
  },
  methods: {
    cancel() {
      this.$router.push({ name: "customerQuotationList" });
    },
    onSubmit() {
      let formattedQuotation = [];
      this.supplierPoList.map(q => {
        let data = new QuotationItem(q);
        formattedQuotation.push(data);
      });
      const data = {
        projectId: Number(this.$route.params.pid),
        items: formattedQuotation
      };
      if (this.create) this.createSupplierPO(data);
    },
    printReport() {
      window.print();
    },
    buttonTitle() {
      return this.create ? "Create Quotation" : "Edit Quotation";
    },
    ...mapActions(["getBothSupplierPO", "createSupplierPO"]),
    ...mapMutations(["resetSucess", "resetCurrentSupplierPO"])
  },
  destroyed() {
    this.resetCurrentSupplierPO();
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>