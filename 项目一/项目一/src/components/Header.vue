<template>
    <div>
        <common :msg="navLiVal"></common>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 top-menu" style="overflow:hidden">
                        <img src="static/img/5.jpg" alt="" style="float:left">
                        <p>栏目菜单</p>
                    </div>
                    <div class="col-md-9">
                        
                        <ol class="breadcrumb" style="background:none;margin:0;padding:0">
                            <span>你的位置：</span>
                            <li><a href="#">网站首页</a></li>
                            <li class="active">招生简章</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <ul class="content-nav">
                            <li class="first">
                                <img width="25" src="static/img/6.jpg" alt="">
                                <a href="#">机构概况
                                    <span style="margin-left:8px" class="glyphicon"></span>
                                </a>
                            </li>
                            <li class="first">
                                <img width="25" src="static/img/7.jpg" alt="">
                                <a href="#">招生简章
                                    <span style="margin-left:8px" class="glyphicon"></span>
                                </a>
                            </li>
                            <li class="first">
                                <img width="25" src="static/img/8.jpg" alt="">
                                <a href="#">教学管理
                                    <span style="margin-left:8px" class="glyphicon"></span>
                                </a>
                            </li>
                             <ul class="second">
                                    <li><a href="#">教学公告</a></li>
                                    <li><a href="#">师资介绍</a></li>
                                    <li><a href="#">学院活动</a></li>
                            </ul>
                            <li class="first">
                                <img width="25" src="static/img/9.jpg" alt="">
                                <a href="#">联系我们
                                    <span style="margin-left:8px" class="glyphicon"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <img src="static/img/pic1.jpg" alt="" class="img-responsive">
                        <hr/>
                        <div class="row pic-bottom">
                            <div class="col-md-3 col-sm-3">
                                <img width="" src="static/img/pic2.jpg" alt="" class="img-responsive">
                            </div>
                            <div class="col-md-9 col-sm-9" style="margin-left:-3%;">
                                <h4>2018MPA.cc招生简章</h4>
                                <p>MPA.cc会计硕士研究生招生简章 管理学院位居全国高校管理学院百强44位，管理科学与工程专业位居全国第22位，工程管理专业位居全国11位，具备EMBA(高级工商管理硕士)培养资源，学院拥有10硕士点，6个博士...[详细]</p>
                                <p>作者：晟威教育中心 日期：2017.5.24</p>
                            </div>
                        </div><hr/>
                        <div class="row pic-bottom">
                            <div class="col-md-3 col-sm-3">
                                <img width="" src="static/img/pic2.jpg" alt="" class="img-responsive">
                            </div>
                            <div class="col-md-9 col-sm-9" style="margin-left:-3%;">
                                <h4>2018MPA.cc招生简章</h4>
                                <p>MPA.cc会计硕士研究生招生简章 管理学院位居全国高校管理学院百强44位，管理科学与工程专业位居全国第22位，工程管理专业位居全国11位，具备EMBA(高级工商管理硕士)培养资源，学院拥有10硕士点，6个博士...[详细]</p>
                                <p>作者：晟威教育中心 日期：2017.3.22</p>
                            </div>
                        </div><hr/>
                        <div class="row pic-bottom">
                            <div class="col-md-3 col-sm-3">
                                <img width="" src="static/img/pic2.jpg" alt="" class="img-responsive">
                            </div>
                            <div class="col-md-9 col-sm-9" style="margin-left:-3%;">
                                <h4>2018MPA.cc招生简章</h4>
                                <p>MPA.cc会计硕士研究生招生简章 管理学院位居全国高校管理学院百强44位，管理科学与工程专业位居全国第22位，工程管理专业位居全国11位，具备EMBA(高级工商管理硕士)培养资源，学院拥有10硕士点，6个博士...[详细]</p>
                                <p>作者：晟威教育中心 日期：2017.2.11</p>
                            </div>
                        </div>
                        <div class="row" style="margin-top:2%">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <ul class="pagination pull-right fenye">
                                    <li><a href="#">上一页</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">下一页</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from "./Common";
