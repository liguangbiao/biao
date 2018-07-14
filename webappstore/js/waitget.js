var pagenum=3;
var waitgetlist=Vue.extend({
    template:'<a><img :src="item.src"><p><span>{{item.intro}}</span><span>订单号:{{item.paynum}}</span></p><div><span>待收货</span><span>￥{{item.price}}</span></div></a>',
    props:["item","waitgetclothes"]
});
Vue.component('waitgetlist',waitgetlist);
Mock.mock(
    'http://mockjs', {
        'waitgetclothes|1-10':[{
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
        waitgetclothes:[]
    },
    mounted:function () {
        this.loadData()
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.waitgetclothes=res.waitgetclothes;
                self.head=res.src;
                self.name=res.name
            })
        },
    }
});