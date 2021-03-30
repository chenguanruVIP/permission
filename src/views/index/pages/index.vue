<template>
    <div class="main">
        <h3>请选择系统登陆</h3>
        <div class="system-list">
            <div class="itme-box" @click="pageFun('system1')">
                <img src="@/assets/1.png">
                <h4>win7系统</h4>
            </div>
            <div class="itme-box" @click="pageFun('system2')">
                <img src="@/assets/2.png">
                <h4>win10系统</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    created(){
       
    },
    methods:{
        pageFun(url){
            window.location.href = url
        }
    }
}
</script>
<style scoped lang="scss">
.main{
    width:100%;
    height:100vh;
    background:rgba(64, 158, 255,0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        color:#ffffff;
    }
    .system-list{
        margin-top:80px;
        display: flex;
        .itme-box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor:pointer;
            h4{
                margin-top:8px;
                color:#ffffff
            }
        }
        .itme-box:first-child{
            margin-right: 80px;
        }
    }
}
</style>
