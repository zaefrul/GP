<template>
  <div id="supplierAdd" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">REGISTER SUPPLIER</h1>
      <p class="lead">Register new supplier to the system</p>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
      <form action>
        <div class="card">
          <div class="card-body">
            <!--New Customer List-->
            <div class="newForm">
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputEmail4">Company Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Company"
                    v-model="customer.companyName"
                    @blur="$v.customer.companyName.$touch"
                    @change="$v.customer.companyName.$touch"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputPassword4">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Phone Number"
                    v-model="customer.phone"
                    @blur="$v.customer.phone.$touch"
                    @change="$v.customer.phone.$touch"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputEmail4">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Address"
                    v-model="customer.address"
                    @blur="$v.customer.address.$touch"
                    @change="$v.customer.address.$touch"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputEmail4">Email Address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Email"
                    v-model="customer.email"
                    @blur="$v.customer.email.$touch"
                    @change="$v.customer.email.$touch"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Address"
                    v-model="customer.address"
                    @blur="$v.customer.address.$touch"
                    @change="$v.customer.address.$touch"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputCity">Postcode</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Postcode"
                    v-model="customer.postcode"
                    @blur="$v.customer.postcode.$touch"
                    @change="$v.customer.postcode.$touch"
                  />
                </div>
                <div class="form-group col-md-5">
                  <label for="inputState">State</label>
                  <select
                    id="inputState"
                    class="form-control"
                    v-model="customer.state"
                    @blur="$v.customer.state.$touch"
                    @change="$v.customer.state.$touch"
                  >
                    <option selected>Choose...</option>
                    <option>Selangor</option>
                    <option>Kuala Lumpur</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputState">Country</label>
                  <select
                    id="inputState"
                    class="form-control"
                    v-model="customer.country"
                    @blur="$v.customer.country.$touch"
                    @change="$v.customer.country.$touch"
                  >
                    <option selected>Choose...</option>
                    <option>Malaysia</option>
                    <option>Indonesia</option>
                    <option>Brunei</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <input
                    type="text"
                    id="inputAddressSub"
                    class="form-control"
                    placeholder="License"
                    v-model="customer.license"
                    @blur="$v.customer.license.$touch"
                    @change="$v.customer.license.$touch"
                  />
                </div>
              </div>
            </div>

            <router-link
              to="/supplier/list"
              tag="button"
              class="btn btn-danger ml-3"
              style="float: right;"
            >Cancel</router-link>
            <Button
              @click="onCreateSupplier"
              type="button"
              class="btn btn-primary ml-3"
              style="float: right;"
            >Register New Supplier</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "supplierAdd",
  data() {
    return {
      customer: {
        companyName: "",
        address: "",
        postcode: "",
        state: "",
        country: "",
        phone: "",
        email: "",
        license: "",
        type: 1
      }
    };
  },
  validations: {
    customer: {
      companyName: {
        required
      },
      address: {
        required
      },
      postcode: {
        required
      },
      state: {
        required
      },
      country: {
        required
      },
      phone: {
        required
      },
      email: {
        required
      },
      license: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(["success"])
  },
  watch: {
    success(val) {
      if (val) {
        this.$router.push({ name: "supplier" });
      }
    }
  },
  methods: {
    onCreateSupplier() {
      if (this.$v.$invalid === false) {
        this.createSupplier({
          ...this.customer
        });
      } else {
        this.$v.$touch();
      }
    },
    ...mapActions(["createSupplier"]),
    ...mapMutations(["resetSucess"])
  },
  destroyed() {
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>