<template>
    <div id="supplierList">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">SUPPLIER</h1>
  <p class="lead">This is the listing of supplier</p>
  <p class="lead"> <a class="btn btn-primary btn-lg" href="#" role="button">Register New Supplier</a> </p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Company</th>
          <th scope="col">License</th>
          <th scope="col">Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in supplierItem" :key="index++">
          <th scope="row">{{ index }}</th>
          <td>{{ item.id }}</td>
          <td><router-link :to="'/supplier/' + item.id + '/view'" >{{ item.company }}</router-link></td>
          <td>{{ item.license }}</td>
          <td>{{ item.contact }}</td>
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
    name : "supplierList",
    data: function(){
        return {
            supplierItem : [
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
                { id: '12345', company: 'company a', license: 'abc1234', contact: '+60193737373', email: 'companyA@mail.com'},
            ]
        }
    }
}
</script>

<style scoped>

</style>