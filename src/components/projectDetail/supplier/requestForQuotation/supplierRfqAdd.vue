<template>
  <div id="piSupplierRfqAdd">
    <form action>
      <div class="container-fluid" style="margin-bottom: 60px; margin-top: 30px;">
        <div class="card mb-3">
          <div class="card-body">
            <div class="d-flex flex-row">
              <div class="col-2">Select Supplier</div>
              <div class="col-8">
                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div class="col-2">
                <button
                  class="btn btn-danger ml-3"
                  style="float: right;"
                  type="submit"
                >Add New Supplier</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="createSRFQ()" action method>
                <input type="hidden" v-model="currentSupplierRfq.id" />
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Part Name</th>
                    <th scope="col">Part Number</th>
                    <th scope="col">Part Position</th>
                    <th scope="col">Model Number</th>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Drawing Number</th>
                    <th scope="col">Tag Number</th>
                    <th scope="col">Revision Number</th>
                    <th scope="col">Remarks Number</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in currentSupplierRfq.items" :key="index++">
                    <td>{{ item.partName }}
                    </td>
                    <td>{{ item.partNumber }}
                    </td>
                    <td>{{ item.partPosition }}
                    </td>
                    <td>{{ item.modelNumber }}
                    </td>
                    <td>{{ item.serialNumber }}
                    </td>
                    <td>{{ item.drawingNumber }}
                    </td>
                    <td>{{ item.tagNumber }}
                    </td>
                    <td>{{ item.revision }}
                    </td>
                    <td>{{ item.remarks }}
                    </td>
                    <td>{{ item.quantity }}
                    </td>
                  </tr>
                </tbody>
              </table>

              <router-link
                :to="'/project-detail/' + this.$route.params.pid + '/srfq'"
                class="btn btn-danger ml-3"
                style="float: right;"
                tag="button"
              >Cancel</router-link>
              <button
                type="button"
                class="btn btn-success"
                @click="createSRFQ()"
              >
                Generate
              </button>
            </form>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "piSupplierRfqAdd",
  data: function() {
    return {
      suppRfqAdd: null
    };
  },
  watch: {
    success(val) {
        this.$router.push({name:"LSRFQ"});
    }
  },
  mounted() {
    this.generateSupplierRFQ(this.$route.params.pid);
  },
  computed: {
    ...mapGetters(["currentSupplierRfq", "success"])
  },
  methods: {
    ...mapActions(["generateSupplierRFQ", "createSupplierRFQ"]),
    createSRFQ() {
        this.currentSupplierRfq.id = 0;
        this.currentSupplierRfq.items.forEach(element => {
            element.id = 0;
            element.rfqId = 0;
        });
        console.log(this.currentSupplierRfq)
        this.createSupplierRFQ(this.currentSupplierRfq)
    }
  }
};
</script>

<style scoped>
</style>