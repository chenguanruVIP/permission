<template>
<!-- 嵌套路由的主页面 -->
    <div class="main">
        <!-- 侧边栏 -->
        <div class="slid-box">
            <slid-nav></slid-nav>
        </div>
        <div class="right-box">
            <div class="top-nav">
                <el-dropdown :show-timeout="100" @command="dropdownClick">
                    <div style="display: flex;align-items: center;cursor: pointer;">
                        <img src="@/assets/4.png">
                        <div class="user-name">{{UserRoleCode}}</div>
                    </div>
                    <el-dropdown-menu slot="dropdown" class="el-dropdown-box">
                        <el-dropdown-item command="0">用户信息</el-dropdown-item>
                        <el-dropdown-item command="1">修改密码</el-dropdown-item>
                        <el-dropdown-item command="2">退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="main-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import slidNav from "./component/slidNav";
    export default {
        components: {slidNav},
        data() {
            return {
                
            }
        },
        comments:{
            slidNav
        },
        computed:{
            ...mapState(['UserRoleCode'])
        },
        created(){
            this.$nextTick(()=>{

            })
        },
        methods:{
            dropdownClick(command){
                if(command==2){
                    this.$store.commit('logOut')

                }
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';

.el-dropdown-menu {
    width:100px;
    text-align: center;
}

.main{
    width:100%;
    height: 100vh;
    display: flex;
    .slid-box{
        width: 200px;
        height: 100%;
    }
    .right-box{
        flex:1;
        height: 100vh;
        overflow-y: auto;
        position: relative;
        .top-nav{
            flex:1;
            height: 54px;
            background: $navDefaultBg;
            position: absolute;
            left: 0px;
            top:0px;
            right: 0px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding:8px 40px;
            box-sizing: border-box;
            img{
                width:30px;
                height:30px;
            }
            .user-name{
                margin-left: 8px;
                font-size: 18px;
                color:#ffffff

            }

        }
        .main-content{
            height: calc(100% - 60px);
            box-sizing: border-box;
            padding:10px;
            margin-top:60px;
        }
    }

}
</style>