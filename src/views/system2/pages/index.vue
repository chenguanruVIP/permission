<template>
    <div class="main">
        <h3>当前选择的系统是win10</h3>
        <h5>多页面的配置，请查看vue.config.js,具体文档https://cli.vuejs.org/zh/config/#lintonsave</h5>
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

    }
}
</script>
<style scoped lang="scss">
.main {
    width: 100%;
    height: 100vh;
    background: rgba(64, 158, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        color: #ffffff;
    }
    h5{
        color:#e3e3e3
    }
}
</style>
