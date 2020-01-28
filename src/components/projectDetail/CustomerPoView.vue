<template>
    <div id="piCustomerPoView">
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
                            <td>{{ item.option }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-primary" style="float: right;" type="submit">Add New PO</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piCustomerPoView',
    data: function(){
        return {
            customerPoList : [
                { date: '12/01/2020', remarks: 'Rejected due to quantity change', status: 'Rejected', option: 'View'},
                { date: '12/01/2020', remarks: 'Rejected due to price not accurate', status: 'Rejected', option: 'View'},
                { date: '12/01/2020', remarks: 'Quotation accepted by customer', status: 'Accepted', option: 'View'}
            ]
        }
    }
}
</script>

<style scoped>

</style>