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
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Password'" v-bind:error="false" />
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Confirm'" v-bind:error="false" />
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
<style scoped>
@import './reset.scss'
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