var addclothes=Vue.extend({
    template:'<div class="choose"><a><img :src="item.src"></a><div><span><a href="clothesdetails.html">{{item.intro}}</a><span>￥{{item.price}}</span></span><span>{{item.size}}/{{item.color}}</span><div class="count"><div><a @click="minus(index)" :class="{opa:item.amount<=1}">-</a><span>{{item.amount}}</span><a @click="add(index)">+</a></div><a @click="remove(index)">×</a></div></div><p>花费：<em :class="{hide:item.amount<=1}"><span>￥{{item.price}}</span>×{{item.amount}}=</em><span>￥{{item.price*item.amount}}</span></p></div>',
    props:["item","index"],
    methods:{
        add:function (index) {
            this.$emit("addone",index)
        },
        minus:function (index) {
            this.$emit("minusone",index)
        },
        remove:function (index) {
            this.$emit("removeclothes",index)
        }
    }
});
Vue.component('add-clothes',addclothes);
Mock.mock(
    'http://mockjs', {
        'selectclothes|1-5':[
            {
                'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
                intro:"@cparagraph()",
                'price|1-1000':888,
                'size|1':["S","M","L","XL","XXL"],
                'color|1':["黑色","白色","黄色","蓝色","橘色"],
                amount:1
            }
        ]
    });
new Vue({
    el:"#wrap",
    data:{
        selectclothes:[]
    },
    mounted:function () {
        this.loadData();
    },
    computed:{
        total:function () {
            var count=0;
            this.selectclothes.forEach(function (item) {
                count+=item.price*item.amount
            });
            return count;
        }
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.selectclothes=res.selectclothes
            })
        },
        addone:function (index) {
            this.selectclothes[index].amount+=1;
        },
        minusone:function (index) {
            if(this.selectclothes[index].amount<=1){
                return false
            }else {
                this.selectclothes[index].amount-=1
            }
        },
        removeclothes:function (index) {
            this.selectclothes.splice(index,1)
        },
        pay:function () {
            if(this.total===0){
                layer.open({
                    content: '购物车空空如也！',
                    style: 'background-color:rgba(189,164,122,0.5); color:white; border:none;font-size:1rem;',
                    time:2
                });
                return false
            }else {
                window.location.href="pay.html"
            }
        }
    }
});
new Vue({
    el:"#subnav",
    data:{
        isActive:false
    },
    methods:{
        change:function () {
            this.isActive=!this.isActive
        }
    }
})