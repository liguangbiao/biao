var pagenum=3;
Mock.mock(
    'http://mockjs', {
        'waitpayclothes|1-10':[{
            'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
            'paynum|651651-656546546546':6564,
            'price|1-1000':221,
            'intro':"@cparagraph()",
        }],
        'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
        'name':'@csentence(4)',
    });
var waitpaylist=Vue.extend({
    template:'<a :class="{waitpayactive:index == isactive}" @touchstart="handletouchstart()" @touchend="handletouchend(index)"><img :src="item.src"><p><span>{{item.intro}}</span><span>订单号:{{item.paynum}}</span></p><div><span>待付款</span><span>￥{{item.price}}</span></div><a class="del" :class="{delactive:isactive === index}" @click="handleremovewaitpay(index)">取消订单</a></a>',
    props:["item","waitpayclothes","index","isactive"],
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
new Vue({
    el:"#content",
    data:{
        startX:null,
        startY:null,
        isactive:null,
        head:null,
        name:null,
        waitpayclothes:[]
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
                this.isactive=null
            }else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50){
                this.isactive=index;
            }
        },
        removewaitpay:function (index) {
            var del=confirm("确认取消订单吗？");
            if(del){
                this.waitpayclothes.splice(index,1);
                this.isactive=null
            }else {
                return false
            }
        }
    }
});