<template>
    <div>
        <h4 class="mb-2">个人履历</h4>
        <table class="table">
            <thead>
            <tr>
                <th>公司</th>
                <th>职位</th>
                <th>年份</th>
                <th />
            </tr>
            </thead>
            <tbody>
            <tr v-for="exp in experience" :key="exp._id">
                <td>{{exp.company}}</td>
                <td>{{exp.title}}</td>
                <td>
                    {{exp.from}} ~ {{exp.to}}
                </td>
                <td>
                    <button @click="deleteClick(exp._id)" class="btn btn-danger">
                        删除
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Experience",
        data(){
            return{

            }
        },
        props:{
            experience: Array
        },
        methods:{
            deleteClick(id){
                //如果在这里还需要刷新 子组件操作父组件的数据
                // this.$axios
                //     .delete(`api/profile/experience/${id}`)
                //     .then(res => {
                //         console.log(res.data);
                //  会报错，vue2.0以上不给子组件操作父组件的东西
                //         this.experience = res.data.experience;
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     });

                //注册父组件的方法
                this.$emit('deleteExperience',id);
            }
        }
    }
</script>

<style scoped>

</style>