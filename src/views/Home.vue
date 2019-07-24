<template>
  <div class="home">
    <a-layout id="components-layout-demo-top-side">
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-row>
            <a-col :span="4">
              <a-menu-item key="1">
                <a-icon type="step-backward"/>
                <router-link to="/welcome">back</router-link>
              </a-menu-item>
            </a-col>
            <a-col :span="16">
              <a-menu-item key="2">
                <a-icon type="home" style="color:white"/>
                <router-link :to="{ name: 'home', params: { name: name }}">Home</router-link>
              </a-menu-item>
            </a-col>
            <a-col :span="4">
              <a-menu-item key="3" style="float:right">
                <a-icon type="user"/>
                <strong style="font-size:20px">{{name}}</strong>
              </a-menu-item>
            </a-col>
          </a-row>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-sider width="200" style="background: #fff">
            <a-menu
              mode="inline"
              :defaultSelectedKeys="['1']"
              :defaultOpenKeys="['sub1']"
              style="height: 100%"
            >
              <a-menu-item key="1">
                <a-icon type="ordered-list" />
                todolist
                <router-link class="link" :to="{name:'listContent'}">todolist</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="info"></a-icon>
                info
                <router-link class="link" :to="{name:'Myinfo'}">info</router-link>
              </a-menu-item>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px', padding:'30px'}">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    name: String
  },
  data() {
    return {};
  },
  created() {
    this.$router.push({ name: "listContent" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.leftNav {
  background-color: #f5f5f5;
  float: left;
  width: 20%;
  min-height: 500px;
}
.content {
  background-color: #f6f6f6;
  float: left;
  width: 80%;
  min-height: 500px;
}
strong {
  float: right;
}
.link {
  margin-left: 20px;
}
.listContent {
  margin-top: 50px;
}
</style>
