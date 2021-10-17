<template>
<div class="fmain_signin">
<div class="fcontainer_lspace">
        </div>
    <div class="fsignin_main">
    <div class="fcontent_logoss">
    <img class="flogoss" src="@/assets/fundoo.png">
    </div>

    <Texts v-bind:classes="'fhead'" v-bind:textss="'Forget Password '"/>     

    <Texts v-bind:classes="'ffundoh'" v-bind:textss="'Enter your phone number or recovery email'"/>
    <div class="fcontent"> 
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Email or phone'" v-bind:error="v$.email.$error" v-model:data.sync="state.email" />
    <span class="error" v-if="v$.email.$error">
                {{v$.email.$errors[0].$message}}
    </span>
    </div>
            
    <div class="fbt">
            
            <button class="fnext" @click="submitForm">Next</button>
    </div>
    </div>
    <div class="fcontainer_rspace">

        </div>
</div>
</template>
<style scoped>
@import './forget.scss'
</style>
<script>
import useValidate from '@vuelidate/core'
import { required ,email,minLength,sameAs,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import Input from '@/components/Input/TextInput.vue';
import Texts from '@/components/text/text.vue';
import axios from "axios";
export default{
    
    components:{
        Input,
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
                required:helpers.withMessage("Enter Email",required),
                email,
            mustBeLearnVue:helpers.withMessage(
                'Must be learnvue',
                mustBeLearnVue
            ),
                },
                password:{
                password:{required:helpers.withMessage("Enter Password",required) ,
                 minLength:helpers.withMessage("Min length of 6 required",minLength(6))},
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
            
            this.v$.$validate()
            // if(!this.v$.$error){
                let data={
                    email:this.state.email
                    
                };
                console.log(this.state.email);
                axios.post("http://localhost:3200/reset",data).then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })

        }
    }
}
</script>