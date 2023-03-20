<!-- <template>
  <div class="adduser">
    <h1>This is an Add User page</h1>
    <input type="text" placeholder="Firstname" v-model="User.firstName"/>
    <input type="text" placeholder="Lastname" v-model="User.lastName"/>
    <input type="email" placeholder="Email" v-model="User.email"/>
    <br>
    <button type="submit" @click="addToAPI">Submit</button>
   
  </div>
</template> -->
<template>
  <div class="adduser">
    <h2>Add a new Contact</h2>

    <div id="form">
    <label>Contact ID</label> 
    <input type="text" placeholder="ContactID will be created by Server" v-model="User.id" readonly/> <br>

    <label >First Name</label>
    <input type="text" placeholder="Firstname" required v-model="User.firstName"/><br>

    <label>Last Name</label>
    <input type="text" placeholder="Lastname" required v-model="User.lastName"/><br>

    <label>Mobile No</label>
    <input type="text" placeholder="Mobile" required v-model="User.mobileNo"/><br>

    <label>Email</label>
    <input type="email" placeholder="Email" v-model="User.email"/><br>

    <label>Facebook</label>
    <input type="text" placeholder="Facebook" v-model="User.facebook"/><br>

    <label>Image Url</label>
    <input type="text" placeholder="ImageUrl" required v-model="User.imageUrl"/><br><br>

    <div class="cardbuttons">
    <button class="btn btn-success" type="submit" @click="addToAPI">Save</button>
    <RouterLink to="/users">
    <button class="btn btn-danger">Close</button>
    </RouterLink>
    </div>
  
    </div>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  name: 'AddUser',
  data() {
    return {
      User: {
        firstName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        facebook: '',
        imageUrl: '',
        

      }
    }
  },
  methods: {
    addToAPI() {
      const token = this.$store.getters.getToken;
      console.log(token)
      console.log(this.User)
      axios.post('http://127.0.0.1:3000/users', this.User, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response)=>{
        console.log(response)
        this.$router.push('/users');
      })
      .catch((error)=>{
        console.log(error)
        alert(error.message)
        this.$router.push('/');
      })
    }
  }
}
</script>

<style>
 

  label{
    color: black;
    margin-right: 80%;
  }
  h2{
    margin-left: 25%;
  }
  #form {
    width: 50%;
    margin-left: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #f0f0f0;
			border-radius: 5px;
			padding: 20px;
			box-shadow: 0 2px 5px rgba(0,0,0,0.5);
		}
  
</style>
