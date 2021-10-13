<template>
    <headerr/>
    <div class="content-div">
    <sidebar/>
    </div>
</template>
<script>

import headerr from '@/components/header/header.vue'
import sidebar from '@/components/SideNavigation/SideNavigation.vue'
// import sidebar from '@/components/sidebar/sidebar.vue'
export default {
    components: {
        headerr,
        sidebar
    },
    created(){
        if(localStorage.getItem("token")==undefined){
            this.$router.push( "signin");
        }
    }
}
</script>
<style scoped>
@import './dashboard.scss'
</style>