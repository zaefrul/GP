<template>
    <div id="piCustomerRfqEdit">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <form action="">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Part No</th>
                                    <th scope="col">Model No</th>
                                    <th scope="col">Serial No</th>
                                    <th scope="col">Drawing No</th>
                                    <th scope="col">Item No</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in custRfqList" :key="index++">
                                    <td scope="row">{{ index }}</td>
                                    <td v-html="item.description"></td>
                                    <td v-html="item.part"></td>
                                    <td v-html="item.model"></td>
                                    <td v-html="item.serial"></td>
                                    <td v-html="item.drawing"></td>
                                    <td v-html="item.item"></td>
                                    <td v-html="item.quantity"></td>
                                    <td>delete</td>
                                </tr>
                            </tbody>
                        </table>
                    <button class="btn btn-success ml-3" style="float: right;" type="submit">Submit</button>
                    <button class="btn btn-danger ml-3" style="float: right;" type="submit">Cancel</button>
                    <button class="btn btn-warning ml-3" style="float: right;" type="submit">Add New Row</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piCustomerRfqEdit',
    data: function(){
        return {
            custRfqList : [
                { 
                    description: '<input class="form-control form-control-sm" type="text" placeholder="Description">', 
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