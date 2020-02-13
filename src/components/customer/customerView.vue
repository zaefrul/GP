<template>
    <div id="customerView" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center" v-for="(item, index) in customerView" :key="index++">
  <h1 class="display-4">CUSTOMER: {{ item.company }}</h1>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm" v-for="(item, index) in customerView" :key="index++">
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputEmail4">Company Name</label>
                                <input type="email" class="form-control" id="inputEmail4" :placeholder="item.company" readonly>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputPassword4">Phone Number</label>
                                <input type="password" class="form-control" id="inputPassword4" :placeholder="item.contact" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputEmail4">Address</label>
                                <input type="email" class="form-control" id="inputEmail4" :placeholder="item.email" readonly>
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputEmail4">Email Address</label>
                                <input type="password" class="form-control" id="inputPassword4" :placeholder="item.email" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputCity">Postcode</label>
                                    <input type="text" class="form-control" id="inputCity" readonly>
                                </div>
                                
                                <div class="form-group col-md-5">
                                    <label for="inputCity">State</label>
                                    <input type="text" class="form-control" id="inputCity" readonly>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <label for="inputCity">Country</label>
                                    <input type="text" class="form-control" id="inputCity" readonly>
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