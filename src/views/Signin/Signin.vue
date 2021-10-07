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
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Email or phone'" v-bind:error="false" />
    </div>
    <div class="ncontent"> 
    <Input v-bind:inputType="'password'" v-bind:id="'password'" v-bind:placeHolder="'password'" v-bind:error="false" />
    </div>

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
import Input from '@/components/Input/TextInput.vue';
import Texts from '@/components/text/text.vue'
export default{
    
    components:{
        Input,
        Texts,
    },
}
</script>
