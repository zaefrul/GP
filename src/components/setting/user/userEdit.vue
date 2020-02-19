<template>
    <div id="userEdit" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">EDIT USER</h1>
</div>

        <div class="container" style="margin-bottom: 60px;margin-top: 30px;">
            <form action="">

                <div class="card">
                    <div class="card-body">

                        <!--New Customer List-->
                        <div class="newForm">
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputFullName">Full Name</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputFullName" class="form-control" placeholder="Full Name" v-model="inputFullName" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputEmail">Email Address</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputEmail" class="form-control" placeholder="Email Address" v-model="inputEmail" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPhoneNo">Phone Number</label></div>
                                <div class="form-group col-md-10">
                                    <input type="text" id="inputPhoneNo" class="form-control" placeholder="Phone Number" v-model="inputPhoneNo" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-2"><label for="inputPermission">Permission</label></div>
                                <div class="form-group col-md-10">
                                    <select class="form-control" id="inputPermission" v-model="inputPermission">
                                        <option value="Member">Member</option>
                                        <option value="Visitor">Visitor</option>
                                        <option value="Administrator">Administrator</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <router-link to="/setting/user" tag="button" class="btn btn-danger ml-3" style="float: right;" >Cancel</router-link>
                        <router-link to="/setting/user" tag="button" class="btn btn-primary ml-3" style="float: right;" >Save</router-link>
                        
                    </div>
                </div>

                
                
            </form>

        </div>
    </div>
</template>

<script>
export default {
    name: 'userEdit'
}
</script>

<style scoped>

</style>