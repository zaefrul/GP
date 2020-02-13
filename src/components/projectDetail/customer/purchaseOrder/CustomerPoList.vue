<template>
    <div id="piCustomerPoList" class="content-margin-top">
        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">PO Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in customerPoList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.remarks }}</td>
                            <td>{{ item.status }}</td>
                            <!-- <td><router-link :to="'po/view/' + item.poid" class="nav-link">View</router-link></td> -->
                            <td><router-link to="cpo/view/" class="nav-link">View</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link to="cpo/add/" class="btn btn-primary" style="float: right;" tag="button">Add New PO</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var test = '';
export default {
    name: 'piCustomerPoList',
    data: function(){
        return {
            customerPoList : [
                { poid: '34234', date: '12/01/2020', remarks: 'Rejected due to quantity change', status: 'Rejected'},
                { poid: '111', date: '12/01/2020', remarks: 'Rejected due to price not accurate', status: 'Rejected'},
                { poid: '452', date: '12/01/2020', remarks: 'Quotation accepted by customer', status: 'Accepted'}
            ]
        }
    }
}
</script>

<style scoped>

</style>