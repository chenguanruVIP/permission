<template>
    <div class="main">
        <div class="bg-box">
            <img  class="bg-img bg-1" src="@/assets/1.jpg"/>
            <img  class="bg-img3" src="@/assets/2.gif"/>
        </div>
        <div class="from-box">
            <h2>权限管理后台</h2>
            <div class="input-group">
                <el-form ref="form"  :model="form">
                    <el-form-item label="账户名称"  prop="username">
                        <el-input v-model.trim="form.username" placeholder="账户说明查看login()"></el-input>
                    </el-form-item>
                    <el-form-item label="账户密码" prop="password">
                        <el-input v-model.trim="form.password" placeholder="不做账号密码验证" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="medium" class="max-btn" @click="login" type="primary" :loading="loading">立即登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            loading:false,
            form:{
                username:'',
                password:''
            }
        }
    },
    created(){
       
    },
    methods:{
        // 模拟登陆--设置一个token
        login(){
            this.loading = true
            setTimeout(()=>{
                this.loading = false
                //用户角色记录，只有school这个账号才是完整的菜单,其他账号的菜单是不完整的
                //所有账号都不需要密码，不做账号密码验证
                this.$store.commit('userRoleCode',this.form.username)
                this.$store.commit('loginSuccess','a123-uuser-1285-9969-admin123')

                this.$router.push({path: '/'}).catch(() => {
                    // 捕获异常
                })
                
            },1000)
        }
        
    }
}
</script>
<style scoped lang="scss">
.main{
    width:100%;
    height:100vh;
    background:rgba(64, 158, 255,0.8);
    position: relative;
    overflow: hidden;
    .bg-box{
        .bg-img{
            width:80px;
            position: absolute;
            top:50vh;
            border-radius: 100%;
            opacity: 0.8;
        }
        .bg-1{
            right:-150px;
            animation: bg1Anima 5s infinite linear;
        }
        .bg-img3{
            width:200px;
            position: absolute;
            right: 54px;
            bottom:60px;
        }
    }
    .from-box{
        width:400px;
        height: 350px;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate3d(-50%,-100vh,0);
        opacity: 0;
        background: #ffffff;
        border-radius: 4px;
        animation: loginBoxAnima 1.5s forwards;
        h2{
            width:100%;
            text-align: center;
            font-size: 24px;
            padding-bottom:20px;
            border-bottom:1px solid #dcdfe6;
        }
        .input-group{
            width:100%;
            padding-top:35px;
            .el-form-item{
                display: flex;
                justify-content: center;
            }
            .el-input{
                width:250px;
                margin-left:10px
            }
        }
    }
}
@keyframes bg1Anima {
    from {
        left:-150px;
        top:50vh;
    }
    to{
        left:50vw;
        top:-150px;
    }
}
@keyframes loginBoxAnima {
    from {
        transform: translate3d(-50%,-100vh,0);
        opacity: 0;
    }
    to{
        transform: translate3d(-50%,-50%,0);
        opacity: 1;
    }
}
</style>
