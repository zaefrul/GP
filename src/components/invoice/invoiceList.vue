<template>
    <div id="invoiceList" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">INVOICE LIST</h1>
  <p class="lead">This is the listing of invoice</p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Invoice No</th>
          <th scope="col">Register Date</th>
          <th scope="col">Invoice Date</th>
          <th scope="col">Customer</th>
          <th scope="col">Price</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in invoiceItem" :key="index++">
          <th scope="row">{{ index }}</th>
          <td>{{ item.iid }}</td>
          <td>{{ item.rdate }}</td>
          <td>{{ item.idate }}</td>
          <td><router-link :to="'/project-detail/' + item.pid">{{ item.title }}</router-link></td>
          <td>{{ item.price }}</td>
          <td><router-link :to="'invoice/view/' + item.iid">View invoice</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">
    <nav aria-label="..." style="margin: auto;">
      <ul class="pagination">
        <li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a> </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page"> <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
      </ul>
    </nav>
  </div>

</div>

    </div>
</template>

<script>
export default {
    name : "invoiceList",
    data: function(){
        return {
            invoiceItem : [
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' },
                { pid: 'NCC10024115', iid: 'IN10024115', title: 'Bersatu Teguh Construction Sdn. Bhd.', price: '9999.99', rdate: '12/12/2019', idate: '20/01/2020' }
            ]
        }
    }
}
</script>

<style scoped>

</style>