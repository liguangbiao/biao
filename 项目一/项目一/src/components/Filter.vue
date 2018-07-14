<template>
    <div>
        <input type="text" v-model="newTask" placeholder="请添加新任务" @keyup.enter="addNewTask">
        <ul>
            <li  v-for="task in tasks" :key="task.id">
                {{ task.task }}
                <span class="badge">{{task.isFinish}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTask:'',
                tasks: [
                    {
                        task:'打代码',
                        isFinish:false
                    },
                    {
                        task:'玩游戏',
                        isFinish:false
                    },
                    {
                        task:'吃饭',
                        isFinish:false
                    },
                    
                ]
            }
        },
        methods: {
            addNewTask() {
                if(!this.newTask){
                    alert('请输入新任务');
                }
            }
        },
    }
</script>

<style scoped>
input{
    margin-bottom: 20px;
}
</style>