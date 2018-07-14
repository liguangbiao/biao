<template>
    <div>
         <div class="head">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-4">
                                <img src="static/img/r_logo.jpg" alt="">
                            </div>
                            <div class="col-md-5 col-sm-5 col-xs-5 p-content">
                                <p>致力于IT软件专才培养</p>
                                <p style="margin-top:0">高端就业服务导向</p>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-3"></div>
                        </div>      
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-4">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="请输入你要搜索的关键字">
                            <span class="input-group-btn">
                                <button class="btn">搜索</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid nav">
            <ul class="ul">
                <li><a href="#" @click="jumpToIndex" class="active">首页</a></li>
                <li><a href="#">机构概况</a></li>
                <li><a href="#" @click="jump">招生简章</a></li>
                <li><a href="#">教学管理</a>
                    <ul class="container-fluid">
                        <li><a href="#">教学公告</a></li>
                        <li><a href="#">师资介绍</a></li>
                        <li><a href="#">学院活动</a></li>
                    </ul>
                </li>
                <li><a href="#">联系我们</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
      name:'Common',
      methods: {
          jump() {
              this.$router.push({
                  name:'detail'
              })
          },
          jumpToIndex(){
              this.$router.push({
                  name:'index'
              })
          },
      },
      props:['msg'],
      mounted:function(){
          $('.ul').on('mouseover','li',function(){
              $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
          }).on('mouseout','li',function(){
              $(this).find('a').removeClass('active');
              $(this).parent().find('li').eq(0).find('a').addClass('active');
          })
      }
    }
</script>

<style scoped>
.head{
    margin: 0;
    margin-top: 2%;
    padding: 0 10%;
}
 .head img{
    width: 110%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: Center;
    padding-right: 10px;
    border-right: 2px solid black;
}
.head .p-content{
    height: 40px;
    font-size: 15px;
    font-weight: bold;
    color: #999898;
    line-height: 17px;
    margin-left: 3px;
}
.head input[type='text']{
    padding: 4px 0px 4px 2px;
    border-color: 1px #419e93;
    font-size:10px;
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
.nav{
    background: #419e93;
    /* overflow: auto; */
    height: 40px;
    margin-top: 20px;
}
.nav ul{
    list-style: none;
}
.nav .ul{
     padding: 0 10%;
}
.nav ul li{
    float: left;  
    position: relative;  
}
.nav ul li a{
    display: block;
    color: white;
    line-height: 40px;
    width: 130px;
    text-align: center;
    text-decoration: none;
}
.active{
    background: #4cbfb1;
    color: white;
}
.nav li ul{
    display: none;
    width:130px;	
    height: 40px;
    margin-top:1px;	
    position: absolute;  
    z-index: 666;
}
.nav li ul li a{
    background: #419e93;
    margin-left: -15px;
}
.nav li:hover ul{
    display: block;
    /* background: red; */
}
.nav li ul li a:hover{
    background: #4cbfb1;
    color: white;
}
</style>