<template>
<div class="main_signin">
<div class="container_lspace">
        </div>
    <div class="signup_main">
    <div class="head">Sign in </div>        
    <div class="fundoh">Use your Google Account</div> 
    <div class="content"> 
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Email or phone'" v-bind:error="false" />
    </div>
    <div class="content"> 
    <Input v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'password'" v-bind:error="false" />
    </div>

    <a class="link" href ="#">Forget Email?</a>
    <div class="fundohh">Not your computer? Use Guest mode to sign in privately.</div> 
    <a class="link" href ="#">Learn More</a>
    <div class="bt">
            <a href="signin">Create Account</a>
            <button class="next" @click="submitForm">Next</button>
    </div>
    </div>
    <div class="container_rspace">

        </div>
</div>
</template>
<style scoped>
@import './Signin.scss'
</style>
<script>
import Input from '@/components/Input/TextInput.vue';
export default{
    
    components:{
        Input
    },
}
</script>
