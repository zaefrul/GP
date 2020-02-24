<template>
    <div id="piCustomerRfqView">
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
                        <tr v-for="(item, index) in custRfqList" :key="index++">
                        <td scope="row">{{ index }}</td>
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
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/crfq/report/cqid'" class="btn btn-info ml-3" style="float: right;" tag="button">Generate</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/crfq'" class="btn btn-danger ml-3" style="float: right;" tag="button">Cancel</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/crfq'" class="btn btn-primary ml-3" style="float: right;" tag="button">Edit</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import piCustomerRfqEdit from './customerRfqEdit.vue'

export default {
    name: 'piCustomerRfqView',
    data: function(){
        return {
            custRfqList : [
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', quantity: '999'}
            ]
        }
    },
    components: {
        pageCustomerEdit: piCustomerRfqEdit
    }
}
</script>

<style scoped>

</style>