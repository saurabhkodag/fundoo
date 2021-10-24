<template>
 <div class="infoblock">
         
     <div> 
         
          <div class="eachblock" :style="{backgroundColor:bgColor}"  >
          <!-- <div class="eachblock" :style="{backgroundColor:objj.color}" @click="changeText('fixcolor','fixtitle','fixdescription',objj.color,objj.title,objj.description)" > -->
              
         <div class="info_title" >
         {{content_title}}
        
         </div>  
          <div class="info_mid">
          {{content_main}}
          </div>
          
         <div class="info_down"  >
             <div v-if="disp"  @mouseover="this.disp=true" @mouseleave="this.disp=false" class="palette">
              <div class="one">
              <div class="p_white"  @click="changeColor('test',note_id ,'#fff')"></div>
              <div class="p_teal" @click="changeColor('test',note_id ,'#ccff90')"></div>
              <div class="p_brown" @click="changeColor('test',note_id ,'#d7aefb ')"></div>
              </div>
              <div class="two">
              <div class="p_red" @click="changeColor('test',note_id ,'#f28b82 ')"></div>
              <div class="p_blue" @click="changeColor('test',note_id ,'#a7ffeb ')"></div>
              <div class="p_grey" @click="changeColor('test',note_id ,'#fdcfe8 ')"></div>
              </div>
              <div class="three">
              <div class="p_orange" @click="changeColor('test',note_id ,'#fbbc04 ')"></div>
              <div class="p_darkblue" @click="changeColor('test',note_id ,'#cbf0f8 ')"></div>
              <div class="new1" @click="changeColor('test',note_id ,'#e6c9a8')"></div>
              </div>
              <div class="four">
              <div class="p_yellow" @click="changeColor('test',note_id ,'#fff475')"></div>
              <div class="p_purple" @click="changeColor('test',note_id ,'#aecbfa')"></div>
              <div class="new2" @click="changeColor('test',note_id ,'#e8eaed')"></div>
              </div>
              
            </div>
              <svg xmlns="http://www.w3.org/2000/svg"  @click="changeText('fixcolor','fixtitle','fixdescription','fixid',this.bgColor,this.content_title,this.content_main, this.note_id)" height="24px" viewBox="0 0 24 24"  width="18px" fill="grey"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5zM13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"  width="18px" fill="grey"><path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" @mouseover="this.disp=true"  height="24px" viewBox="0 0 24 24"  width="18px" fill="grey"><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 0 24 24"  width="18px" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg"  @click="archive('test',note_id)"  height="24px" viewBox="0 0 24 24"  width="18px" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" @click="ddelete('test',note_id)" height="24px" viewBox="0 0 24 24"  width="18px" fill="grey"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </div>
        </div>
      </div>
      </div>




   
      <notepop v-if="this.getit" @eventname="updateparent" :id="this.uid" :colorr="this.ucolor" :titler="this.utitle" :descriptionr="this.udes" />
 
    
