Mock.mock(
    'http://mockjs', {
        "src" : ["images/clothes1.jpg","images/details-1.jpg","images/clothes5.jpg","images/details-3.jpg"],
        "jiage|1-10000":10000,
        "content"  : "@cparagraph()",
        "daxiao"   :["S","M","L","XL","XXL"],
        "yanse"    :["黑色","白色","黄色","蓝色","橘色"],
    }
);
Mock.mock(
    'http://mockjs1',{
        "xinxi"    :{
            origin:'@cword(1, 4)',
            place:'@cword(1, 4)',
            fabric:'@cword(1, 4)',
            people:'@cword(1, 4)',
            material:'@cword(1, 4)',
            wash:'@cword(10, 20)',
            serial:'@cword(1, 4)',
            images:["images/details-1.jpg","images/details-2.jpg","images/details-3.jpg","images/details-4.jpg","images/details-5.jpg"]
        }
    }
);
var selectsize=Vue.extend({
    template:'<li><a class="notchoose" :class="{choose:index === choosesize}" @click="activesize(index)">{{item}}</a></li>',
    props:["index","item","choosesize"],
    methods:{
        activesize:function (index) {
            this.$emit("actsize",index)
        }
    }
});
Vue.component('select-size',selectsize);
var selectcolor=Vue.extend({
    template:'<li><a class="notchoose":class="{choose:index === choosecolor}" @click="activecolor(index)">{{item}}</a></li>',
    props:["index","item","choosecolor"],
    methods:{
        activecolor:function (index) {
            this.$emit("actcolor",index)
        }
    }
});
Vue.component('select-color',selectcolor);
new Vue({
    el:"#wrap",
    data:{
        src:[],
        price:null,
        intro:"",
        size:[],
        color:[],
        choosesize:'',
        choosecolor:'',
        carCount:null,
        isActive:0,
        message:{}
    },
    mounted:function () {
        this.loadData();
    },
    computed:{
        width:function () {
            return this.src.length*100
        },
        widths:function () {
            return 100/this.src.length
        },
        marginLeft:function () {
            return this.isActive*-100
        }
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.src=res.src;
                self.price=res.jiage;
                self.intro=res.content;
                self.size=res.daxiao;
                self.color=res.yanse;
            });
            $.get("http://mockjs1",function (aaa) {
                var res=JSON.parse(aaa);
                self.message=res.xinxi;
            })
        },
        handletouchstart:function () {
            this.startX = event.changedTouches[0].pageX;
            this.startY = event.changedTouches[0].pageY;
        },
        handletouchend:function () {
            var endX = event.changedTouches[0].pageX;
            var endY = event.changedTouches[0].pageY;
            var distanceX  = endX - this.startX;
            var distanceY = endY - this.startY;
            if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 50){
                if(this.isActive==this.src.length-1){
                    this.isActive=0
                }else {
                    this.isActive+=1
                }
            }else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50){
                if(this.isActive==0){
                    this.isActive=this.src.length-1
                }else {
                    this.isActive-=1
                }
            }
        },
        actsize:function (index) {
            this.choosesize=index
        },
        actcolor:function (index) {
            this.choosecolor=index
        },
        addcarcount:function () {
            if(this.choosesize===""){
                layer.open({
                    content: '请选择您合适的尺寸！',
                    skin:"msg",
                    style: 'background-color:rgba(189,164,122); color:white; border:none;font-size:1rem;',
                    time:2
                });
                return false
            }
            if(this.choosecolor===""){
                layer.open({
                    content: '请选择您需要的颜色！',
                    skin:"msg",
                    style: 'background-color:rgba(189,164,122); color:white; border:none;font-size:1rem;',
                    time:2
                });
                return false
            }
            this.carCount+=1;
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