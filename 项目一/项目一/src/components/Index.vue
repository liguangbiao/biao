<template>
    <div>
        <div class="top">
            <img :src="pic1" alt="这是图标">
            <ul>
                <li>
                    <a href="#">首页</a>
                </li>
                <li>
                    <a href="#">软件培训</a>
                </li>
                <li>
                    <a href="#">证件培训</a>
                </li>
                <li>
                    <a href="#">关于我们</a>
                </li>
            </ul>
        </div>
        <div class="middle">
            <img :src="pic2" alt="这是中间图片" class="img-responsive">
        </div>
        <div class="content">
            <h2><span style="color:red">最具公信力/最具吸引力</span>的技能培训和就业服务机构</h2>
            <div class="container-fluid" style="margin-top:7%">
                <div class="row">
                    <div class="col-md-3 col-sm-3">
                        <img src="static/img/1.jpg" width="70" height="70" alt="">
                        <a @click="jump">专本硕博</a>
                        <p>管理领域高端课程体系研发</p>
                        <p class="p2">专业学历学位教育培训服务</p>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <img src="static/img/2.jpg" width="70" height="70" alt="">
                        <a>软件培训</a>
                        <p>全新升级引领行业的HTML5Web课程</p>
                        <p class="p2">十年教培运营经验专注软件人才培养</p>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <img src="static/img/3.jpg" width="70" height="70" alt="">
                        <a>就业创业</a>
                        <p>与多家知名企业合作</p>
                        <p class="p2">晟威助你一臂之力</p>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <img src="static/img/4.jpg" width="100" height="70" alt="">
                        <a>积分入户</a>
                        <p>通过技能证书引进人才</p>
                        <p class="p2">入住大城市不再是梦</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-sm-3 border">
                        <p>客服热线</p>
                        <img width="40" src="static/img/tel.jpg" alt="">
                        <p>400-600-3738</p>
                    </div>
                    <div class="col-md-6 col-sm-6 border">
                        <p>关注我们</p>
                        <div class="row" style="padding:0 17%">
                            <div class="col-md-6 col-sm-6">
                                <img width='40' src="static/img/weixin.jpg" alt="">
                                <p>微信公众号</p>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <img width="70" src="static/img/erweima.jpg" alt="">
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-3 col-sm-3 border">
                        <p>在线咨询</p>
                        <img width="40" src="static/img/qq.jpg" alt="">
                        <p>130707</p>
                    </div>
                </div>
            </div>
            <ul class="container-fluid">
                <li><a href="#">首页</a></li>
                <li><a href="#">关于晟威</a></li>
                <li><a href="#">培训课程</a></li>
                <li><a href="#">在线咨询</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      pic1: "static/img/logo.jpg",
      pic2: "static/img/middle.jpg"
    };
  },
  methods: {
      jump() {
          this.$router.push({
              name:'cultivate'
          })
      }
  },
};
</script>

<style scoped>
template {
  margin: 0;
  padding: 0;
}
.top {
  padding: 0 15%;
  overflow: hidden;
}
.top img {
  display: flex;
  justify-content: center;
  align-items: Center;
  width: 162px;
  height: 78px;
  float: left;
}
 ul{
    list-style: none;
    font-size: 15px;
    display: table;
    table-layout: fixed;
    width: 60%;
    /* background: red; */
    height: 78px;
    margin-left: 45%;
}
.top ul li{
    /* margin-left: 5%; */
    /* margin-top: 3%; */
    /* float: left; */
    display: table-cell;
}
.top ul li:nth-child(1){
    /* margin-left: 35%; */
}
.top ul li a {
    text-decoration: none;
    padding: 3px;
    color: #a0a0a0;
    line-height: 78px;
}
.top ul li a:hover{
    border-bottom: 2px solid #84bbb4;
    color: #84bbb4;
}
.middle{
    width: 100%;
}
.middle img{
    width: 100%;
    height: 500px;
}
.content{
    padding: 0 15%;
    margin-top: 5%;
    margin-bottom: 8%;
    text-align: center;
}
.content h2{
    padding-bottom: 3%;
    /* border-bottom: 2px solid #646464; */
    position: relative;
    width: 100%;
    padding: 0 14% 3% 14%;
    /* justify-content: space-between; */
}
.content h2::after{
     content: '';
    position: absolute;
    left: 15%;
    top: auto;
    bottom: 0;
    right: auto;
    height: 3px;
    width: 70%;
    background-color: #6d6666;
}
.content a{
    display: block;
    margin-top: 25%;
    color: #419e93;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    margin-top: 16%;
    margin-bottom: 4%;
}
.content a:hover{
    /* color: #eee; */
}
.content p{
    font-size: 12px;
    color: #6d6666;
}
.content .container-fluid div:nth-child(2) p{
    margin-left:  -12%; 
    margin-right:  -12%;
}
.p2{
    margin-top:  -4%; 
}
.footer{
    background: #419e93;
    padding: 0 17%;
    padding-top: 3%;
    padding-bottom: 2%;
}
.footer p{
   font-weight: normal;
   color: white;
}
.footer .border{
    border-right: 1px dashed white;   
    text-align: center;
}
.footer .border:nth-child(3){
    border-right: none;  
}
.footer ul{
    overflow: hidden;
    height: 30px;
    display:flex; 
    justify-content:center; 
    align-items:center;  
    /* border: 1px solid red; */
    margin: 0 auto;
    margin-top: 20px;
}
.footer ul li{
    float: left;
    line-height: 30px;
}
.footer ul li a{
   color: white;
   text-decoration: none;
   font-size: 10px;
   margin: 12px;
}
</style>