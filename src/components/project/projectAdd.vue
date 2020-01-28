<template>
    <div id="projectAdd">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">
                        <div class="form-row mb-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="newCustomer">
                                <label class="form-check-label" for="inlineRadio1">New Customer</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="existingCustomer">
                                <label class="form-check-label" for="inlineRadio2">Existing Customer</label>
                            </div>
                        </div>

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

                        <!--Existing Customer List-->
                        <div class="currentForm">
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
                        <button class="btn btn-success ml-3" style="float: right;" type="submit">Submit</button>
                        <button class="btn btn-danger ml-3" style="float: right;" type="submit">Cancel</button>
                        <button class="btn btn-warning ml-3" style="float: right;" type="submit">Add New Row</button>
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
            ]
        }
    }
}
</script>

<style scoped>

</style>