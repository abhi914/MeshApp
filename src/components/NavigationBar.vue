<template>
  <div class="navigation-bar">
    <b-navbar toggleable="lg" type="dark" variant="light" fixed="top">
      <b-navbar-brand href="#">
        <img src="./../assets/mad_logo.png" alt="mad_logo" />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">        
          <b-button size="sm" variant="light">
            <img class="round" src = "../assets/static.jpeg"  alt="Profile" />
            <b-dropdown id="dropdown-1"  class="m-2" dropleft variant="light">
              <nav>
                <b-dropdown-item>  <router-link to="/profile">Profile</router-link></b-dropdown-item>
                <b-dropdown-item><a href="#">CPPI</a></b-dropdown-item>
                <b-dropdown-item><a href="#">Mad Cred</a></b-dropdown-item>              
                <b-dropdown-item><router-link to="/settings">Settings</router-link></b-dropdown-item>              
                <b-dropdown-item><router-link to="/logout">Logout!</router-link></b-dropdown-item>              
              </nav>
            </b-dropdown>
          </b-button>
       
      </b-navbar-nav>  
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      imageSetter: {
        blank: false, width: 50, height: 50, class: 'm1', 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navigation-bar {
    margin-bottom: 80px;
  }

  .round {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
  }
</style>
