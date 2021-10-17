
import useValidate from '@vuelidate/core'
import { required ,email,minLength,helpers} from '@vuelidate/validators'
import {reactive,computed} from 'vue'
import Input from '@/components/Input/TextInput.vue';
import Texts from '@/components/text/text.vue';
import axios from "axios";
// import axiosclass from '@/service/axiosservice.js'
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
                required: helpers.withMessage("Enter Email",required),
                email,
            mustBeLearnVue:helpers.withMessage(
                'Must be learnvue',
                mustBeLearnVue
            ),
                },
                password:{
                    required:helpers.withMessage("Enter Password",required) ,
                     minLength:helpers.withMessage("Enter atleast 6 letters ",minLength(6)) 
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
            
            console.log(this.state.email);
            if(!this.v$.$error){
            let data={
                    
                    email:this.state.email,
                    password:this.state.password,
                };
            
        axios.post("/login",data).then((res)=>{
                console.log(res);
                localStorage.setItem("token",res.data[0].token);
                this.$router.push({ name: "dashboard" });

         })
         .catch((err)=>{
             console.log(err);
         })
        }
    }
    }
}

