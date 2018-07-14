<template>
    <div style="width:100%">
        <common></common>
        <img src="static/img/10.jpg" alt="" class="img-responsive first-img">
        <div class="info">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="title">
                            <img src="static/img/11.jpg" alt="">
                            <p class="title-message">招生信息</p>
                            <p class="pull-right">MORE+</p>
                        </div>
                        <div class="pic-bottom">
                            <img src="static/img/16.jpg" alt="">
                        </div>
                        <div class="info-content">
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">2018工程大MBA招生简章</a>
                            </div>
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">2018MPA.cc招生简章</a>
                            </div>
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">2018湖工大MBA招生简章</a>
                            </div>
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">2018南华MBA招生简章</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="title">
                            <img src="static/img/12.jpg" alt="">
                            <p class="title-message">教学公告</p>
                             <p class="pull-right">MORE+</p>
                        </div>
                        <div class="pic-bottom">
                            <img src="static/img/17.jpg" alt="">
                        </div>
                        <div class="info-content">
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">湖工大MBA课程表2017下半年①</a>
                            </div>
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">MBA课程表2017下半年</a>
                            </div>
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">MBA课程表2017上半年</a>
                            </div>
                            <div class="item">
                                <img src="static/img/14.jpg" alt="">
                                <a href="#">MBA课程表2016下半年</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="linkOther row container-fluid">
                    <div class="link-title">
                        <img src="static/img/15.jpg" alt="">
                        <p>友情链接</p>
                    </div>
                    <hr>
                    <div class="link-item">
                        <div class="row">
                            <div class="col-md-3">
                                <a href="#">中国研究生招生信息网</a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">中国学位与研究生教育信息网</a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">中国高等教育学生信息网</a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">升专 升本 套本 插本</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <a href="#">技师户口</a>
                            </div>
                            <div class="col-md-3">
                                <a href="#">我要POS移动支付神器</a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content">
            <div class="row">
                <div class="col-md-3 footer-item">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="static/img/tel.jpg" alt="" width="50">
                        </div>
                        <div class="col-md-9">
                            <p>客服热线</p>
                            <p>400-600-3738</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-6 footer-item">
                    <div class="row container">
                        <div class="col-md-8">
                            <img src="static/img/weixin.jpg" alt="" width="50" style="margin-left:44%">
                            <img src="static/img/erweima.jpg" alt="" width="60" style="margin:0 3%">
                        </div>
                        <div class="col-md-4" style="margin-left:-12%">
                            <p>微信公众号</p>
                            <p>关注我们</p>
                        </div>
                    </div> 
                </div>
                <div class="col-md-3 footer-item">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="static/img/qq.jpg" alt="" width="50">
                        </div>
                        <div class="col-md-9">
                            <p>在线咨询</p>
                            <p>1350707</p>
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
  name: "Info",
  components: { common },
  mounted:function(){
        $('.item').on('mouseover',function(){
        $(this).find('a').css('color','#419e93');
        $(this).find('img').attr('src','static/img/13.jpg')
    }).on('mouseout',function(){
        $(this).find('a').css('color','#848484');
        $(this).find('img').attr('src','static/img/14.jpg')
    })
  },
  created:function(){
    
  }
};
</script>

<style scoped>
.first-img {
  width: 100%;
  height: 350px;
  margin-top: 10px;
}
.info {
  margin: 0;
  padding: 0 15%;
}
.title {
  overflow: hidden;
  height: 40px;
  border-bottom: 3px solid #419e93;
  margin-top: 35px;
}
.title img {
  float: left;
  height: 30px;
  margin-top: 5px;
}
.title .title-message {
  height: 40p;
  line-height: 40px;
  margin-left: 10px;
  color: #419e93;
  letter-spacing: 1px;
  font-weight: 590;
  font-size: 16px;
  width: 50%;
  float: left;
}
.pic-bottom img {
  width: 100%;
  margin-top: 15px;
}
.pull-right {
  height: 40px;
  line-height: 40px;
  color: #a0a0a0;
}
.info-content {
  background: #fdfdfd;
  padding: 8px 0 0 20px;
}
.info-content .item {
  margin-top: 5px;
}
.info-content img {
  width: 15px;
}
.info-content a {
  text-decoration: none;
  color: #848484;
  margin-left: 5px;
}
.linkOther {
  margin-top: 20px;
}
.linkOther .link-title {
  overflow: hidden;
  height: 30px;
}
.linkOther img {
  width: 30px;
  float: left;
}
.link-title p {
  height: 30px;
  line-height: 30px;
  margin-left: 5px;
  float: left;
  color: #419e93;
}
hr {
  height: 1px;
  border: none;
  border-top: 3px solid #419e93;
  margin-top: 2px;
  margin-bottom: 20px;
}
.link-item {
  margin-top: 40px;
  border: 1px solid #f8f8f8;
  padding: 20px;
}
.link-item a {
  text-decoration: none;
  color: #9a9898;
  font-size: 13px;
}
.link-item .col-md-3 {
  height: 25px;
  line-height: 25px;
}
.footer-content{
    background: #419e93;
    padding: 0 15%;
    height: 100px;
    line-height: 100px;
    margin-top: 30px;
}
/* .footer-content img{
    float: left;
} */
.footer-item{
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-item p{
    height: 20px;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-top: -4px;
    margin-left: -4px;
}
.footer-item{
    margin-left: -15px;
}
</style>