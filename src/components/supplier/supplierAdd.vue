<template>
    <div id="supplierAdd" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">REGISTER SUPPLIER</h1>
  <p class="lead">Register new supplier to the system</p>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputEmail4">Company Name</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputPassword4">Phone Number</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputEmail4">Address</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputEmail4">Email Address</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-3">
                                    <label for="inputCity">Postcode</label>
                                    <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-5">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>Selangor</option>
                                        <option>Kuala Lumpur</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-8">
                                <label for="inputState">Country</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>Malaysia</option>
                                    <option>Indonesia</option>
                                    <option>Brunei</option>
                                </select>
                                </div>
                            </div>
                        </div>

                    <router-link to="/supplier/list" tag="button" class="btn btn-danger ml-3" style="float: right;" >Cancel</router-link>
                    <router-link to="/supplier/lsit" tag="button" class="btn btn-primary ml-3" style="float: right;" >Register New Supplier</router-link>
                        
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'supplierAdd'
}
</script>

<style scoped>

</style>