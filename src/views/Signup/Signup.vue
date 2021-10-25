<template>
<div class="container">
    <div class="container_lspace">
        </div>
    <div class="signup_main">
        
        <div class="signup_left">
            <img class="logos" src="@/assets/fundoo.png">
            <div class="head">Create your Google Account</div>
            <div class="m_height">
            <div class="names">
            <Input v-bind:inputType="'text'" v-bind:id="'fname'" v-bind:placeHolder="'First Name'" v-bind:error="v$.fname.$error" v-model:data.sync="state.fname"/>
            <Input v-bind:inputType="'text'" v-bind:id="'Last Name'" v-bind:placeHolder="'Last Name'" v-bind:error="v$.lname.$error" v-model:data.sync="state.lname" />
            </div>
            <span class="error" style="padding:5%" v-if="v$.fname.$error">
                {{v$.fname.$errors[0].$message}}
            </span>
            </div>
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
            <Input v-bind:inputType="'password'"  v-model:data.sync="state.password.confirm" />
            </div>
            <!-- <span class="error" v-if="v$.password.password.$error">
                {{v$.password.password.$errors[0].$message}}
            </span>
            <span class="error" v-if="v$.password.confirm.$error">
                {{v$.password.confirm.$errors[0].$message}}
            </span> -->
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
<script type='module' src='./Signup.js'></script>


<style scoped>
  @import './Signup.scss';
</style>