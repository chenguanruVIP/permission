<template>
    <div class="main">
        <template v-for="(item) in sidebarMenu">
            <el-submenu v-if="item.children&&item.children.length>0" :index="item.name" :key="item.name">
                <template slot="title">
                    <i  :class="item.meta.icon"></i>
                    <span>{{item.meta.name}}</span>
                </template>
                <el-menu-item-group>
<!--                    递归-->
                    <menu-item :sidebarMenu="item.children"></menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item :key="item.name" :index="item.name" @click="gotoRoute(item.name)" v-else>
                <i  :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "menu-item",
    props:{
        sidebarMenu:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    computed:{
        ...mapState('permission',['currentMenu'])
    },
    created() {
        console.log("获取的数据",this.sidebarMenu)
    },
    methods:{
        gotoRoute(name){
            if(this.currentMenu==name) return;
            this.$router.push({name})
        }
    }
}
</script>

<style scoped lang="scss">

</style>