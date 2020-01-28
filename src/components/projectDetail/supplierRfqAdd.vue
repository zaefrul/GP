<template>
    <div id="piSupplierRfqAdd">
        <div class="container" style="margin-bottom: 60px; margin-top: 30px;">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-row">
                        <div class="col-2">Select Supplier</div>
                        <div class="col-8">
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
                        <div class="col-2">
                            <button class="btn btn-danger ml-3" style="float: right;" type="submit">Add New Supplier</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Description</th>
                            <th scope="col">Part Number</th>
                            <th scope="col">Model Number</th>
                            <th scope="col">Serial Number</th>
                            <th scope="col">Drawing Number</th>
                            <th scope="col">Item Number</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in suppRfqList" :key="index++">
                        <td v-html="item.checkbox"></td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.part }}</td>
                        <td>{{ item.model }}</td>
                        <td>{{ item.serial }}</td>
                        <td>{{ item.drawing }}</td>
                        <td>{{ item.item }}</td>
                        <td>{{ item.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
                
                <button class="btn btn-danger ml-3" style="float: right;" type="submit">Cancel</button>
                <button class="btn btn-primary ml-3" style="float: right;" type="submit">Generate Supplier RFQ</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piSupplierRfqAdd',
    data: function(){
        return {
            suppRfqList : [
                { 
                    checkbox: '<div class="form-check"><input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></div>',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999'
                }
             ]
        }
    }
}
</script>

<style scoped>

</style>