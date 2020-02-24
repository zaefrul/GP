<template>
    <div id="userEdit" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">EDIT USER</h1>
</div>

        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <form @submit.prevent="onModify()" action  method >

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputFullName">Username</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="userDetails.username" 
                                        readonly 
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputFullName">Password</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="password" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputFullName">Confirm Password</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="confirmPassword" 
                                        required 
                                    />
                                    <p
                                        class="text-danger"
                                        v-if="!$v.confirmPassword.sameAsPassword"
                                    >
                                    Password must be identical
                                    </p>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputFullName">First Name</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="userDetails.firstName" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputFullName">Last Name</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="userDetails.lastName" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputEmail">Email Address</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="userDetails.email" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPhoneNo">Phone Number</label></div>
                                <div class="form-group col-md-10">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        v-model="userDetails.phone" 
                                        required 
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPermission">Permission</label></div>
                                <div class="form-group col-md-10">
                                    <select class="form-control" id="inputPermission" v-model="userDetails.role">
                                        <option value="Member">Member</option>
                                        <option value="Visitor">Visitor</option>
                                        <option value="Administrator">Administrator</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <router-link to="/setting/user" tag="button" class="btn btn-danger ml-3" style="float: right;" >Cancel</router-link>
                        <button type="button" style="float: right;" class="btn btn-primary ml-3" @click="onModify()">Save</button>

                        
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
import {required, sameAs, minLength, email} from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'userEdit',
    data: function(){
        return {
            password:"",
            confirmPassword:""
        }
    },
    mounted(){
        this.getUser(this.$route.params.uid);
    },
    watch: {
        success(val) {
            if(val)
            {
                this.$router.push({name:"userList"});
            }
        }
    },
    validations: {
        "userDetails.firstName": {
            required
        },
        "userDetails.lastName": {
            required
        },
        "userDetails.email": {
            required, email
        },
        "userDetails.phone": {
            required
        },
        "userDetails.username": {
            required,
            minLength: minLength(6)
        },
        password: {
            minLength: minLength(6)
        },
        confirmPassword: {
            sameAsPassword: sameAs("password")
        }
    },
    computed: {
        ...mapGetters(["userDetails","success"])
    },
    methods: {
        onModify(){
            if(this.password.length > 0)
            {
                this.userDetails.password = this.password;
            }
            this.modifyUser(this.userDetails);
        },
        ...mapActions(["getUser","modifyUser"])
    }
}
</script>

<style scoped>

</style>