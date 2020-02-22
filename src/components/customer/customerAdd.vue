<template>
  <div id="customerAdd" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">REGISTER CUSTOMER</h1>
      <p class="lead">Register new customer to the system</p>
    </div>

    <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
      <form action>
        <div class="card">
          <div class="card-body">
            <!--New Customer List-->
            <div class="newForm">
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputCompanyName">Company Name</label>
                  <input
                    type="text"
                    id="inputCompanyName"
                    class="form-control"
                    placeholder="Company Name"
                    v-model="customer.companyName"
                    @blur="$v.customer.companyName.$touch"
                    @change="$v.customer.companyName.$touch"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputPhoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="inputPhoneNumber"
                    class="form-control"
                    placeholder="Phone Number"
                    v-model="customer.phone"
                    @blur="$v.customer.phone.$touch"
                    @change="$v.customer.phone.$touch"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputAddressMain">Address</label>
                  <input
                    type="text"
                    id="inputAddressMain"
                    class="form-control"
                    placeholder="Address"
                    v-model="customer.address"
                    @blur="$v.customer.address.$touch"
                    @change="$v.customer.address.$touch"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputEmail">Email Address</label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
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
                    id="inputAddressSub"
                    class="form-control"
                    placeholder="Address"
                    v-model="customer.address"
                    @blur="$v.customer.address.$touch"
                    @change="$v.customer.address.$touch"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputPostcode">Postcode</label>
                  <input
                    type="text"
                    id="inputPostcode"
                    class="form-control"
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
                  <label for="inputCountry">Country</label>
                  <select
                    id="inputCountry"
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
              to="/customer/list"
              tag="button"
              class="btn btn-danger ml-3"
              style="float: right;"
            >Cancel</router-link>
            <Button
              type="button"
              @click="onCreateCustomer"
              class="btn btn-primary ml-3"
              style="float: right;"
            >Register New customer</Button>
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
  name: "customerAdd",
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
        license: ""
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
        this.$router.push({ name: "customer" });
      }
    }
  },
  methods: {
    onCreateCustomer() {
      if (this.$v.$invalid === false) {
        this.createCustomer({
          ...this.customer
        });
      } else {
        this.$v.$touch();
      }
    },
    ...mapActions(["createCustomer"]),
    ...mapMutations(["resetSucess"])
  },
  destroyed() {
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>