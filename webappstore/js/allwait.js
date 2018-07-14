var pagenum=3;
var waitpaylist=Vue.extend({
    template:'<a :class="{waitpayactive:index == waitpayactive}" @touchstart="handletouchstart()" @touchend="handletouchend(index)"><img :src="item.src"><p><span>{{item.intro}}</span><span>订单号:{{item.paynum}}</span></p><div><span>待付款</span><span>￥{{item.price}}</span></div><a class="del" :class="{delactive:waitpayactive === index}" @click="handleremovewaitpay(index)">取消订单</a></a>',
    props:["item","waitpayclothes","index","waitpayactive"],
    methods:{
        handletouchstart:function (){
            this.$emit("touchstart")
        },
        handletouchend:function (index){
            this.$emit("touchend")
        },
        handleremovewaitpay:function (index) {
            this.$emit("removewaitpay")
        }
    }
});
Vue.component('waitpaylist',waitpaylist);
var waitgetlist=Vue.extend({
    template:'<a><img :src="item.src"><p><span>{{item.intro}}</span><span>订单号:{{item.paynum}}</span></p><div><span>待收货</span><span>￥{{item.price}}</span></div></a>',
    props:["item","waitgetclothes"]
});
Vue.component('waitgetlist',waitgetlist);
var paylist=Vue.extend({
    template:'<a :class="{waitpayactive:index == payactive}" @touchstart="handletouchstart()" @touchend="handletouchend(index)"><img :src="item.src"><p><span>{{item.intro}}</span><span>订单号:{{item.paynum}}</span></p><div><span>交易完成</span><span>￥{{item.price}}</span></div><a class="del" :class="{delactive:payactive === index}" @click="handleremovewaitpay(index)">删除记录</a></a>',
    props:["item","payclothes","index","payactive"],
    methods:{
        handletouchstart:function (){
            this.$emit("touchstart")
        },
        handletouchend:function (index){
            this.$emit("touchend")
        },
        handleremovewaitpay:function (index) {
            this.$emit("removepay")
        }
    }
});
Vue.component('paylist',paylist);
Mock.mock(
    'http://mockjs', {
        'waitgetclothes|1-5':[{
            'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
            'paynum|651651-656546546546':6564,
            'price|1-1000':221,
            'intro':"@cparagraph()",
        }],
        'waitpayclothes|1-5':[{
            'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
            'paynum|651651-656546546546':6564,
            'price|1-1000':221,
            'intro':"@cparagraph()",
        }],
        'payclothes|1-5':[{
            'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
            'paynum|651651-656546546546':6564,
            'price|1-1000':221,
            'intro':"@cparagraph()",
        }],
        'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
        'name':'@csentence(4)',
    });
new Vue({
    el:"#content",
    data:{
        head:null,
        name:null,
        waitpayactive:null,
        payactive:null,
        waitpayclothes:[],
        waitgetclothes:[],
        payclothes:[]
    },
    mounted:function () {
        this.loadData()
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.waitpayclothes=res.waitpayclothes;
                self.waitgetclothes=res.waitgetclothes;
                self.payclothes=res.payclothes;
                self.head=res.src;
                self.name=res.name
            })
        },
        handletouchstart:function () {
            this.startX = event.changedTouches[0].pageX;
            this.startY = event.changedTouches[0].pageY;
        },
        handletouchend:function (index){
            var endX = event.changedTouches[0].pageX;
            var endY = event.changedTouches[0].pageY;
            var distanceX  = endX - this.startX;
            var distanceY = endY - this.startY;
            if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 50){
                this.waitpayactive=null;
            }else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50){
                this.waitpayactive=index;
            }
        },
        handlepaytouchend:function (index){
            var endX = event.changedTouches[0].pageX;
            var endY = event.changedTouches[0].pageY;
            var distanceX  = endX - this.startX;
            var distanceY = endY - this.startY;
            if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 50){
                this.payactive=null;
            }else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50){
                this.payactive=index;
            }
        },
        removewaitpay:function (index) {
            var del=confirm("确认取消订单吗？");
            if(del){
                this.waitpayclothes.splice(index,1);
                this.waitpayactive=null
            }else {
                return false
            }
        },
        removepay:function (index) {
            var del=confirm("确认删除订单记录吗？");
            if(del){
                this.payclothes.splice(index,1);
                this.payactive=null
            }else {
                return false
            }
        }
    }
});