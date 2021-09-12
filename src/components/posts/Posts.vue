<template>
    <div class="feed">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- 展示评论表单 -->
                    <PostForm
                            @update="getPosts"
                    />
                    <!-- 展示评论内容 -->
                    <PostFeed
                            v-for="post in posts"
                            :key="post._id"
                            :post="post"
                            @update="getPosts"
                            :showAction=true
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PostForm from "./PostForm";
    import PostFeed from "./PostFeed";
    export default {
        name: "Posts",
        data(){
            return{
                posts:[],
                errors:{}
            }
        },
        beforeRouteEnter(to,from,next){
            next(vm=>{
                vm.getPosts();
            })
        },
        components:{
            PostForm,
            PostFeed
        },
        methods:{
            getPosts(){
                this.$axios.get("/api/post")
                .then(res=>{
                    this.posts=res.data;
                }).catch(err=>{
                    this.errors=err.reachable.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>