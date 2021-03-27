<template>
<!-- 嵌套路由的主页面 -->
    <div class="main">
        <!-- 侧边栏 -->
        <div class="slid-box">
            <slid-nav></slid-nav>
        </div>
        <div class="main-content">
            内容区
            <router-view/>
        </div>
    </div>
</template>
<script>
    import slidNav from './component/slidNav'
    import SlidNav from "./component/slidNav";
    export default {
        components: {SlidNav},
        data() {
            return {
                
            }
        },
        comments:{
            slidNav
        },
        created(){
        }
    }
</script>
<style lang="scss" scoped>
.main{
    width:100%;
    height: 100vh;
    display: flex;
    .slid-box{
        width: 200px;
        height: 100%;
    }
    .main-content{
        flex:1;
        height: 100%;
        box-sizing: border-box;
        padding:10px;
    }
}
</style>