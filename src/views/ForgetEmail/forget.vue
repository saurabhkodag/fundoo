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
    <Input v-bind:inputType="'text'" v-bind:id="'Email or phone'" v-bind:placeHolder="'Email or phone'" v-bind:error="false" />
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
import Input from '@/components/Input/TextInput.vue';
import Texts from '@/components/text/text.vue'
export default{
    
    components:{
        Input,
        Texts,
    },
}
</script>