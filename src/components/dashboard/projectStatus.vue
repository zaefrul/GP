<template>
    <div id="projectStatus">
        
      <div class="card">
        <h5 class="card-header">Project Status
          <router-link to="/projectAdd"><button type="button" class="btn btn-primary btn-sm" style="float: right;">Add New Project</button></router-link>
        </h5>
        <div class="card-body">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Customer</th>
                <th scope="col">Stage</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in projectStatusItem" :key="index++">
                <th scope="row">{{ index }}</th>
                <td>{{ item.date }}</td>
                <td><a href="#"><router-link :to="'/project-detail/' + item.pid">{{ item.company }}</router-link></a></td>
                <td>{{ item.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "projectStatus",
    data : function(){
        return {
        projectStatusItem : [
            { pid: '10', date: '12/10/2019', company: 'Bersatu Teguh Construction Sdn. Bhd.', status: 'Waiting for SOA' },
            { pid: '11', date: '14/10/2019', company: 'Bersatu Teguh Construction Sdn. Bhd.', status: 'Completed' },
            { pid: '12', date: '15/10/2019', company: 'Bersatu Teguh Construction Sdn. Bhd.', status: 'Pending LOA' },
            { pid: '13', date: '16/10/2019', company: 'Bersatu Teguh Construction Sdn. Bhd.', status: 'In Progress' }
        ]
        }
    }
}
</script>

<style>

</style>