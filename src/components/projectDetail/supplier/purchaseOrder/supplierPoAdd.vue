<template>
    <div id="piSupplierPoAdd">
        <form action="">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-row">
                        <div class="col-2">PO to Supplier</div>
                        <div class="col-8">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" v-model="selectPo">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-2">
                            <router-link to="/supplier/add" class="btn btn-primary ml-3" style="float: right;" tag="button">Add New Supplier</router-link>
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
                            <th scope="col">Part No</th>
                            <th scope="col">Model No</th>
                            <th scope="col">Serial No</th>
                            <th scope="col">Drawing No</th>
                            <th scope="col">Item No</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in currentSupplierPO.items" :key="index++">
                        <td>{{ index }}</td>
                        <td>{{ item.partName }}</td>
                        <td>{{ item.partNumber }}</td>
                        <td>{{ item.modelNumber }}</td>
                        <td>{{ item.serialNumber }}</td>
                        <td>{{ item.drawingNumber }}</td>
                        <td>{{ item.remarks }}</td>
                        <td>{{ item.quantity }}</td>
                        <td><input type="text" class="form-control" id="exampleFormControlInput1" v-model="item.amount" placeholder="Price"></td>
                        <td>{{ item.quantity * item.amount }}</td>
                        </tr>
                    </tbody>
                </table>
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/spo'" class="btn btn-danger ml-3" style="float: right;" tag="button">Cancel</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/spo'" class="btn btn-primary ml-3" style="float: right;" tag="button">Create Supplier PO</router-link>

                </div>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'piSupplierPoAdd',
    data: function(){
        return {
            suppPoAdd : [
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
    },
    computed:{
        ...mapGetters(["currentSupplierPO","success"])
    },
    methods: {
        ...mapActions(["getLatestQuoForSupPo","createSupplierPO"]),
        onSave() {
            this.currentSupplierPO.id = 0;
            this.currentSupplierPO.items.forEach(x => {
                x.id = 0;
                x.quotationId = 0;    
            });
            this.createSupplierPO(this.currentSupplierPO);
        }
    },
    mounted() {
        this.getLatestQuoForSupPo(this.$route.params.pid);
    },
    watch: {
        success(val) {
            this.$router.push({name:""})
        }
    }
}
</script>

<style scoped>

</style>