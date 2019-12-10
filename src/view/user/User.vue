<template >
  <div class="container">
    <div class="row">
      <div class="col-10 mx-auto">
        <div class="media border p-3 mt-5">
          <img
            src="https://scontent.fhan11-1.fna.fbcdn.net/v/t1.0-1/p320x320/26113873_1988347458083530_1429125041908949849_n.jpg?_nc_cat=101&_nc_ohc=JSsqA4k7IqIAQnsb6j3cKY2lk9DEs3PaAvB8o3ftoLA1cbta8XZdGBwBw&_nc_ht=scontent.fhan11-1.fna&oh=04fdabf92ffe9e32c0bdb368ac2188dd&oe=5E7A6E40"
            alt="John Doe"
            class="mr-3 mt-3 rounded-circle"
            style="width:60px;"
          />
          <div class="media-body">
            <h4>
              {{userInfo.fullName}}
              <small>
                <i>{{userInfo.initDate}}</i>
              </small>
            </h4>
            <p>{{userInfo.email}}</p>
            <button class="btn btn-info" @click="signOutUser()">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "user",
  computed: {
    ...mapGetters(["userInfo"])
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["signOut"]),
    signOutUser() {
      this.signOut();
      this.$router.push('/')
    }
  }
};
</script>
<style lang="">
</style>