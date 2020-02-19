<template>
    <div id="settingLanding" class="content-margin-top">
        <nav class="navbar navbar-expand-md fixed-left settingBar">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link 
                    :to="item.url" 
                    tag="li" 
                    active-class="active" 
                    exact v-for="(item, index) in items" 
                    :key="index">
                    <a class="nav-link text-secondary">
                        <b>
                            <span class="">
                                <i :class="item.icon + ' settingMenuIcon'"></i>
                            </span> 
                            <span class="settingMenuTitle">{{ item.title }}</span>
                        </b>
                    </a>
                    </router-link>
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
            { title: 'MAIN', url: '/setting', icon: 'fas fa-home'},
            { title: 'METADATA', url: '/setting/metadata', icon: 'fab fa-slack-hash'},
            { title: 'USER', url: '/setting/user', icon: 'fas fa-user-friends'}
        ],
        selectedLink : 'Main'
        }
    }
}
</script>

<style scoped>
.settingBar {
    border-right: 1px solid #dedede;

}
.settingMenuIcon {
    width: 25px;
}
.settingMenuTitle {
    margin-left: 15px;
}
</style>