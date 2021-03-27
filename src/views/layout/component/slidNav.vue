<template>
<!-- 嵌套路由的主页面 -->
    <div class="main">
        <!-- 侧边栏 -->
        <div class="slid-box">
            <img class="logo" src="@/assets/3.jpg"/>
            <el-menu  class="el-menu-vertical-demo"
                      :collapse="false"
                      default-active="teacherMent1"
            >
                <menu-item :sidebarMenu="sidebarMenu" :currentMenu="currentMenu"></menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import menuItem from "./menuItem";
    export default {
        data() {
            return {
                
            }
        },
        components:{
            menuItem
        },
        computed:{
            ...mapState('permission',['sidebarMenu','currentMenu'])
        },
        created() {
            this.$nextTick(()=>{
                console.warn(this.sidebarMenu)

            })
        }
    }
</script>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.main{
    width:100%;
    height: 100%;
    background: #000000;
    .slid-box{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        width:80px;
        margin-bottom:10px;
    }
    .el-menu-vertical-demo{
        width:100%;

    }
    /deep/ .el-menu{
        background: $navDefaultBg;
        border-right:none;
        span{
            color:$navDefaultColor;
            font-size:$navDefaultSize;
        }
         .el-submenu__title i{
            color:$navDefaultColor;
            font-size:16px
        }
        .el-submenu__title:hover{
            background: rgb(3, 38, 58);
        }
        .el-menu-item:focus,.el-menu-item:hover,{
            background: $activeColor;
        }
        &.el-menu-item:focus,.is-active .is-active{
            background: $activeColor;
        }
        .el-icon-location,.el-icon-bell{
            color:$navDefaultColor;
            font-size: 20px;
        }
    }


}
</style>