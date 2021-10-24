import axios from 'axios'

const state = {
    notes: [

    ]
    // archived: [

    // ],
    // deleted: [

    // ]
}

const getters = {
    allNotes: (state) => state.notes,
    allArchived: (state) => state.archived,
    allDeleted: (state) => state.deleted
}

const actions = {
    async fetchNotes({ commit }){
        // const authToken = localStorage.getItem("authToken")
        // const response = await axios.get('http://localhost:2000/notes/getAllNotes', {
        //     headers:{
        //         'Authorization': `Bearer ${authToken}`
        //     }
        // })

        // console.log(response.data.data)
        // commit("setNotes", response.data.data)
        axios.get("http://localhost:3200/noteget").then((res)=>{
                   
                   
                   commit("setNotes", res.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
    },

    // async addNote({ commit }, items){
    //     const authToken = localStorage.getItem("authToken")
    //     try{
    //         const response = await axios.post('http://localhost:2000/notes/addNotes', items , {
    //             headers:{
    //                 'Authorization': `Bearer ${authToken}`
    //             }
    //         })

            
    //         console.log(response.data)
    //         commit("newNote", response.data.data)
    //     } catch(e) {
    //         console.log(e)
    //     }
    // },

    // async fetchArchivedNotes({ commit }){
    //     const authToken = localStorage.getItem("authToken")
    //     const response = await axios.get('http://localhost:2000/notes/getAllArchivedNotes', {
    //         headers:{
    //             'Authorization': `Bearer ${authToken}`
    //         }
    //     })

    //     commit("setArchivedNotes", response.data.data)
    // },

    // async fetchDeletedNotes({ commit }){
    //     const authToken = localStorage.getItem("authToken")
    //     const response = await axios.get('http://localhost:2000/notes/getAllTrashedNotes', {
    //         headers:{
    //             'Authorization': `Bearer ${authToken}`
    //         }
    //     })

    //     commit("setDeletedNotes", response.data.data)
    // },
}

const mutations = {
    setNotes: (state, notes) => (state.notes = notes),
    // newNote: (state, note) => state.notes.unshift(note),
    // setArchivedNotes: (state, archived) => (state.archived = archived),
    // setDeletedNotes: (state, deleted) => (state.deleted = deleted)
}

export default {
    state,
    getters,
    actions,
    mutations
};