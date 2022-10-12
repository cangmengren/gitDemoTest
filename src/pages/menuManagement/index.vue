<template>
  <div>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="类型">
        <el-select v-model="formInline.type" placeholder="类型">
          <el-option label="中文" value="ZH"></el-option>
          <el-option label="英文" value="EN"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="ip">
        <el-input v-model="formInline.ip" placeholder="ip"></el-input>
      </el-form-item>
      <el-form-item label="端口">
        <el-input v-model="formInline.port" placeholder="端口"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="connect">连接</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="report-content">

    </div>
    <div class="response-content">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        ip: '',
        port: '',
        type: '',
      },
    };
  },
  methods: {
    connect() {
      console.log('submit!');
    },
  },
};
</script>
<style scoped>
.report-content, .response-content {
  height: 225px;
  border: solid 1px gray;
  margin: 10px 8px;
  border-radius: 8px;
}
</style>
