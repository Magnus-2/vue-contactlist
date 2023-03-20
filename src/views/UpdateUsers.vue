
<template>
  <div class="updateuser">
    <h1>Update User</h1>
    
    <form id="form">
      <label>Contact ID</label> 
      <input type="text"  readonly v-model="this.$route.params.userid"/> <br>

      <label >First Name</label>
      <input type="text" placeholder="Lastname" v-model="User.firstName"/><br>

      <label>Last Name</label>
      <input type="text" placeholder="Lastname" v-model="User.lastName"/><br>

      <label>Mobile No</label>
      <input type="text" placeholder="Mobile" v-model="User.mobileNo"/><br>

      <label>Email</label>
      <input type="email" placeholder="Email" v-model="User.email"/><br>

      <label>Facebook</label>
      <input type="text" placeholder="Facebook" v-model="User.facebook"/><br>

      <label>Image URL</label>
      <input type="text" placeholder="Image URL"  v-model="User.imageUrl"/><br><br>


      <div class="cardbuttons">
        <router-link to = "/users">
         <button class="btn btn-success" type="submit" @click="updateToAPI">Upadte</button>
      </router-link>
      <RouterLink to="/users">
      <button class="btn btn-danger">Close</button>
      </RouterLink>
    </div>
      
    
    </form>

  </div>
</template>
<script>

import axios from 'axios'
export default {
  name: 'UpdateUser',
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
    updateToAPI() {
      const token = this.$store.getters.getToken;
      console.log(this.User)
      axios.post('http://127.0.0.1:3000/users/'+this.$route.params.userid, this.User,{
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
        alert(error.message)
        this.$router.push('/');
      })
    }
  },
  mounted(){
    const token = this.$store.getters.getToken;
    axios.get('http://127.0.0.1:3000/users/'+this.$route.params.userid, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response)=>{
      console.log(response.data)
      this.User = response.data
    })
    .catch((error)=>{
      console.log(error)
      alert(error.message)
      this.$router.push('/');
    })
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
