<template>
  <div id="app">
    <Navbar></Navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
    <!--    只有在请求的过程中才会出现-->
    <Loading v-show="loading"></Loading>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
import Footer from "./components/Footer";
import jwt_decode from "jwt-decode";
import Loading from "./components/common/Loading";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Loading,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
  created() {
    //即使刷新页面也是成功登陆
    //  判断localStorage.jwt是否存在  如存在进行decode解析
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);
      //获取当前时间
      const currentTime = Date.now();
      //检测是否过期
      if (decoded.exp < currentTime) {
        // this.$store.dispatch('setIsAuthenticated',false);
        // this.$store.dispatch('setUser',{});
        //清楚用户信息
        this.$store.dispatch("clearCurrentState");
        this.$router.push("/login");
      } else {
        this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decoded));
        this.$store.dispatch("setUser", decoded);
      }
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    },
  },
};
</script>

<style>
</style>
