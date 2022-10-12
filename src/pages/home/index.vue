<template>
  <el-container class="full-height">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Menu from '../../components/menu';

export default {
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {},
  mounted: {},
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: left;
}


.full-height {
  height: 95vh;
}

</style>
