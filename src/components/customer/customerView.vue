<template>
    <div id="customerView" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center" v-for="(item, index) in customerView" :key="index++">
  <h1 class="display-4">CUSTOMER: {{ item.company }}</h1>
</div>

        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        
                        <!--New Customer List-->
                        <div class="editForm" v-for="(item, index) in customerView" :key="index++">
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputCompanyName">Company Name</label>
                                <input type="text" id="inputCompanyName" class="form-control" placeholder="Company Name" v-model="inputCompanyName" readonly>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputPhoneNumber">Phone Number</label>
                                <input type="text" id="inputPhoneNumber" class="form-control" placeholder="Phone Number" v-model="inputPhoneNumber" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputAddressMain">Address</label>
                                <input type="text" id="inputAddressMain" class="form-control" placeholder="Address" v-model="inputAddressMain" readonly>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputEmail">Email Address</label>
                                <input type="text" id="email" class="form-control" placeholder="Email" v-model="inputEmail" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <input type="text" id="inputAddressSub" class="form-control" placeholder="Address" v-model="inputAddressSub" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputPostcode">Postcode</label>
                                    <input type="text" class="form-control" id="inputCity" placeholder="inputPostcode" v-model="inputPostcode" readonly>
                                </div>
                                
                                <div class="form-group col-md-5">
                                    <label for="inputState">State</label>
                                    <input type="text" id="inputState" class="form-control" placeholder="Postcode" v-model="inputState" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <label for="inputCountry">Country</label>
                                    <input type="text" id="inputCountry" class="form-control" placeholder="Postcode" v-model="inputCountry" readonly>
                                </div>
                            </div>
                        </div>

                    <router-link to="/customer" tag="button" class="btn btn-danger ml-3" style="float: right;" >Back</router-link>
                    <router-link :to="'/customer/edit/' + this.$route.params.cid" tag="button" class="btn btn-primary ml-3" style="float: right;" >Edit</router-link>
                        
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
var id;
export default {
    name: 'customerView',
    data: function(){
        return {
            customerView : [
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'}
            ]
        }
    }
}
</script>

<style scoped>

</style>