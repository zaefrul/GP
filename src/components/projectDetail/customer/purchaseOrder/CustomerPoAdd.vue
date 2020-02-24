<template>
    <div id="piCustomerPoAdd">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
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
                        <tr v-for="(item, index) in currentCustomerPO.items" :key="index++">
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
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/cpo'" class="btn btn-danger ml-3" style="float: right;" tag="button">Cancel</router-link>
                <router-link to="cpo/add/" class="btn btn-primary ml-3" style="float: right;" tag="button">Create Customer PO</router-link>
                <button 
                    type="button"
                    class="btn btn-success"
                    @click="onSave()"
                >
                    Create
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'piCustomerPoAdd',
    data: function(){
        return {
            customerPoAdd : [
                { 
                    id: '1',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price:0
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
                    price:0
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
                    price:0
                }
             ]
        }
    },
    computed: {
        ...mapGetters(["currentCustomerPO","success"])
    },
    methods: {
        ...mapActions(["getLatestQuoForPo","createCustomerPO"]),
        onSave() {
            this.currentCustomerPO.id = 0;
            this.currentCustomerPO.items.forEach(x => {
                x.id = 0;
                x.quotationId = 0;    
            });
            this.createCustomerPO(this.currentCustomerPO);
        }
    },
    mounted() {
        this.getLatestQuoForPo(this.$route.params.pid)
    },
    watch: {
        success(val){
            this.$router.push({name:"customerPOList"})
        }
    }
}
</script>

<style scoped>

</style>