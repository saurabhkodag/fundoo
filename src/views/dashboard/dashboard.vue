<template>
    <headerr/>
    <div class="content-div">
    <sidebar/>
    <div class="content_right">
    <searchn/>
    <div class="content_right_notes">
    <notes v-for="note in allNotes" v-bind:bgColor="note.color" v-bind:note_id="note._id" v-bind:key="note._id" v-bind:id="note._id" v-bind:content_title="note.title" v-bind:content_main="note.description"/>
    </div>
    </div>
    </div>
</template>
<script>

import headerr from '@/components/header/header.vue'
import sidebar from '@/components/SideNavigation/SideNavigation.vue'
import searchn from '@/components/notes_search/search.vue';
import notes from '@/components/getnotes/get.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'Dashboard',
    components: {
        headerr,
        sidebar,
        searchn,
        notes,
    },
    methods:{
        ...mapActions(['fetchNotes']),
    },
    computed: mapGetters(['allNotes']),
    created(){
        if(localStorage.getItem("token")==undefined){
            this.$router.push( "signin");
        }
        this.fetchNotes();
    }
}
</script>
<style scoped>
@import './dashboard.scss'
</style>