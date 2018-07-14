<template>
    <div>
        <common></common>
        <div class="total-content">
            <ol class="breadcrumb" style="background:none;margin-top:20px;padding:0">
                <span>你的位置：</span>
                <li><a href="#">网站首页</a></li>
                <li><a href="#">新闻资讯</a></li>
                <li><a href="#">国家政策</a></li>
                <li class="active">正文</li>
            </ol>
            <div class="main-content">
                <h4 class="header">教育部&nbsp;国家院学位委员会关于印发</h4>
                <h4 class="header">《学位与研究生教育发展“十三五”规划》的通知</h4>
                <p class="p1">作者：晟威教育中心&nbsp;&nbsp;来源：原创&nbsp;&nbsp;日期：2017/3/10 9:28&nbsp;&nbsp;人气：1</p>
                <p class="p2">各省、自治区、直辖市学位委员会、教育厅（教委），新疆生产建设兵团教育局，有关部门（单位）教育司，中国科学院前沿科学与教育局，中国社会科学院研究生院，中共中央党校学位评定委员会，中央军委训练管理部职业教育局，部署各高等学校：</p>
                <p class="p2">根据党中央的总体要求和国务院关于“十三五”规划编制工作的总体部署，为适应新时期经济社会发展对高层次人才的需要，全面提高学位与研究生教育质量，现将《学位与研究生教育发展“十三五”规划》印发给你们。请结合实际，认真贯彻落实。</p>
                <p class="p2">附件：<a href="#">学位与研究生教务发展“十三五”规划</a></p>
                <p class="p3">教育部国务院学位委员会</p>
                <p class="p3">2017年1月17日</p>
            </div>
            <hr>
            <div class="footer">
                <p>点击下载：<a href="#">学位与研究生教务发展“十三五”规划.doc</a></p>
                <p class="p4">上一页：<a href="#">教育部办公室关于统筹全日制和非全日制研究生&nbsp;管理工作的通知</a></p>
                <p class="p4">下一页：<a href="#">教育部关于做好2013年全国硕士学位研究生招生工作的通知</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import common from "./Common";
    export default {
        name:'Content',
        components:{common}
    }
</script>

<style scoped>
a{
    text-decoration: none;
}
.total-content{
    padding: 0 11%;
}
.main-content h4{
    color: red;
    font-weight: 600;
    text-align: center;
}
.main-content p{
    margin-top: 20px;
}
.main-content .p1{
    font-size: 12px;
    color: #b4b4b4;
    text-align: center;
}
.main-content .p2{
    text-indent: 2em;
    color: #b8b7b7;
    font-size: 13px;
}
.main-content .p3{
    text-align: right;
    color: #b8b7b7;
}
.footer a{
    text-decoration: none;
}
.footer .p4{
    font-size: 12px;
    color: #b8b7b7;
}
.footer .p4 a{
    font-size: 12px;
    color: black;
}
</style>