<template>
  <div class="login-bg">
    <div>{{ welcomeMsg }}，</div>
    <el-button type="text" @click="startDream()">
      这里是梦启航的地方
      <i class="el-icon-position"></i>
    </el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      welcomeMsg: 'Hello World',
    };
  },
  methods: {
    async startDream() {
      this.$router.push('/home');
    },
  },
  mounted() {},
};
</script>
<style scoped>
.login-bg {
  background-size: 100% 100%;
  height: 600px;
  width: 100%;
  margin: auto;
}
</style>
