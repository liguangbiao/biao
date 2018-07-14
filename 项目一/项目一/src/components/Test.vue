<template>
    <div>
        <ul class="layout">
            <li>这是一</li>
            <li>这是二</li>
            <li>这是三</li>
            <li>这是四</li>
            <li>这是五</li>
        </ul>
        <div class="test">这是测试数据
            <div class="child">
                这是子数据
            </div>
        </div>
        <div class="flex">这是测试flex</div>
    </div>
</template>

<script>
    export default {
        name:'Test'
    }
</script>

<style scoped>
/* .layout li{
    display: table-cell;
    width: 10%;
} */
.layout {
    display: table;
    width: 100%;
    table-layout: fixed;
}
.layout li{
    display: table-cell;
}
.test{
    width: 200px;
    height: 200px;
    padding: 20px;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
}
.child{
    width: 100px;
    height: 100px;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: inherit;
}
.flex{
    margin-left: 40px;
    border: 1px solid red;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>