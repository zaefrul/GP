<template>
    <div id="piCustomerDoAdd">
        <form action="">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-row">
                    <div class="col-2">Set Dateline</div>
                        <div class="col-8">
                            <div class="form-group">
                                <input type="date" class="form-control" v-model="projectRFQ.dateline" />
                            </div>
                        </div>
                    </div>                    
                        <div class="col-2">
                            <router-link to="/supplier/add" class="btn btn-primary ml-3" style="float: right;" tag="button">Add New Supplier</router-link>
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
                        <tr v-for="(item, index) in projectRFQ.items" :key="index++">
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
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/cdo'" class="btn btn-danger ml-3" style="float: right;" tag="button">Cancel</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/cdo'" class="btn btn-primary ml-3" style="float: right;" tag="button">Create Supplier PO</router-link>
                <button type="button" class="btn btn-success" @click="createCDO()">Create</button>
                </div>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'piCustomerDoAdd',
    data: function(){
        return {
            custPoAdd : [
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
    mounted() {
        this.getProjectCustomerRFQ(this.$route.params.pid);
    },
    computed: {
        ...mapGetters(["projectRFQ", "success"])
    },
    methods: {
        ...mapActions(["getProjectCustomerRFQ", "createCustomerDO"]),
        createCDO() {
            this.projectRFQ.id = 0;
            this.projectRFQ.items.forEach(element => {
                element.id = 0;
                element.rfqId = 0;
            });
            console.log(this.projectRFQ)
            this.createCustomerDO(this.projectRFQ)
        }
    },
    watch: {
        success(val)
        {
            this.$router.push({name:"cdoList"})
        }
    }
}
</script>

<style scoped>

</style>