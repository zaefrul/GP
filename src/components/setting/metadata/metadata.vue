<template>
    <div id="metadata" class="content-margin-top">

      <div class="jumbotron jumbotron-fluid text-center">
        <h1 class="display-4">METADATAs</h1>
        <p class="lead">This is the listing of metadata. Each of the item comes with the price history. Click on the history link to check for the price history</p>
        <p class="lead">
          <router-link to="metadata/add" tag="button" class="btn btn-primary" >Add New Metadata</router-link>
          </p>
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
                <td><a href="#" @click="clickHistory(item.mid)">History</a></td>
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

      <!--modal box-->
      <div class="metadataHistory" v-if="historyActive === true" @click="closeHistory()">
        <div class="popupBox">

            <div class="card">
              <h5 class="card-header">This is item name 
                <button type="button" class="btn btn-danger btn-sm" style="float: right;" @click="closeHistory()"><i class="fas fa-times"></i></button>
                <button type="button" class="btn btn-secondary btn-sm mr-2" style="float: right;" @click="closeHistory()"><i class="fas fa-pencil-alt"></i></button>
              </h5>
            </div>
            <div class="container historyList">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                        <tr>
                        <td>14 Jan 2020</td>
                        <td>RM9,999.99</td>
                        <td>updated from supplier</td>
                        </tr>
                    </tbody>
                </table>
              </div>

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
                { mid: '1', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '2', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '3', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '4', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '5', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '6', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '7', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '8', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '9', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '10', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '11', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
                { mid: '12', description: 'Item Description', part: 'Part No', model: 'Model No', serial: 'Serial No', drawing: 'Drawing No', item: 'Item No', price: '9001.99' },
            ],
            historyActive: false
        }
        
    },
    methods: {
      clickHistory(mid){
        this.historyActive = true;
        console.log(mid);
        console.log(this.historyActive)
      },
      closeHistory(){
        this.historyActive = false;
      }
    }
}
</script>

<style scoped>
#metadata {
  position: relative;
}
.popupBox {
    position: fixed;
    top: 60px;
    right: 0;
    height: 100vh;
    background: white;
    width: 500px;
    box-shadow: 0 0 50px #00000040;
    overflow: auto;
}
</style>