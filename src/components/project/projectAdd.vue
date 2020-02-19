<template>
    <div id="projectAdd" class="content-margin-top">

        <div class="jumbotron jumbotron-fluid text-center">
            <h1 class="display-4">REGISTER NEW PROJECT</h1>
            <p class="lead">Register new project to the system</p>
        </div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">
                <div class="card">
                    <div class="card-body">
                        <div class="form-row mb-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="radioSelection" id="radioSelection" value="newCustomer" :checked="radioClicked === true" @click="addCustomerType()">
                                <label class="form-check-label" for="radioNew">New Customer</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="radioSelection" id="radioSelection" value="existingCustomer" :checked="radioClicked === false" @click="addCustomerType()">
                                <label class="form-check-label" for="radioExisting">Existing Customer</label>
                            </div>
                        </div>

                        <!--New Project List-->
                        <div class="projectAddForm" v-if="radioClicked === true">
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

                        <!--Existing Customer List-->
                        <div class="currentForm" v-else>
                            <div class="d-flex flex-row">
                                <div class="col-2">Select Existing Customer</div>
                                <div class="col-10">
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Part No</th>
                                    <th scope="col">Model No</th>
                                    <th scope="col">Serial No</th>
                                    <th scope="col">Drawing No</th>
                                    <th scope="col">Item No</th>
                                    <th scope="col">Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in addNewProjectList" :key="index++">
                                    <td scope="row">{{ index }}</td>
                                    <td v-html="item.name"></td>
                                    <td v-html="item.part"></td>
                                    <td v-html="item.model"></td>
                                    <td v-html="item.serial"></td>
                                    <td v-html="item.drawing"></td>
                                    <td v-html="item.item"></td>
                                    <td v-html="item.quantity"></td>
                                </tr>
                            </tbody>
                        </table>

                        <router-link to="/project" class="btn btn-danger ml-3" style="float: right;">Cancel</router-link>
                        <router-link to="/project" class="btn btn-success ml-3" style="float: right;">Submit</router-link>
                        <button class="btn btn-info ml-3" style="float: right;" type="submit">Add New Row</button>

                    </div>
                </div>
                
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'projectAdd',
    data: function(){
        return {
            addNewProjectList : [
                { 
                    name: '<input class="form-control form-control-sm" type="text" placeholder="Description">', 
                    part: '<input class="form-control form-control-sm" type="text" placeholder="Part No">', 
                    model: '<input class="form-control form-control-sm" type="text" placeholder="Model no">', 
                    serial: '<input class="form-control form-control-sm" type="text" placeholder="Serial No">', 
                    drawing: '<input class="form-control form-control-sm" type="text" placeholder="Drawing No">', 
                    item: '<input class="form-control form-control-sm" type="text" placeholder="Item No">', 
                    quantity: '<input class="form-control form-control-sm" type="text" placeholder="Quantity">'
                }
            ],
            radioClicked: true
        }
    },
    methods: {
        addCustomerType() {
            this.radioClicked = !this.radioClicked;
        }
    },
}
</script>

<style scoped>

</style>