<template>
    <div id="piSupplierRfqList">
        <div class="container" style="margin-bottom: 60px;">
            <div class="card">
                <div class="card-body">

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No</th>
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
                        <tr v-for="(item, index) in projectRFQ.items" :key="index++">
                        <td scope="row">{{ index }}</td>
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
                
                <button class="btn btn-success" style="float: right;" type="button">Add</button>
                <button class="btn btn-primary" style="float: right;" type="submit">Edit Request Item</button>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Supplier</th>
                                <th scope="col">Status</th>
                                <th scope="col">Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in supplierRfqList" :key="index++">
                                <td scope="row">{{ index }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.supplier }}</td>
                                <td>{{ item.status }}</td>
                                <td class="text-center"><router-link to="srfq/view/" class="nav-link">View RFQ</router-link></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    <button class="btn btn-primary" style="float: right;" type="submit">Add New Supplier RFQ</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'piSupplierRfqList',
    data: function(){
        return {
        }
    },
    mounted() {
        this.getProjectSupplierRFQ(this.$route.params.pid);
    },
    computed: {
        ...mapGetters(["projectRFQ"])
    },
    methods: {
        ...mapActions(["getProjectSupplierRFQ"])
    }
}
</script>

<style scoped>

</style>