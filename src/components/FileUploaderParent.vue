<template>
  <v-layout class="text-xs-center ">
    <v-flex>
      <image-input v-model="avatar">
        <div slot="activator">
          <v-avatar color = "primary" size="150px" v-ripple v-if="!avatar" class=" mb-3">
            <h1 class="white--text"><span>{{this.defaultAvatar}}</span></h1>
          </v-avatar>
          <v-avatar size="150px" v-ripple v-else class="mb-3">
            <img :src="avatar.imageURL" alt="avatar">
          </v-avatar>
        </div>
      </image-input>
      <v-slide-x-transition>
        <div v-if="avatar && saved == false">
          <!-- Stores the Image and changes the loader -->
          <v-btn  class="primary" @click="uploadImage" :loading="saving">Save Avatar</v-btn>
        </div>
      </v-slide-x-transition>
    </v-flex>
  </v-layout>
</template>

<script>
import ImageInput from './FileUploaderChild.vue'

export default {
  name: 'app',
  data () {
    return {
      defaultAvatar: '',
      avatar: null,
      saving: false,
      saved: false
    }
  },
  mounted() {
     this.$store.dispatch('getUserData').
    then(() => {
      let findAvatar = this.$store.getters.userData.name.split(" ")
      let createAvatar = ''
      for(let i = 0; i < findAvatar.length; i++) {
        createAvatar = createAvatar + findAvatar[i].slice(0,1)
      }
      this.defaultAvatar = createAvatar
    })
  },
  components: {
    ImageInput: ImageInput
  },
  watch:{
    avatar: {
      handler: function() {
        this.saved = false
      },
      deep: true
    }
  },
  methods: {
    uploadImage() {
      this.saving = true
      setTimeout(() => this.savedAvatar(), 1000)
    },
    savedAvatar() {
      this.saving = false
      this.saved = true
    }
  }
}
</script>

<style>

</style>