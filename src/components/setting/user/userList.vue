<template>
    <div id="userList" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">USER</h1>
  <p class="lead">This is the listing of users</p>
  <p class="lead"> <a class="btn btn-primary btn-lg" href="#" role="button">Register New User</a> </p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Permission</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userItem" :key="index++">
          <th scope="row">{{ index }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.permission }}</td>
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
    name : "userList",
    data: function(){
        return {
            userItem : [
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'},
                { name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator'}
            ]
        }
    }
}
</script>

<style scoped>

</style>