<template>
    <div id="piCustomerDoEdit">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-row">
                        <div class="col-2">Delivery Order To:</div>
                        <div class="col-8">Customer Name</div>
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
                            <th scope="col">Part No</th>
                            <th scope="col">Model No</th>
                            <th scope="col">Serial No</th>
                            <th scope="col">Drawing No</th>
                            <th scope="col">Item No</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in custDoEdit" :key="index++">
                        <td><a href="#"><i class="far fa-trash-alt"></i></a></td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.part }}</td>
                        <td>{{ item.model }}</td>
                        <td>{{ item.serial }}</td>
                        <td>{{ item.drawing }}</td>
                        <td>{{ item.item }}</td>
                        <td>{{ item.quantity }}</td>
                        <td><input type="text" class="form-control" id="exampleFormControlInput1" :placeholder="item.price" :v-model="'inputPrice' + item.id"></td>
                        </tr>
                    </tbody>
                </table>
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/cdo'" class="btn btn-danger ml-3" style="float: right;" tag="button">Cancel</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/cdo'" class="btn btn-primary ml-3" style="float: right;" tag="button">Save</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piCustomerDoEdit',
    data: function(){
        return {
            suppPoEdit : [
                { 
                    id: '1',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                },
                { 
                    id: '2',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                },
                { 
                    id: '3',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                },
                { 
                    id: '4',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                }
             ]
        }
    }
}
</script>

<style scoped>

</style>