<template>
    <div id="customerAdd" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">REGISTER CUSTOMER</h1>
  <p class="lead">Register new customer to the system</p>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputCompanyName">Company Name</label>
                                <input type="text" id="inputCompanyName" class="form-control" placeholder="Company Name" v-model="inputCompanyName" required>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputPhoneNumber">Phone Number</label>
                                <input type="text" id="inputPhoneNumber" class="form-control" placeholder="Phone Number" v-model="inputPhoneNumber" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputAddressMain">Address</label>
                                <input type="text" id="inputAddressMain" class="form-control" placeholder="Address" v-model="inputAddressMain" required>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputEmail">Email Address</label>
                                <input type="text" id="email" class="form-control" placeholder="Email" v-model="inputEmail" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <input type="text" id="inputAddressSub" class="form-control" placeholder="Address" v-model="inputAddressSub">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputPostcode">Postcode</label>
                                    <input type="text" id="inputPostcode" class="form-control" placeholder="Postcode" v-model="inputPostcode" required>
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control" v-model="inputState" >
                                        <option selected>Choose...</option>
                                        <option>Selangor</option>
                                        <option>Kuala Lumpur</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputCountry">Country</label>
                                <select id="inputCountry" class="form-control" v-model="inputCountry" >
                                    <option selected>Choose...</option>
                                    <option>Malaysia</option>
                                    <option>Indonesia</option>
                                    <option>Brunei</option>
                                </select>
                                </div>
                            </div>
                        </div>

                        <router-link to="/customer/list" tag="button" class="btn btn-danger ml-3" style="float: right;" >Cancel</router-link>
                        <router-link to="/customer/lsit" tag="button" class="btn btn-primary ml-3" style="float: right;" >Register New customer</router-link>
                        
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'customerAdd'
}
</script>

<style scoped>

</style>