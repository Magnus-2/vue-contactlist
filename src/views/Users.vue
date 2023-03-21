
<template>
    <div class="users">
        <div class="search-bar">
            <input class="searchfield" type="text" placeholder="Enter the name..." v-model="search">
                <!-- <RouterLink to="/users">
                    <button class="btn btn-secondary">Search</button>
                </RouterLink> -->

                <RouterLink to="addusers">
                    <button type="button" class="btn btn-info">+Add</button>
                </RouterLink>
            </div>
            <br>
                <br>

                    <div class="card-container">
                        <div class="card" v-for="auser in filterUsers" v-bind:key="auser.id">

                            <div class="bild-container">

                                <!--Hier muss noch die richtige Syntax hin um Link aus DB zu holen  -->
                                <img v-bind:src="auser.imageUrl" width="300" height="300" alt="pic"></div>

                                <p class="h2">{{auser.firstName}} {{auser.lastName}}</p>
                                <p>Mobile: {{auser.mobileNo}}</p>
                                <p>Email: {{auser.email}}</p>
                                <p>Facebook: {{auser.facebook}}</p>
                                <div class="cardbuttons">
                                    <router-link
                                        :to="{path: 'updateusers', name: 'UpdateUsers', params: {userid: auser._id}}">
                                        <button type="button" class="btn btn-primary">Edit</button>
                                    </router-link>
                                    <router-link to="/users">
                                        <button type="submit" @click="deleteUser(auser._id)" class="btn btn-danger">Delete</button>
                                    </router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                </template>


<script>
    import axios from 'axios'
    import Cookies from 'js-cookie'
    
    export default {
        name: 'Users',
        data() {
            return {search: '', Users: []}
        },
        mounted() {
            let token = this.$store.getters.getToken;
            if (!token) {
                token = this.$store.dispatch('setToken', token);
               
            }
            if (!token) {
                token = Cookies.get('token');
                this.$router.push('/');
                
            }
            // const token = this.$store.getters.getToken; console.log(token)
            axios
                .get('https://contact0724.as.r.appspot.com/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((response) => {
                    console.log(response.data)
                    this.Users = response.data
                })
                .catch((error) => {
                    console.log(error)
                    alert(error.message)
                    this.$router.push('/');
                })
            },
        computed: {
            filterUsers: function () {
                return this.Users.filter((user) => {
                        const result = user.firstName.match(this.search)
                        // console.log(result)
                        if(result == null){
                            return user.lastName.match(this.search)
                        }
                        else return result
                    })
            }
        },
        methods: {
            deleteUser(UserId) {
                const token = this.$store.getters.getToken;
                axios
                    .delete("https://contact0724.as.r.appspot.com/users/" + UserId, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then((response) => {
                        console.log('Delete User Id:' + UserId)

                        Cookies.set('token',token)

                    })
                    .catch((error) => {
                        console.log(error)
                        alert(error.message)
                        this.$router.push('/');
                    })
                    window.location.reload()

            }
        }
    }
</script>
<style > .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    color: black;
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .card {
        width: 100%;
    }
}

.searchfield {
    width: 70%;
    height: 35px;
}

.cardbuttons {
    display: flex;
    justify-content: center;
}


.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bild-container img {
    max-width: 100%;
    max-height: 100%;
}

#h2{
  font-size: large;
}


.search-bar {
    display: flex;
    align-items: center;
    
}

.searchfield {
    flex: 1;
    margin-right: 10px;
    border-style: solid;
}

.btn {
    margin-left: 10px;
}

.btn-info {
    background-color: orangered !important;
}
</style>