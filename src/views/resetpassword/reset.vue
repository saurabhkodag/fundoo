<template>
<div class="rmain_signin">
<div class="rcontainer_lspace">
        </div>
    <div class="rsignin_main">
    <div class="rcontent_logoss">
    <img class="rlogoss" src="@/assets/fundoo.png">
    </div>
 
    <Texts v-bind:classes="'nhead'" v-bind:textss="'Reset Password'"/>
    <div class="rcontent"> 
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Password'"  v-bind:error="v$.password.password.$error" v-model:data="state.password.password" />
     <span class="error" v-if="v$.password.password.$error">
                {{v$.password.password.$errors[0].$message}}
            </span>
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Confirm'" v-bind:error="v$.password.confirm.$error" v-model:data="state.password.confirm"/>
    <span class="error" v-if="v$.password.confirm.$error">
                {{v$.password.confirm.$errors[0].$message}}
            </span>
    </div>
    
    <div class="rbt">
    <a href="signin">Sign in instead</a>  
    <button class="rnext" @click="submitForm">Next</button>
    </div>
    </div>
    <div class="rcontainer_rspace">

        </div>
</div>
</template>
<!--<script type='module' src='./reset.js'></script>-->

<script>

import useValidate from '@vuelidate/core'
import { required ,email,minLength,sameAs,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import axios from "axios";
import Input from '@/components/Input/TextInput.vue';
import Texts from '@/components/text/text.vue'
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
           
            this.v$.$validate()
            // if(!this.v$.$error){
                let data={
                    email:this.state.email,
                    
                };
                axios.post("/reset/"+this.$route.params.token,data).then((res)=>{
                    console.log(res);
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
@import './reset.scss'
</style>