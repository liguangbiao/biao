var pagenum=0;
Mock.mock(
    'http://mockjs1', {
        "backgroundimageurls|1-3":["images/clothes1.jpg","images/clothes2.jpg","images/clothes3.jpg"],
    }
);
Mock.mock(
    'http://mockjs2', {
        "selectlist":["精品男装","精品女装","优质上衣","大气档次"],
    }
);
Mock.mock(
    'http://mockjs3', {
        "kindnames":[
            {
                kindname:"猜你喜欢",
                'lists|1-6':[
                    {
                        'src|1':["images/goods1.jpg","images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
                        intro:"@cparagraph()",
                        'price|1-1000':1,
                        'likeperson|1-999':454
                    },
                ]
            },
            {
                kindname:"大牌皮夹克",
                'lists|1-6':[
                    {
                        'src|1':["images/goods1.jpg","images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
                        intro:"@cparagraph()",
                        'price|1-1000':1,
                        'likeperson|1-999':454
                    },
                ]
            },
            {
                kindname:"哈伦裤",
                'lists|1-6':[
                    {
                        'src|1':["images/goods1.jpg","images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
                        intro:"@cparagraph()",
                        'price|1-1000':1,
                        'likeperson|1-999':454
                    },
                ]
            }
        ],

    }
);
// 轮播图下侧分栏目
Vue.component('topselect',{
    template:'<a href="kind.html" :item="item">{{item}}</a>',
    props:["item"]
}),
    // 首页分类组件
    Vue.component('index-kind',{
        template:'<div class="content"><div class=content-wrap><div><span>{{item.kindname}}</span><a href="javascript:">更多</a></div><ul class="content-inside"><index-kind-list v-for="list in item.lists" :src="src" :intro="intro" :price="price" :likeperson="likeperson" :list="list"></index-kind-list></ul></div></div>',
        props:["kindnames","src","intro","price","likeperson","item","list"]
    }),
    // 同一类的衣服
    Vue.component('index-kind-list',{
        template:'<li><a href="clothesdetails.html"><img :src="list.src"><span>{{list.intro}}</span></a><div class="inside-bottom"><a href="javascript:"><span class="price">￥{{list.price}}</span></a><a class="likenum"><span>{{list.likeperson}}</span><img src="images/like.png" @click="changelike" :class="{nolike:!isLike,like:isLike}"></a></div></li>',
        props:["src","intro","price","likeperson","kindnames","list"],
        data:function () {
            return{
                isLike:false
            }
        },
        methods:{
            changelike:function () {
                this.isLike=!this.isLike;
                if(this.isLike){
                    this.list.likeperson+=1;
                }else {
                    this.list.likeperson-=1;
                }
            }
        }
    });

new Vue({
    el:"#main",
    data:{
        selectlist:[],
        kindnames:[]
    },
    mounted:function () {
        this.loadData();
    },
    methods:{
      loadData:function () {
          let self=this;
          $.get("http://mockjs2",function (aaa) {
              var res=JSON.parse(aaa);
              self.selectlist=res.selectlist;
          });
          $.get("http://mockjs3",function (aaa) {
              var res=JSON.parse(aaa);
              self.kindnames=res.kindnames;
          })
      },
    },
});
new Vue({
    el:"#banner",
    data:{
        backgroundimageurls:[],
        now:"",
        count:"0",
        isActive:0,
        startX:null,
        startY:null
    },
    watch:{
        count:function () {
            this.now=this.backgroundimageurls[this.count];
            this.isActive=this.count;
        }
    },
    methods: {
        loadData:function () {
            let self=this;
            $.get("http://mockjs1",function (aaa) {
                var res=JSON.parse(aaa);
                self.backgroundimageurls=res.backgroundimageurls;
                this.success(self.changeimage());
            });
        },
        changeimage: function () {
            this.count = (this.count + 1) % this.backgroundimageurls.length;
            setTimeout(this.changeimage, 4000);
        },
        changecount: function (index) {
            this.count = index;
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
                if(this.count == 2){
                    this.count=0;
                }else {
                    this.count+=1;
                }
            }else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50){
                if(this.count == 0){
                    this.count=2;
                }else {
                    this.count-=1;
                }
            }
        }
    },
    mounted:function(){
        this.loadData();
    },
});