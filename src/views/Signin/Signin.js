
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
            
            
            console.log(this.state.email);
            
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

