<template>
    <div id="metadata">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">METADATA</h1>
  <p class="lead">This is the listing of metadata. Each of the item comes with the price history. Click on the history link to check for the price history</p>
  <p class="lead"> <a class="btn btn-primary btn-lg" href="#" role="button">Register New Item</a> </p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Desc</th>
          <th scope="col">Part</th>
          <th scope="col">Model</th>
          <th scope="col">Serial</th>
          <th scope="col">Drawing</th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">History</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in metadataItem" :key="index++">
          <th scope="row">{{ index }}</th>
          <td>{{ item.description }}</td>
          <td>{{ item.part }}</td>
          <td>{{ item.model }}</td>
          <td>{{ item.serial }}</td>
          <td>{{ item.drawing }}</td>
          <td>{{ item.item }}</td>
          <td>{{ item.price }}</td>
          <td><a href="#">{{ item.history }}</a></td>
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
    name : "metadata",
    data: function(){
        return {
            metadataItem : [
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'},
                { description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99', history: 'History'}
            ]
        }
    }
}
</script>

<style scoped>

</style>