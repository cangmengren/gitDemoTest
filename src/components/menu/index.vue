<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(item, idx) in menuList">
          <el-submenu :index="idx + 'index'" :key="idx">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group v-for="(its, i) in item.subMenu" :key="i">
              <el-menu-item
                class="subMenu"
                @click="goPage(its)"
                :index="idx + '-' + i"
                :key="idx + '-' + i"
                >{{ its.title }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: '系统管理',
          icon: 'el-icon-menu',
          subMenu: [
            {
              title: '用户管理',
              icon: '',
              path: '/userManagement',
            },
            {
              title: '角色管理',
              path: '/ruleManagement',
            },
            {
              title: '菜单管理',
              path: '/menuManagement',
            },
          ],
        },
        {
          title: '导航二',
          icon: 'el-icon-location',
          subMenu: [
            {
              title: '角色管理',
              path: '/ruleManagement',
            },
          ],
        }
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    goPage(data) {
      this.$router.push(data.path)
    }
  },
};
</script>
<style scoped>

</style>
