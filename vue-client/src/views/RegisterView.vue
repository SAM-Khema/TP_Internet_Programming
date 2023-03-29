<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
  <div class="register">
    <div class="even">
        <div class="left">
            <img src="../assets/images/vue.png">
            <div class="content">
                <h1>Welcome</h1>
                <h4>Autentication App</h4>
                <div class="action">
                    <p> <RouterLink to="/login" style="color:black; text-decoration: none;">Login</RouterLink></p>
                    <p><RouterLink to="/register" style="color:rgb(68, 119, 68); cursor: pointer;color:black; text-decoration: none;">Register</RouterLink></p>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="container">
                <div class="text-content">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                </div>
                <hr>
                <div class="input-field">
                    <div class="input">
                        <label for="email">Email</label>
                        <input v-model="email" type="Email" placeholder="Enter your email">
                    </div>
                    <div class="input">
                        <label for="Username">Username</label>
                        <input v-model="username" type="Username" placeholder="Enter your Username">
                    </div>
                    <div class="input">
                        <label for="Firstname">Firstname</label>
                        <input v-model="firstname" type="text" placeholder="Enter your First Name">
                    </div>
                    <div class="input">
                        <label for="Lastname">Last Name</label>
                        <input v-model="lastname" type="text" placeholder="Enter your Last Name">
                    </div>
                    <div class="input">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" placeholder="Create your password">
                    </div>
                    <div class="div" style="display: flex; flex-direction: column; gap: 5px;">
                        <div>
                            <span>By creating an account you agree to our </span>
                        <span style="cursor: pointer; color: rgb(46, 46, 255);">Terms & Privacy.</span>
                        </div>
                        <button class="btnsignup" @click="signup">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style>
 *{
            margin: 0;
            box-sizing: border-box;
        }
        .left{
            margin: auto;
            justify-content: center;
        }
        .even{
            display: flex;
            width: 100vw;
            height: 100vh;
            gap: 10px;
        }
        .even > *{
            flex-basis: 100%;
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 0 20px;
        }
        .even img{
            width: 80px;
            height: 80px;
        }
        .text-content h1{
            font-family: Georgia, 'Times New Roman', Times, serif;
            font-weight: bold;
            text-align: center;
            font-size: larger;
        }
        .content{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .content h1{
            font-weight: 600;
            font-size: 40px;
            white-space: 5px;
            color: rgb(68, 119, 68);
        }
        .content h4{
            font-size: 400;
            white-space: 2px;
            font-size: 18px;
        }
        .content .action{
            display: flex;
            gap: 20px;
        }
        .right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0;
        }
        .right .container{
            display: flex;
            height: 80%;
            width: 100%;
            padding: 20px 10px;
            flex-direction: column;
            border: 1px solid #c1c1c1;
        }

        .right .container .text-content{
            width: 100%;
        }

        .right .container hr{
            margin-bottom: 20px;
            height: 1px;
            opacity: 0.2;
        }

        .right .container .btnsignup{
            height: 30px;
            width: 200px;
            background: rgb(68, 119, 68);
            color: #fff;
            border: none;
            border-radius: 20px;
        }

        .input-field{
            width: 100%;
            display: flex;
            flex-direction: column;
            background-color: aliceblue;
            gap: 20px;
        }
        .input{
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
        }
        .input input{
            width: 100%;
            height: 30px;
            padding: 0 10px;
        }
        
</style>
<script>
    import axios from 'axios'
    import router from '../router/index.js'
    export default{
        name: 'SignUp',
        data(){
            return{
                 email: '',
                 username: '',
                 firstname: '',
                 lastname: '',
                 password: ''
            }
           
        },
        methods: {
            async signup(){
                try {
                    let result = await axios.post("http://localhost:3000/register",{
                        email: this.email,
                        username: this.username,
                        firstname: this.firstname,
                        lastname: this.lastname,
                        password: this.password
                    })

                    if ( result.status=== 200){
                        alert("Register succesfully")
                        router.push('/login')
                    }else{
                        alert("Fails")
                    }

                } catch (error) {
                    console.log(error.message)
                }
            }
        }
    }
</script>