</template>
<script>
import useValidate from '@vuelidate/core'
import { required ,email,minLength,sameAs,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import axios from "axios";
import notepop from '@/components/notepopup/notepop.vue';
import { mapActions } from 'vuex';
// import axiosclass from '@/service/axiosservice.js'
// import Input from '@/components/Input/TextInput.vue';
// import Texts from '@/components/text/text.vue'
export default{
    props:{
        content_title: String,
        content_main: String,
        note_id: String,
        bgColor: String,
    },
    mounted(){
        this.disp=false
    },
    data(){
        return{
        response:"",
        ids:"",
        disp:false,
        ucolor:"",
        utitle:"",
        udes:"",
        uid:"",
        getit:false
        }
    },
    // created() {
        
    //     // let newdata={
    //     //             password:this.state.confirm,
                    
    //     //         };
    //             axios.get("http://localhost:3200/noteget").then((res)=>{
                   
    //                this.response=res.data;
    //                console.log(this.response)
    //             })
    //             .catch((err)=>{
    //                 console.log(err);
    //             })
    // },
    components:{
       
        // Texts,
        notepop,
        
    },
     setup(){
        const state=reactive({
            fname:'',
            lname:'',
            email:'',
            password:{
                password:'',
                confirm:'',
            },
        })
        const mustBeLearnVue=(value)=>value.includes('learnvue')
        const rules = computed(()=>{
            return {
                fname:{required},
                lname:{required},
                email:{
                required,
                email,
            mustBeLearnVue:helpers.withMessage(
                'Must be learnvue',
                mustBeLearnVue
            ),
                },
                password:{
                password:{required , minLength:minLength(6)},
                confirm:{required , sameAs:sameAs(state.password.password)
                },
            },
            }
        })
        const v$=useValidate(rules,state)
        return {
            state,
            v$,
        }
    },
    
    methods:{
        ...mapActions(['fetchNotes']),
        updateparent() {
        this.getit = false;
         },
       ddelete(prop,val){
            const headers = {
             'Content-Type': 'application/json',
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNkZGE5NDVhN2Q3ZTQ0ZjE5NTNjMTkiLCJpYXQiOjE2MzE2MjEwNDR9.VrFo4YaxeSSnDUl7xV4d-ZsXPRQdmdTgQ4rJf5PhbKc'
            }
            this[prop]=val;
            console.log(this.test);
          axios.post(`http://localhost:3200/notedelete/${this.test}`,{headers:headers}).then((res)=>{
                    console.log(res);
                    this.fetchNotes();
                })
                .catch((err)=>{
                    console.log(err);
                })
        },
        archive(prop,val){
            const headers = {
             'Content-Type': 'application/json',
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNkZGE5NDVhN2Q3ZTQ0ZjE5NTNjMTkiLCJpYXQiOjE2MzE2MjEwNDR9.VrFo4YaxeSSnDUl7xV4d-ZsXPRQdmdTgQ4rJf5PhbKc'
            }
            this[prop]=val;
            console.log(this.test);
          axios.post(`http://localhost:3200/noteArchived/${this.test}`,{headers:headers}).then((res)=>{
                    console.log(res);
                    this.fetchNotes();
                })
                .catch((err)=>{
                    console.log(err);
                })
        },
        changeColor(prop,val,ccolor){
            const headers = {
             'Content-Type': 'application/json',
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNkZGE5NDVhN2Q3ZTQ0ZjE5NTNjMTkiLCJpYXQiOjE2MzE2MjEwNDR9.VrFo4YaxeSSnDUl7xV4d-ZsXPRQdmdTgQ4rJf5PhbKc'
            }
            let data={
                color:ccolor,
            }
            this[prop]=val;
            console.log(this.test);
          axios.post(`http://localhost:3200/noteUpdate/${this.test}`,data,{headers:headers}).then((res)=>{
                    console.log(res);
                    this.fetchNotes();
                })
                .catch((err)=>{
                    console.log(err);
                })
        },
        changeText(prop1,prop2,prop3,prop4,val1,val2,val3,val4){
            
            
            this[prop1]=val1;
            this[prop2]=val2;
            this[prop3]=val3;
            this[prop4]=val4;
            this.ucolor=val1;
            this.utitle=val2;
            this.udes=val3;
            this.uid=val4;
            
            this.getit=true;
            console.log(this.ucolor);
            console.log(this.utitle);
            console.log(this.udes);
            // console.log(this.getit);
            console.log(this.uid);
        },
        submitForm(){
        //     this.v$.$validate()
        //    let data={
        //             email:this.state.email,
                    
        //         };
        //    const urls="/reset/"+this.$route.params.token;
        //     axiosclass.operation(data,urls); 
            this.v$.$validate()
            // if(!this.v$.$error){
                let newdata={
                    password:this.state.confirm,
                    
                };
                axios.get("http://localhost:3200/noteget",newdata).then((res)=>{
                   
                   this.response=res.data;
                
                   console.log(this.response)
                })
                .catch((err)=>{
                    console.log(err);
                })
            
            // }
            
        }
    }
}
</script>
<style lang="sass" scoped>
@import './getvue.scss'
</style>>


