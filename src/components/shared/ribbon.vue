<template>
<div id="ribbon">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="././dist/img/gp-white-logo.png" alt="" width="230px">
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Welcome, System Admin
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Setting</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Sign Out</a>
        </div>
      </li>
    </ul>
  </div>
  
</nav>
</div>
</template>

<script>
export default {
    name: "ribbon"
}
</script>

<style>

</style>