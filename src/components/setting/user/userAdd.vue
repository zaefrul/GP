<template>
  <div id="userAdd" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">REGISTER NEW USER</h1>
      <p class="lead">Register new user to the system</p>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
      <form @submit.prevent="addUser()" action method>
        <div class="card">
          <div class="card-body">
            <!--New Customer List-->
            <div class="newForm">
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputFullName">First Name</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="text"
                    id="inputFullName"
                    class="form-control"
                    placeholder
                    v-model="firstName"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputFullName">Last Name</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="text"
                    id="inputFullName"
                    class="form-control"
                    placeholder
                    v-model="lastName"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputEmail">Email Address</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="text"
                    id="inputEmail"
                    class="form-control"
                    placeholder
                    v-model="email"
                    required
                  />
                  <p
                    class="text-danger"
                    v-if="!$v.email.require && !$v.email.email"
                  >Email is require and must be in correct format</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputPhoneNo">Phone Number</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="text"
                    id="inputPhoneNo"
                    class="form-control"
                    placeholder
                    v-model="phone"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputPhoneNo">Username</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="text"
                    id="inputPhoneNo"
                    class="form-control"
                    placeholder
                    v-model="username"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputPhoneNo">Password</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="password"
                    id="inputPhoneNo"
                    class="form-control"
                    placeholder
                    v-model="password"
                    required
                  />
                  <p
                    class="text-danger"
                    v-if="!$v.password.require && !$v.password.minLength"
                  >Password length should be 6 or more.</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputPhoneNo">Confirm Password</label>
                </div>
                <div class="form-group col-md-10">
                  <input
                    type="password"
                    id="inputPhoneNo"
                    class="form-control"
                    placeholder
                    v-model="confirmPassword"
                    required
                  />
                  <p
                    class="text-danger"
                    v-if="!$v.confirmPassword.required && !$v.confirmPassword.sameAsPassword"
                  >Password must be identical</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-2">
                  <label for="inputPermission">Permission</label>
                </div>
                <div class="form-group col-md-10">
                  <select class="form-control" id="inputPermission" v-model="permission">
                    <option value="Member">Member</option>
                    <option value="Visitor">Visitor</option>
                    <option value="Administrator">Administrator</option>
                  </select>
                </div>
              </div>
            </div>

            <router-link
              to="/setting/user"
              tag="button"
              class="btn btn-danger ml-3"
              style="float: right;"
            >Cancel</router-link>
            <!-- <router-link to="/setting/user" tag="button" class="btn btn-primary ml-3" style="float: right;" >Save</router-link> -->
            <button
              type="button"
              style="float: right;"
              class="btn btn-primary ml-3"
              @click="onRegister"
            >Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "userAdd",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
      permission: ""
    };
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required
    },
    username: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  computed: {
    ...mapGetters(["user", "success"])
  },
  watch: {
    success(val) {
      if (val) {
        this.$router.push({ name: "userList" });
      }
    }
  },
  methods: {
    addUser() {},
    onRegister() {
      if (this.$v.$invalid === false) {
        this.registerUser({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.phone,
          role: this.permission
        });
      } else {
        this.$v.$touch();
      }
    },
    ...mapActions(["registerUser"]),
    ...mapMutations(["resetSuccess"])
  },
  destroyed() {
    this.resetSuccess();
  }
};
</script>

<style scoped>
</style>