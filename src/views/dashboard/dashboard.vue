<template>
    <headerr/>
    <div class="content-div">
    <sidebar/>
    <div class="content_right">
    <searchn/>
    <div class="content_right_notes">
    <notes/>
    </div>
    </div>
    </div>
</template>
<script>

import headerr from '@/components/header/header.vue'
import sidebar from '@/components/SideNavigation/SideNavigation.vue'
import searchn from '@/components/notes_search/search.vue';
import notes from '@/components/getnotes/get.vue'
export default {
    components: {
        headerr,
        sidebar,
        searchn,
        notes,
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