export default {
  name: "Header",
  data() {
      return {
          navLiVal: ''
      }
  },
  components: { common },
  methods:{
  },
  watch:{
      navLiVal:{
          handler:function(value,oldValue){
              console.log(value);
          }
      }
  },
    mounted:function(){
        $('.first').on('mouseover',function(){
            $(this).find('span').addClass('glyphicon-menu-down');
            // this.navLiVal = $(this).find('a').text();
            }).on('mouseout',function(){
            $(this).find('span').removeClass('glyphicon-menu-down');
            }).on('click',function(){
            if($(this).next().css('display') == 'none'){
                $(this).find('span').removeClass('glyphicon-menu-down');
                    
                $(this).next().show(100);
                $(this).find('span').addClass('glyphicon-menu-up');
            }
            else{
                $(this).find('span').removeClass('glyphicon-menu-up'); 
                $(this).find('span').addClass('glyphicon-menu-down');
                $(this).next('ul').hide(100);
            } 
        })

        $('.content-nav').on('mouseover','li',function(){

        })
    }
};
</script>

<style scoped>
.head {
  margin: 0;
  margin-top: 2%;
  padding: 0 10%;
  /* overflow: hidden; */
}
.head img {
  width: 172px;
  height: 44.8px;
  display: flex;
  justify-content: center;
  align-items: Center;
}
.head .p-content {
  height: 44.8px;
  font-size: 15px;
  font-weight: bold;
  color: #999898;
  line-height: 17px;
  border-left: 2px solid black;
  margin-left: 3%;
}
.head input[type="text"] {
  padding: 4px 0px 4px 2px;
  border-color: 1px #419e93;
  font-size: 10px;
  /* width: 100px; */
}
/* .head input[type='submit']{
    text-align: center;
    padding: 5px 8px 5px 8px;
    margin-top: 5px;
    background: #419e93;
    color: white;
    border: none;
} */
.nav {
  background: #419e93;
  overflow: hidden;
  height: 40px;
  margin-top: 20px;
}
.nav ul {
  list-style: none;
  padding: 0 10%;
}
.nav ul li a {
  float: left;
  color: white;
  line-height: 40px;
  width: 130px;
  /* border: 1px solid red; */
  text-align: center;
  text-decoration: none;
}
.nav ul li a:hover {
  background: #4cbfb1;
  color: white;
}
.content {
  padding: 0 10%;
  margin-top: 2%;
}
.top-menu {
  overflow: hidden;
  display: flex;
  /* justify-content: center; */
  align-items: Center;
  /* background: #eee; */
}
.top-menu p {
  font-size: 15px;
  color: #419e93;
  margin-top: 3%;
  margin-left: 3%;
}
.content-nav {
  /* margin: 0; */
  margin-left: -15%;
  margin-top: -2%;
}
ul{
    list-style: none;
}
.content-nav .first{  
  width: 90%;
  height: 50px;
 
  /* border: 1px solid red;     */
  border-bottom: 1px solid #d2d0d0;
}
.content-nav .first:nth-child(1) {
  border-top: 4px solid black;
}
.content-nav li a {
  display: block;
  width: 90%;
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  font-size: 14px;
  color: black;
}
.content-nav .first img {
  float: left;
  margin-left: 22%;
  margin-right: 4%;
  margin-top: 5%;
}
.content-nav li:hover{
  background: #4cbfb1;
}
.content-nav li a:hover {
  color: white;
}
.content-nav .second{
  /* position: relative; */
  /* margin-left: 4%; */
  margin-left: -17%;
  width: 108%;
  text-indent: 7em;
  display: none;
}
.second li{
    border-bottom: 1px solid #d2d0d0;
}
.content-nav .second li:hover {
  background: #f4fdfc;
}
.content-nav .second li a:hover {
  color: black;
}
.pic-bottom img {
  height: 112px;
}
.pic-bottom h4 {
  color: red;
  margin-top: 0;
  padding: 0;
}
.pic-bottom p {
  color: #adadad;
  font-size: 12px;
}
.fenye a {
  /* margin: 0 3%; */
  border-radius: 2px;
}
.fenye a:hover {
  background: #419e93;
}
.glyphicon{
    color: white;
}
</style>