<template>

<Texts/>
 <div class="infoblock">
    <div v-for="objj in this.response" :key="objj.id">      
     
          <div class="eachblock">
          {{objj.description}}
          </div>
      </div>
      </div>
    
</template>
<script>
import useValidate from '@vuelidate/core'
import { required ,email,minLength,sameAs,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import axios from "axios";
// import axiosclass from '@/service/axiosservice.js'
// import Input from '@/components/Input/TextInput.vue';
import Texts from '@/components/text/text.vue'
export default{
    data(){
        return{
        response:"yes",
        }
    },
    created() {
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
    },
    components:{
       
        Texts,
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
<style scoped>
@import './getvue.scss'
</style>
