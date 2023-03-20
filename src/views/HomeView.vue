<!-- <template>
  <main>
    <body>
      <div class="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
              <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="col-lg-12 login-title">Login Panel</div>

              <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                  <form id="login-form">
                    <div class="form-group">
                      <label class="form-control-label">USERNAME</label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        name="username"
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-control-label">PASSWORD</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                      />
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-6 login-btm login-text">
                        
                      </div>
                      <div class="col-lg-6 login-btm login-button">
                        <button type="submit" class="btn btn-outline-primary">
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </main>
</template> -->

<!-- <script>
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);
  });

  function submitForm(event) {
    event.preventDefault(); // Unterbindet das Standardverhalten des Formulars

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password)
    fetch("http://127.0.0.1:3000/api/login/", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "http://127.0.0.1:3000/users";
        } else {
          throw new Error("Login fehlgeschlagen");
        }
      })
      .catch((error) => alert(error.message));
  }

</script> -->


<template>
  <div class="login">
    <div id="form">
    <h1>Login</h1>
    <input type="text" placeholder="username" v-model="User.username" required/>
    <input type="password" placeholder="password" v-model="User.password" required/>
    <br>
    <button type="submit" @click="loginAPI">Login</button>
    </div>
  </div>
</template>
<!-- <template>
  <div class="about">  //muss an deine Route zum login angepasst werden 

    <form>
		<h1>Login</h1>
		<input type="email" placeholder="E-Mail-Adresse" required>
		<input type="password" placeholder="Passwort" required>
		<button type="submit">Login</button>
	  </form>
  </div> 

</template>-->

<script>

import axios from 'axios'
// import tokenComponent from './TokenComponent.vue'
export default {
  name: 'login',
  data() {
    return {
      User: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
  loginAPI() {
    console.log(this.User)
    axios.post('http://127.0.0.1:3000/api/login', this.User)
    .then((response)=>{
      console.log(response)
      if (response.headers['content-length'] > 100) {
        const token = response.data.token;
        console.log(token)
        this.$store.dispatch('setToken', token);
        axios.get('http://127.0.0.1:3000/users', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response)=>{
          console.log(response);
          // handle response
          //  window.location.href = "http://127.0.0.1:5173/users";
          this.$router.push('/users');
        })
        .catch((error)=>{
          console.log(error)
          // handle error
        });
      } else {
        throw new Error("Login fehlgeschlagen");
      }
    })
    .catch((error)=>{
      console.log(error)
      alert(error.message)
    })
  
    }

  }
}
</script>

<style>


.login{
    display: flex;
    justify-content: center;
    margin-top: 15%;
    margin-right: 20%;
  }

  #form{
    background-color: white;
			padding: 20px;
			border-radius: 5px;
			box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.15);
			text-align: center;
  }

  button{
    background-color: #4CAF50;
			color: white;
			padding: 10px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			width: 100%;
  }

  input{
    padding: 10px;
			margin: 10px;
			border-radius: 5px;
			border: none;
			width: 100%;
			box-sizing: border-box;
  }
  h1{
    color: black;
  }


</style>

