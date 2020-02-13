<template>
<div id="testdata">
    <div class="container csMenuMargin">
        <div class="row">
          <div class="col-lg-12">
            <ul class="nav nav-tabs nav-fill">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piSupplierRfqAdd'">Add PO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piSupplierRfqView'">View PO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="selectedComponent = 'piSupplierRfqEdit'">Edit PO</a>
            </li>
          </ul>

          <component :is="selectedComponent"></component>

          </div>
        </div>
      </div>

</div>
</template>

<script>

/**project detail */
import Add from './supplierRfqAdd.vue'
import View from './supplierRfqView.vue'
import Edit from './supplierRfqEdit.vue'

export default {
  name : 'testdata',
  data(){
    return {
      // dummyAPI: [],
      selectedComponent: 'piSupplierRfqAdd'
    }
  },
  components: {
    piSupplierRfqAdd: Add,
    piSupplierRfqView: View,
    piSupplierRfqEdit: Edit
  }

}
</script>

<style scoped>
h1 {
  color: red;
}
.csMenuHeader {
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.356);
  padding-top: 30px;
}
.csMenuMargin {
  margin-top: -40px;
  margin-bottom: 50px;
}
.bg-grey {
      background-color: #e9ecef;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {  
    border-color: transparent;
    background: #343a40;
    color: white;
}
a {
  color: #343a40;
  font-weight: bold;
}
ul {
  margin-bottom: 30px;
}

</style>