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
    
    <span class="error" v-if="v$.email.$error">
                {{v$.email.$errors[0].$message}}
    </span>
    </div>
    <div class="ncontent"> 
    <Input v-bind:inputType="'text'" v-bind:id="'password'" v-bind:placeHolder="'password'" v-bind:error="v$.password.$error" v-model:data.sync="state.password" />
    <span class="error" v-if="v$.password.$error">
                {{v$.password.$errors[0].$message}}
     </span>
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


<script type='module' src='./Signin.js'></script>

<style scoped>
@import './Signin.scss'
</style>
