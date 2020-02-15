<template>
    <div id="settingLanding" class="content-margin-top">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-left">
            <a class="navbar-brand" href="#">ADMIN DASHBOARD</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link :to="item.url" tag="li" active-class="active" exact v-for="(item, index) in items" :key="index"><a class="nav-link">{{ item.title }}</a></router-link>
                </ul>
            </div>
        </nav>

        <div class="settingBody bg-light">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name : "settingLanding",
    data : function(){
        return {
        items : [
            { title: 'MAIN', url: '/setting' },
            { title: 'METADATA', url: '/setting/metadata' },
            { title: 'USER', url: '/setting/user' }
        ],
        selectedLink : 'Main'
        }
    }
}
</script>

<style scoped>

</style>