<template>
<div class="nmain_signin">
<div class="ncontainer_lspace">
        </div>
    <div class="nsignin_main">
    <div class="content_logoss">
    <img class="logoss" src="@/assets/fundoo.png">
    </div>
    
    <Texts v-bind:classes="'nhead'" v-bind:textss="'Sign in'"/>
 
    <Texts v-bind:classes="'nfundoh'" v-bind:textss="'Use your Google Account'"/>
    <div class="ncontent"> 
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Email or phone'" v-bind:error="v$.email.$error" v-model:data.sync="state.email" />
    </div>
    <span class="error" v-if="v$.email.$error">
                {{v$.email.$errors[0].$message}}
    </span>
    <div class="ncontent"> 
    <Input v-bind:inputType="'text'" v-bind:id="'password'" v-bind:placeHolder="'password'" v-bind:error="v$.password.$error" v-model:data.sync="state.password" />
    </div>
    <span class="error" v-if="v$.password.$error">
                {{v$.password.$errors[0].$message}}
    </span>
    <a class="nlink" href ="/forgetemail">Forget Email?</a>
    <div class="nfundohh">Not your computer? Use Guest mode to sign in privately.</div> 
    <a class="nlink" href ="#">Learn More</a>
    <div class="nbt">
            <a href="nsignin">Create Account</a>
            <button class="nnext" @click="submitForm">Next</button>
    </div>
    </div>
    <div class="ncontainer_rspace">

        </div>
</div>
</template>

<style scoped>
@import './Signin.scss'
</style>

<script>
import useValidate from '@vuelidate/core'
import { required ,email,minLength,helpers} from '@vuelidate/validators'
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
            email:'',
            password:'',
        })
        const mustBeLearnVue=(value)=>value.includes('learnvue')
        const rules = computed(()=>{
            return {
                email:{
                required,
                email,
            mustBeLearnVue:helpers.withMessage(
                'Must be learnvue',
                mustBeLearnVue
            ),
                },
                password:{required , minLength:minLength(6) },
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
            console.log(this.state.email);
            
            let data={
                    
                    email:this.state.email,
                    password:this.state.password,
                };
                axios.post("http://localhost:3200/login",data).then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    }
}
</script>
