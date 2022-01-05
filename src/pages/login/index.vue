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
      welcomeMsg: '欢迎来到藏梦阁',
      loginForm: {
        userName: '',
        passwd: '',
      },
    };
  },
  methods: {
    startDream() {
      console.log('梦之旅开启');
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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
