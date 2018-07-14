var pagenum=1;
var clotheslist=Vue.extend({
    template:'<a href="clothesdetails.html"><img :src="item.src"><div><span>{{item.intro}}</span><div><span>￥{{item.price}}</span><span><span>销量：{{item.sale}}</span><span>{{item.time}}</span></span></div></div></a>',
    props:["item"]
});
Vue.component('clothes-list',clotheslist);
Mock.mock(
    'http://mockjs', {
       'clothes|1-100': [
           {
               'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
               intro:"@cparagraph()",
               'price|1-1000':1,
               'sale|1-500':125,
               time:'@date("yyyy-MM-dd")',
               order:""
           }
       ]
    });
new Vue({
    el:"#wrap",
    data:{
        select:["人气","价格","上架时间"],
        isactive:'',
        sort:{
            0: true,
            1: false,
            2: true
        },
        clothes:[]
    },
    mounted:function () {
        this.loadData()
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.clothes=res.clothes
            })
        },
        change:function (index) {
            this.isactive=index;
            switch (index){
                case 0:
                    if(this.sort[0]){
                        this.clothes.forEach(function (item) {
                            item.order=item.sale;
                        });
                        this.sort[0]=!this.sort[0];
                    }else {
                        this.clothes.forEach(function (item) {
                            item.order=0-item.sale;
                        });
                        this.sort[0]=!this.sort[0];
                    }
                    break;
                case 1:
                    if(this.sort[1]){
                        this.clothes.forEach(function (item) {
                            item.order=item.price;
                        });
                        this.sort[1]=!this.sort[1];
                    }else {
                        this.clothes.forEach(function (item) {
                            item.order=0-item.price;
                        });
                        this.sort[1]=!this.sort[1];
                    }
                    break;
                case 2:
                    if(this.sort[2]){
                        this.clothes.forEach(function (item) {
                            item.order=parseInt(item.time.replace(/-/g,""));
                        });
                        this.sort[2]=!this.sort[2];
                    }else {
                        this.clothes.forEach(function (item) {
                            item.order=0-parseInt(item.time.replace(/-/g,""));
                        });
                        this.sort[2]=!this.sort[2];
                    }
                    break;
            }
        }
    }
});