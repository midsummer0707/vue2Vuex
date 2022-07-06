<!-- 测试页面 -->
<template>
  <div class="container">
    <H1>这是一则数据 - {{ dataTime }}</H1>
    <el-tag> {{ username }}</el-tag> |
    <el-tag type="warning">{{ birthday }}</el-tag> |

    <el-tag type="info">{{ address }}</el-tag> |

    <el-tag type="primary">{{ gender }}</el-tag> |
    <el-tag type="danger">{{ surname }}</el-tag>

    <el-divider />
    <el-button @click="handleMutation" type="danger">设置姓名按钮</el-button>
    <el-button type="info" @click="handelSetBirth">设置生日按钮</el-button>

    <el-button type="danger" @click="handelSetGenderMutation"
      >mutation来修改我的姓氏按钮</el-button
    >
    <el-button type="danger" @click="handelSetGenderAction"
      >Action来修改我的姓氏按钮</el-button
    >

    <el-divider />

    <el-button type="primary" @click="handleSync">同步方式</el-button>
    <el-button type="warning" @click="handleASyncStatic"
      >地址 - 异步方式(静态)</el-button
    >
    <el-button type="warning" @click="handleGenderStatic"
      >性别 - 异步方式(静态)</el-button
    >
    <el-button type="info" @click="handleSyncDynamic">异步方式(动态)</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTime: new Date().getTime()
    };
  },
  computed: {
    username: function() {
      // return this.$store.state.name;
      return this.$store.getters.getNickname;
    },
    birthday: function() {
      return this.$store.getters.getMyBirthDay;
    },
    address: function() {
      return this.$store.getters.getMyAddress;
    },
    gender: function() {
      return this.$store.getters.getMyGender;
    },
    surname: function() {
      return this.$store.getters.getMySurname;
    }
  },
  methods: {
    handleMutation() {
      this.$store.commit({
        type: "setType",
        hahaname: "江南水乡"
      });
    },

    handelSetBirth() {
      this.$store.commit({
        type: "setBirthDay",
        birthday: "我的生日是七月七日!"
      });
    },

    handleSync() {
      this.$store.commit({
        type: "setMyCountry",
        newAddress: "我的国家是中国, 五星红旗飘扬的地方~"
      });
    },

    handleASyncStatic() {
      this.$store.dispatch({
        type: "setStaticCountry",
        newAddress: "这里有世界上最大的人民广场,天安门,故宫等世界奇迹~"
      });
    },
    // 设置姓氏
    handleGenderStatic() {
      this.$store.dispatch({
        type: "setStaticGender",
        newGender: "我曾经以为世界上只有两种性别!"
      });
    },

    handleSyncDynamic() {},

    /**
     * 设置姓氏  同步方式
     */

    handelSetGenderMutation() {
      this.$store.commit({
        type: "methodGender",
        newSurname: "王王王~"
      });
    },

    /**
     * 设置姓氏  异步方式
     */

    handelSetGenderAction() {
      this.$store.dispatch({
        type: "setActionSurname",
        newSurname: "wangwangwang~~~~~~~~~~~~~~~~~~~~"
      });
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
