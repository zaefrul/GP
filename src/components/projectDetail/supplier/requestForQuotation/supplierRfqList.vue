<template>
    <div id="piSupplierRfqList">
        <div class="container-fluid" style="margin-bottom: 60px;">
            <div class="card">
                <div v-if="projectRFQ == null" class="card-body">
                    <button class="btn btn-success" style="float: middle;" type="button" @click="gSRFQ()">Generate Supplier RFQ</button>
                </div>
                <div v-else class="card-body">

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
                <button class="btn btn-primary" style="float: right;" type="button">Edit Request Item</button>
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
        ...mapActions(["getProjectSupplierRFQ"]),
        gSRFQ() {
            this.$router.push({name:"ASRFQ"});
        }
    }
}
</script>

<style scoped>

</style>