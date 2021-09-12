<template>
  <div class="create-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
          <h1 class="display-4 text-center">创建个人资料</h1>
          <p class="lead text-center">填写您的个人资料, 让我们更多的了解你!</p>
          <small class="d-block pb-3">* 表示必填项</small>
        </div>
      </div>
      <!--form表单-->
      <form @submit.prevent="submit">
        <TextField
          type="text"
          name="handle"
          placeholder="* Profile handle"
          v-model="msgInfo.handle"
          :error="errors.handle"
          info="此处的handle是在后端接口中需要用来查询数据的, 通常是写你email的名字"
        />
        <SelectList
          name="status"
          :error="errors.status"
          v-model="msgInfo.status"
          :options="options"
          info="请告知我们您目前所从事的岗位"
        />

        <TextField
          type="text"
          name="company"
          placeholder="公司"
          v-model="msgInfo.company"
          :error="errors.company"
          info="可以是你自己的公司或者是你的在职公司"
        />

        <TextField
          type="text"
          name="website"
          placeholder="网址"
          v-model="msgInfo.website"
          :error="errors.website"
          info="你公司网址或者是你在职公司网址"
        />

        <TextField
          type="text"
          name="location"
          placeholder="位置"
          v-model="msgInfo.location"
          :error="errors.location"
          info="你所在的城市及所在区 (例如. 北京市昌平区)"
        />

        <TextField
          type="text"
          name="skill"
          placeholder="* 编程语言技能"
          v-model="msgInfo.skill"
          :error="errors.skill"
          info="请使用逗号隔开你所掌握的语言 (例如: HTML,CSS,JavaScript,PHP)"
        />

        <TextField
          type="text"
          name="githubusername"
          placeholder="Github 用户名"
          v-model="msgInfo.githubusername"
          :error="errors.githubusername"
          info="如果你希望将你的项目分享给大家, 可以填写你的github用户名"
        />

        <TextArea
          placeholder="自我介绍"
          name="bio"
          v-model="msgInfo.bio"
          :error="errors.bio"
          info="简单介绍一下自己"
        />

        <div class="mb-3">
          <button
            type="button"
            class="btn btn-light"
            @click="displaySocialInputs = !displaySocialInputs"
          >
            添加社交账号
          </button>
          <span class="text-muted">选项</span>
        </div>

        <div v-show="displaySocialInputs">
          <InputGroup
            placeholder="微信公众号"
            name="wechat"
            v-model="msgInfo.wechat"
            :error="errors.wechat"
            icon="fab fa-weixin"
          />
          <InputGroup
            placeholder="qq"
            name="qq"
            v-model="msgInfo.qq"
            :error="errors.qq"
            icon="fab fa-qq"
          />
        </div>
        <input type="submit" class="btn btn-info btn-block mt-4" />
      </form>
    </div>
  </div>
</template>

<script>
import TextField from "./common/TextFieldGroup";
import InputGroup from "./common/InputGroup";
import SelectList from "./common/SelectListGroup";
import TextArea from "./common/TextAreaGroup";
export default {
  name: "createProfile",
  data() {
    return {
      msgInfo: {
        handle: "",
        company: "",
        website: "",
        location: "",
        status: "请选择您的职业",
        skill: "",
        githubusername: "",
        bio: "",
        wechat: "",
        qq: "",
      },
      errors: {},
      displaySocialInputs: false,
      options: [
        { label: "0", value: "请选择您的职业" },
        { label: "Junior Developer", value: "前端初级工程师" },
        { label: "Senior Developer", value: "前端中级工程师" },
        { label: "High Developer", value: "前端高级工程师" },
        { label: "Manager", value: "前端管理" },
        { label: "Backend Developer", value: "后端开发" },
        { label: "Test Developer", value: "测试工程师" },
        { label: "Other", value: "其他" },
      ],
    };
  },
  components: {
    InputGroup,
    TextField,
    SelectList,
    TextArea,
  },
  methods: {
    submit() {
      this.$axios
        .post("/api/profile", this.msgInfo)
        .then((res) => {
          this.errors = {};
          this.$store.dispatch("setProfile", res.data);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
  },
};
</script>

<style scoped>
</style>