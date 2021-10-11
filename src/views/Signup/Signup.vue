<template>
<div class="container">
    <div class="container_lspace">
        </div>
    <div class="signup_main">
        
        <div class="signup_left">
            <img class="logos" src="@/assets/fundoo.png">
            <div class="head">Create your Google Account</div>
            <div class="names">
            <Input v-bind:inputType="'text'" v-bind:id="'fname'" v-bind:placeHolder="'First Name'" v-bind:error="v$.fname.$error" v-model:data.sync="state.fname"/>
            <Input v-bind:inputType="'text'" v-bind:id="'Last Name'" v-bind:placeHolder="'Last Name'" v-bind:error="v$.lname.$error" v-model:data.sync="state.lname" />
            </div>
            <span class="error" v-if="v$.fname.$error">
                {{v$.fname.$errors[0].$message}}
            </span>
            <div class="uname">
            <!-- <input type="text" class="uname" placeholder="Username" name="Username" v-model="state.email"> -->
            <Input v-bind:inputType="'text'" v-bind:id="'Username'" v-bind:placeHolder="'Username'" v-bind:error="v$.email.$error" v-model:data.sync="state.email" />
            </div>
            <span class="error" v-if="v$.email.$error">
                {{v$.email.$errors[0].$message}}
            </span>
            <div class="txt">You can use letters, numbers & periods</div>
             <div class="current">Use my current email address instead</div>
       
            <div class="password">
            <!-- <input type="text" class="Pass" placeholder="Password" name="Password" v-model="state.password.password"> -->
            <Input v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'Password'" v-bind:error="false" />
            <!-- <input type="text" class="Confirm" placeholder="Confirm" name="Confirm" v-model="state.password.confirm"> -->
            <Input v-bind:inputType="'password'" v-bind:id="'Confirm'" v-bind:placeHolder="'Confirm'" v-bind:error="v$.password.confirm.$error" v-model:data.sync="state.password.confirm" />
            </div>
            <span class="error" v-if="v$.password.password.$error">
                {{v$.password.password.$errors[0].$message}}
            </span>
            <span class="error" v-if="v$.password.confirm.$error">
                {{v$.password.confirm.$errors[0].$message}}
            </span>
            <div class="txt1">Use 8 or more characters with a mix of letters, numbers & symbols</div>
            <div class="ccbox">
           <input class="cbox" type="checkbox" id="spass" name="spass" value="spass"  style="zoom:1.5;">
            <label for="spass"> Show Password</label><br>
            </div>
            <div class="bt">
            <a href="signin">Sign in instead</a>
            <button class="next" @click="submitForm">Next</button>
            </div>
            </div>
            <div class="signup_right">
            
            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width="244" height="244" class="j9NuTc">
            <div class="caption">One account. All of Google working for you.</div>
        </div>
   
        
    </div>
    <div class="container_rspace">
        </div>
</div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required ,email,minLength,sameAs,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import axios from "axios";
import Input from '@/components/Input/TextInput.vue';
export default{
    
    components:{
        Input
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
            
                let data={
                    firstName:this.state.fname,
                    lastName:this.state.lname,
                    email:this.state.email,
                    service:"active",
                    password:this.state.password.confirm
                    
                };
                axios.post("http://localhost:3200/register",data).then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        
    }
}
}
</script>

<style scoped>
  @import './Signup.scss';
</style>