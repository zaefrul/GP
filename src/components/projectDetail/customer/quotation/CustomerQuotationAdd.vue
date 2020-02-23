<template>
  <div id="piCustomerQuotationAdd">
    <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col">Description</th>
                <th scope="col">Part No</th>
                <th scope="col">Model No</th>
                <th scope="col">Serial No</th>
                <th scope="col">Drawing No</th>
                <th scope="col">Item No</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in suppQuotationAdd" :key="index++">
                <td>{{ index }}</td>
                <td>{{ item.partName }}</td>
                <td>{{ item.partNumber }}</td>
                <td>{{ item.partPosition }}</td>
                <td>{{ item.drawingNumber }}</td>
                <td>{{ item.tagNumber }}</td>
                <td>{{ item.modelNumber }}</td>
                <td>{{ item.remarks }}</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Price"
                    v-model="item.amount"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="button"
            class="btn btn-danger ml-3"
            style="float: right;"
            @click="cancel"
          >Cancel</button>
          <button
            class="btn btn-primary ml-3"
            style="float: right;"
            @click="onSubmit"
            type="button"
          >{{ buttonTitle()}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { QuotationItem } from "../../../../classess/projects";
export default {
  name: "piCustomerQuotationAdd",
  data: function() {
    return {
      create: true,
      suppQuotationAdd: []
    };
  },
  computed: {
    ...mapGetters([
      "currentCustomerRfq",
      "currentCustomerQuotation",
      "success",
      "currentProject"
    ])
  },
  watch: {
    currentCustomerRfq(val) {
      if (val) {
        this.create = true;
        const rfq = val.items.map(i => {
          let data = { ...i, amount: 0, currency: "MYR" };
          delete data["id"];
          return data;
        });
        this.suppQuotationAdd = [...rfq];
      }
    },
    currentCustomerQuotation(val) {
      if (val) {
        this.create = false;
        this.suppQuotationAdd = [...val.items];
      }
    },
    success(val) {
      if (val) {
        this.$router.push({ name: "customerQuotationList" });
      }
    }
  },
  mounted() {
    this.getBothRfq(this.$route.params.pid);
  },
  methods: {
    cancel() {
      this.$router.push({ name: "customerQuotationList" });
    },
    onSubmit() {
      let formattedQuotation = [];
      this.suppQuotationAdd.map(q => {
        let data = new QuotationItem(q);
        formattedQuotation.push(data);
      });
      const data = {
        projectId: Number(this.$route.params.pid),
        items: formattedQuotation
      };
      if (this.create) this.createQuotation(data);
      else
        this.updateQuotation({
          data: { ...data, id: this.currentProject.quotations[0].id },
          id: this.currentProject.quotations[0].id
        });
    },
    buttonTitle() {
      return this.create ? "Create Quotation" : "Edit Quotation";
    },
    ...mapActions(["getBothRfq", "createQuotation", "updateQuotation"]),
    ...mapMutations(["resetSucess", "resetCurrentQuotationRfq"])
  },
  destroyed() {
    this.resetCurrentQuotationRfq();
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>