<template>
  <div id="projectAdd" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">REGISTER NEW PROJECT</h1>
      <p class="lead">Register new project to the system</p>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
      <form action>
        <div class="card">
          <div class="card-body">
            <div class="form-row mb-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioSelection"
                  id="radioSelection"
                  value="newCustomer"
                  :checked="radioClicked === true"
                  @click="addCustomerType()"
                />
                <label class="form-check-label" for="radioNew">New Customer</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radioSelection"
                  id="radioSelection"
                  value="existingCustomer"
                  :checked="radioClicked === false"
                  @click="addCustomerType()"
                />
                <label class="form-check-label" for="radioExisting">Existing Customer</label>
              </div>
            </div>

            <!--New Project List-->
            <div class="projectAddForm" v-if="radioClicked === true">
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputCompanyName">Company Name</label>
                  <input
                    type="text"
                    id="inputCompanyName"
                    class="form-control"
                    placeholder="Company Name"
                    v-model="customerData.companyName"
                    @blur="$v.customerData.companyName.$touch"
                    @change="$v.customerData.companyName.$touch"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputPhoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="inputPhoneNumber"
                    class="form-control"
                    placeholder="Phone Number"
                    v-model="customerData.phone"
                    @blur="$v.customerData.phone.$touch"
                    @change="$v.customerData.phone.$touch"
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
                    v-model="customerData.address"
                    @blur="$v.customerData.address.$touch"
                    @change="$v.customerData.address.$touch"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputEmail">Email Address</label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder="Email"
                    v-model="customerData.email"
                    @blur="$v.customerData.email.$touch"
                    @change="$v.customerData.email.$touch"
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
                    v-model="customerData.address"
                    @blur="$v.customerData.address.$touch"
                    @change="$v.customerData.address.$touch"
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
                    v-model="customerData.postcode"
                    @blur="$v.customerData.postcode.$touch"
                    @change="$v.customerData.postcode.$touch"
                  />
                </div>
                <div class="form-group col-md-5">
                  <label for="inputState">State</label>
                  <select
                    id="inputState"
                    class="form-control"
                    v-model="customerData.state"
                    @blur="$v.customerData.state.$touch"
                    @change="$v.customerData.state.$touch"
                  >
                    <option selected>Choose...</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputCountry">Country</label>
                  <select
                    id="inputCountry"
                    class="form-control"
                    v-model="customerData.country"
                    @blur="$v.customerData.country.$touch"
                    @change="$v.customerData.country.$touch"
                  >
                    <option selected>Choose...</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Brunei">Brunei</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputPostcode">License</label>
                  <input
                    type="text"
                    id="inputPostcode"
                    class="form-control"
                    placeholder="License"
                    v-model="customerData.license"
                    @blur="$v.customerData.license.$touch"
                    @change="$v.customerData.license.$touch"
                  />
                </div>
              </div>
            </div>

            <!--Existing Customer List-->
            <div class="currentForm" v-else>
              <div class="d-flex flex-row">
                <div class="col-2">Select Existing Customer</div>
                <div class="col-10">
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      v-model="customerId"
                    >
                      <option
                        v-for="cust in customer"
                        :key="cust.id"
                        :value="cust.id"
                      >{{ cust.companyName }}</option>
                      <!-- <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>-->
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="projectTitle">Project Title</label>
                <input
                  type="text"
                  id="projectTitle"
                  class="form-control"
                  placeholder="Project"
                  v-model="projectTitle"
                  @blur="$v.projectTitle.$touch"
                  @change="$v.projectTitle.$touch"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-3">
          <div class="card-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Part Name</th>
                  <th scope="col">Part No</th>
                  <th scope="col">Part Pos</th>
                  <th scope="col">Serial No</th>
                  <th scope="col">Drawing No</th>
                  <th scope="col">Tag No</th>
                  <th scope="col">Model Number</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Revision No</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(v, index) in $v.items.$each.$iter" :key="index++">
                  <!-- <tr v-for="(item, index) in addNewProjectList" :key="index++"> -->
                  <td scope="row">{{ index }}</td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Description"
                      v-model.trim="v.partName.$model"
                      @blur="v.partName.$touch"
                      @change="v.partName.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Part No"
                      v-model.trim="v.partNumber.$model"
                      @blur="v.partNumber.$touch"
                      @change="v.partNumber.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Part Position"
                      v-model.trim="v.partPosition.$model"
                      @blur="v.partPosition.$touch"
                      @change="v.partPosition.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Serial Number"
                      v-model.trim="v.serialNumber.$model"
                      @blur="v.serialNumber.$touch"
                      @change="v.serialNumber.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Drawing Number"
                      v-model.trim="v.drawingNumber.$model"
                      @blur="v.drawingNumber.$touch"
                      @change="v.drawingNumber.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Tag Number"
                      v-model.trim="v.tagNumber.$model"
                      @blur="v.tagNumber.$touch"
                      @change="v.tagNumber.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Model Number"
                      v-model.trim="v.modelNumber.$model"
                      @blur="v.modelNumber.$touch"
                      @change="v.modelNumber.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Remarks"
                      v-model.trim="v.remarks.$model"
                      @blur="v.remarks.$touch"
                      @change="v.remarks.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Revision No"
                      v-model.trim="v.revision.$model"
                      @blur="v.revision.$touch"
                      @change="v.revision.$touch"
                    />
                  </td>
                  <td>
                    <input
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Quantity"
                      v-model.trim="v.quantity.$model"
                      @blur="v.quantity.$touch"
                      @change="v.quantity.$touch"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <router-link to="/project" class="btn btn-danger ml-3" style="float: right;">Cancel</router-link>
            <!-- <router-link to="/project" class="btn btn-success ml-3" style="float: right;">Submit</router-link> -->
            <button
              type="button"
              class="btn btn-success ml-3"
              style="float: right;"
              @click="onSubmitWithCustomer"
            >Submit</button>
            <button
              type="button"
              class="btn btn-info ml-3"
              style="float: right;"
              @click="onAddNewItem"
            >Add New Row</button>

            <!-- </tr> -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, requiredIf } from "vuelidate/lib/validators";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "projectAdd",
  data: function() {
    return {
      addNewProjectList: [
        {
          name:
            '<input class="form-control form-control-sm" type="text" placeholder="Description">',
          part:
            '<input class="form-control form-control-sm" type="text" placeholder="Part No">',
          model:
            '<input class="form-control form-control-sm" type="text" placeholder="Model no">',
          serial:
            '<input class="form-control form-control-sm" type="text" placeholder="Serial No">',
          drawing:
            '<input class="form-control form-control-sm" type="text" placeholder="Drawing No">',
          item:
            '<input class="form-control form-control-sm" type="text" placeholder="Item No">',
          quantity:
            '<input class="form-control form-control-sm" type="text" placeholder="Quantity">'
        }
      ],
      radioClicked: true,
      customerId: null,
      customerData: {
        companyName: "",
        address: "",
        postcode: "",
        state: "",
        country: "",
        phone: "",
        email: "",
        license: ""
      },
      projectTitle: "",
      items: [
        {
          partName: "",
          partNumber: "",
          partPosition: "",
          serialNumber: "",
          drawingNumber: "",
          tagNumber: "",
          modelNumber: "",
          remarks: "",
          revision: "",
          quantity:""
        }
      ]
    };
  },
  validations: {
    customerId: {
      required: requiredIf(vm => {
        return vm.radioClicked === false;
      })
    },

    customerData: {
      companyName: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      address: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      postcode: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      state: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      country: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      phone: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      email: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      },
      license: {
        required: requiredIf(vm => {
          return vm.radioClicked === false;
        })
      }
    },
    projectTitle: {
      required
    },
    items: {
      required,
      minLength: minLength(1),
      $each: {
        partName: {
          required
        },
        partNumber: {
          required
        },
        partPosition: {
          required
        },
        serialNumber: {
          required
        },
        drawingNumber: {
          required
        },
        tagNumber: {
          required
        },
        modelNumber: {
          required
        },
        remarks: {
          required
        },
        revision: {
          required
        },
        quantity: {
          required
        }
      }
    }
  },
  computed: {
    ...mapGetters(["success", "customer"])
  },
  watch: {
    success(val) {
      if (val) {
        this.$router.push({ name: "projectList" });
      }
    },
    radioClicked(val) {
      if (val == false) {
        if (this.customer.length === 0) {
          this.getAllCustomers();
        } else {
        }
      }
    }
  },
  methods: {
    addCustomerType() {
      this.radioClicked = !this.radioClicked;
    },
    onSubmitWithCustomer() {
      if (this.$v.$invalid === false) {
        if (this.radioClicked)
          this.createProjectWithCustomer({
            customer: { ...this.customerData },
            title: { title: this.projectTitle },
            items: [...this.items]
          });
        else
          this.createProjectExistingCustomer({
            customerId: this.customerId,
            title: { title: this.projectTitle },
            items: [...this.items]
          });
      } else {
        this.$v.$touch();
      }
    },
    onAddNewItem() {
      this.items.push({ partName: "" });
    },
    ...mapActions([
      "createProjectWithCustomer",
      "getAllCustomers",
      "createProjectExistingCustomer"
    ]),

    ...mapMutations(["resetSucess"])
  },
  destroyed() {
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>