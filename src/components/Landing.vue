<template>
    <div class="landing">
        <div class="dark-overlay landing-inner text-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="display-3 mb-4">社交管理系统</h1>
                        <p class="lead">基于VUE+Express的社交系统，包括个人模块，留言点赞，登录注册</p>
                        <hr>
                        <router-link v-show="!isLogin" to="/register" class="btn btn-lg btn-info mr-2">注册</router-link>
                        <router-link v-show="!isLogin" to="/login" class="btn btn-lg btn-light text-dark">登录</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        computed:{
            isLogin(){
                if(this.$store.getters.isAuthenticated){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }

    .landing {
        position: relative;
        background: url('../assets/background.jpg') no-repeat;
        background-size: cover;
        background-position: center;
        height: 83.2vh;
        margin-top: -24px;
        margin-bottom: -50px;
    }

    .landing-inner {
        padding-top: 80px;
    }

    .dark-overlay {
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .card-form {
        opacity: 0.9;
    }

    .latest-profiles-img {
        width: 40px;
        height: 40px;
    }

    .form-control::placeholder {
        color: #bbb !important;
    }
</style>