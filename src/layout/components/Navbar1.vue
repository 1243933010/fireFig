<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="name">
      <!-- <span>xxxx公司</span> -->
    </div>
    <div class="right-menu">
      <div class="right-menu-name"><span>xxx</span></div>
      <div class="right-menu-tz" @click="openMessage"><el-badge :value="12" class="item" >
          <img src="../../assets/message.png" alt="">
        </el-badge></div>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="代办项目提示" center :visible.sync="dialogVisible" width="50%" >
      <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title" >
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author"  align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" align="center">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
    </el-table>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { getList } from '@/api/table'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data(){
    return{
      dialogVisible:true,
      list:[
        {title:'标题',content:'内容',time:'199966'},
        {title:'标题',content:'内容',time:'199966'},
        {title:'标题',content:'内容',time:'199966'},
      ],
      listLoading:true
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    async openMessage() {
      console.log('1111')
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  position: relative;
  background: #64A9EA;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name {
    font-size: 25px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-name {
      margin-left: 15px;
    }

    .right-menu-tz {
      margin-left: 15px;
      padding-top: 15px;

      // display: flex;
      // justify-content: center;
      // align-items: center;
      img {
        width: 20px;
        height: 27px;
      }
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      // height: 50px;
      // background-color: red;
      margin-right: 30px;
      padding-top: 15px;
      margin-left: 15px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
