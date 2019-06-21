<template lang="html">

<v-container>
  <v-layout>
    <v-flex xs12 md8 offset-sm2>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>    
          <v-container>     
            <FileUploaderParent />          
            <v-layout >
              <v-flex xs12 sm6>
                <v-text-field v-model="name" :counter="30" label="Name" required></v-text-field>
              </v-flex>

              <v-flex xs12 sm6>
                <v-text-field v-model="phone" :counter="15" label="Phone" required></v-text-field>    
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm6 >
                <v-text-field  v-model="personalEmail" :rules="emailRules" label="Personal E-mail" required ></v-text-field>
              </v-flex>

              <v-flex xs12 sm6>
                <v-text-field v-model="madEmail" label="MAD E-mail" disabled ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm6>
                <v-text-field label="Address" v-model="address" required></v-text-field>
              </v-flex> 
              
              <v-flex xs12 sm6>
                <v-select :items="genderItems" label="Gender" v-model="gender" ></v-select>
              </v-flex>
            </v-layout>
          
            <v-layout>
              <v-flex xs12 sm6>
                <v-text-field v-model="password" :append-icon="show ? 'visibility' : 'visibility_off'" :rules="[rules.required, rules.min]"
                  :type="show ? 'text' : 'password'" name="password" label="Enter Password" hint="At least 8 characters" counter
                  @click:append="show = !show" ref="password" v-validate="'required'" 
                  :error-messages="errors.collect('password')"        
                  data-vv-name="password" required
                ></v-text-field>
              </v-flex>
              

              <v-flex xs12 sm6>
                <v-text-field v-model="rePassword" :append-icon="show1 ? 'visibility' : 'visibility_off'" :rules="[rules.required, rules.min]"      
                  :type="show1 ? 'text' : 'password'" name="input-10-1" label="Re-enter Password" hint="At least 8 characters" counter
                  @click:append="show1 = !show1" v-validate="'required|confirmed:password'" 
                  :error-messages="errors.collect('rePassword')"                          
                  data-vv-name="rePassword" required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex text-xs-center  sm6 >
                <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" lazy transition="scale-transition" offset-y 
                  full-width min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="date" label="Date Of Birth" prepend-icon="event" readonly v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-flex>         
            </v-layout>

            <div class="text-xs-right">         
                <v-btn :disabled="!valid" color="pink white--text" @click="submit">Save </v-btn>
                <!-- <v-btn color="error" @click="reset">Reset</v-btn> -->
            </div>
            </v-container>
          </v-form> 
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="js">
import FileUploaderParent from './FileUploaderParent'
import axios from 'axios'

  export default  {
    name: 'profile',
    props: [],
    components: {
      FileUploaderParent
    },    
    data() {
      return {
        valid: true,
        name: '',
        address: '',
        personalEmail: '',
        madEmail: '',        
        password: '',
        genderItems: ['male', 'female'],
        gender: '',
        phone: '',
        date: new Date().toISOString().substr(0, 10),
        rePassword: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        menu: false,
        show: false,
        show1: false,
        title: "Image Upload",
        dialog: false,
        imageName: '',
        imageUrl: '',
        imageFile: ''
      }
    },
    methods: {
      pickFile() {
        this.$refs.image.click()
      },	      	
      onFilePicked(e) {
        const files = e.target.files
        if(files[0] !== undefined) {
          this.imageName = files[0].name
          if(this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } 
        else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      },
      submit() {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }

        axios({          
          method: 'POST',
          url: "http://makeadiff.in/api/v1/users/142766",
          headers: {
            'Content-Type': 'application/json'               
          },
          params: {
            name: this.name,
            email: this.email,
            address: this.address,
            sex: this.gender,
            phone: this.phone,
            password: this.password
          },
          auth: {
             username: 'data.simulation@makeadiff.in',
              password: 'pass'
          }            
        })      
        .
        then(response => {
          // eslint-disable-next-line
          console.log(response)
        })
      },

      reset() {
        this.$refs.form.reset()
      },
    },
    mounted() {
      // console.log(axios)
      axios.get('http://makeadiff.in/api/v1/users/142766', {
        headers: {
          'Content-Type': 'application/json'               
        },
        auth: {
          username: 'data.simulation@makeadiff.in',
          password: 'pass'
        }    
      })
        .then(response => {
          // console.log(response.data.data.users)
          this.name = response.data.data.users.name
          this.address = response.data.data.users.address
          this.personalEmail = response.data.data.users.email
          this.date = response.data.data.users.birthday
          this.phone = response.data.data.users.phone  
          this.gender = response.data.data.users.sex == 'm'? 'male': 'female'

          
          
          
          
      });    
    },    
    computed: {

    }
}
</script>

<style scoped >
  .profile {

  }
</style>



