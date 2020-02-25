<template>
    <div id="piSupplierDoView">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-row">
                        <div class="col-2">delivery Order To:</div>
                        <div class="col-8">Supplier Company Name</div>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in currentSupplierDO.items" :key="index++">
                        <td><div class="form-check"><input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." :v-model="getItemID + item.id"></div></td>
                        <td>{{ item.partName }}</td>
                        <td>{{ item.partNumber }}</td>
                        <td>{{ item.modelNumber }}</td>
                        <td>{{ item.serialNumber }}</td>
                        <td>{{ item.drawingNumber }}</td>
                        <td>{{ item.tagNumber }}</td>
                        <td>{{ item.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/sdo/view'" class="btn btn-danger ml-3" style="float: right;" tag="button">Back</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + 'sdo/report/'+currentSupplierDO.id" class="btn btn-primary ml-3" style="float: right;" tag="button">Report</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'piSupplierDoView',
    data: function(){
        return {
            suppDoView : [
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
    mounted(){
        this.getDetailSupplierDO(this.$route.params.sdoid);
    },
    computed: {
        ...mapGetters(["currentSupplierDO"])
    },
    methods: {
        ...mapActions(["getDetailSupplierDO"])
    }
}
</script>

<style scoped>

</style>