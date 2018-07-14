var pagenum=1;
// 第一级导航组件
Vue.component('firstnav',{
    template:'<li><a :class="{navactive:index === isactive}" @click="act">{{firstname.page}}</a></li> ',
    props:["firstname","isactive","index"],
    methods:{
        act:function () {
            this.$emit("actsave");
        }
    }
});
// 创建并且注册第二级组件
var secondnav=Vue.extend({
    template:'<div><span>{{item.secondname}}</span><ul class="inside-nav"><third-nav v-for="list in item.lists" :list="list" ></third-nav></ul></div>',
    props:["item",'list',"secondname","lists"]
});
Vue.component('second-nav',secondnav);
// 创建并且注册第三级组件
var thirdnav=Vue.extend({
    template:'<li><a href="clothes.html"><img :src="list.src"><span>{{list.thirdkind}}</span></a></li> ',
    props:["list","src","thirdkind"]
});
Vue.component('third-nav',thirdnav);

const routes = [
    {path:'/page1',component:secondnav}
];
const router = new VueRouter({
    routes:routes
});
Mock.mock(
    'http://mockjs', {
        "pages|1-6":[
            {
                'page':"为你推荐",
                'secondnames|1-2':[
                    {
                        secondname:'新品T-shirt1',
                        'lists|1-9':[
                            {
                                src:"images/navclothes.jpg",
                                thirdkind:"纯色T-shirt"
                            },
                        ]
                    },
                    {
                        secondname:'新品T-shirt1',
                        'lists|1-9':[
                            {
                                src:"images/navclothes.jpg",
                                thirdkind:"纯色T-shirt"
                            },
                        ]
                    },
                    {
                        secondname:'新品T-shirt1',
                        'lists|1-9':[
                            {
                                src:"images/navclothes.jpg",
                                thirdkind:"纯色T-shirt"
                            },
                        ]
                    },
                    {
                        secondname:'新品T-shirt',
                        'lists|1-9':[
                            {
                                src:"images/navclothes.jpg",
                                thirdkind:"纯色T-shirt"
                            },
                        ]
                    },
                    {
                        secondname:'新品T-shirt',
                        'lists|1-9':[
                            {
                                src:"images/navclothes.jpg",
                                thirdkind:"纯色T-shirt"
                            },
                        ]
                    }
                ]
            },
            {
                'page':"男士上装",
                'secondnames|1-3':[
    {
        secondname:'新品T-shirt2',
        'lists|1-9':[
            {
                src:"images/navclothes.jpg",
                thirdkind:"纯色T-shirt"
            },
        ]
    },
    {
        secondname:'新品T-shirt',
        'lists|1-9':[
            {
                src:"images/navclothes.jpg",
                thirdkind:"纯色T-shirt"
            },
        ]
    },
    {
        secondname:'新品T-shirt',
        'lists|1-9':[
            {
                src:"images/navclothes.jpg",
                thirdkind:"纯色T-shirt"
            },
        ]
    }
]
            },
            {
                'page':"女士上装",
                'secondnames|1-3':[
    {
        secondname:'新品T-shirt3',
        'lists|1-9':[
            {
                src:"images/navclothes.jpg",
                thirdkind:"纯色T-shirt"
            },
        ]
    },
    {
        secondname:'新品T-shirt',
        'lists|1-9':[
            {
                src:"images/navclothes.jpg",
                thirdkind:"纯色T-shirt"
            },
        ]
    },
    {
        secondname:'新品T-shirt',
        'lists|1-9':[
            {
                src:"images/navclothes.jpg",
                thirdkind:"纯色T-shirt"
            },
        ]
    }
]
            }
            ]
    });
new Vue({
    el:"#wrap",
    data:{
        isactive:0,
        pagenum:0,
        isfix:false,
        pages:[]
    },
    mounted:function () {
      this.loadData();
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.pages=res.pages;
            })
        },
        save:function (index) {
            this.pagenum=index;
            this.isactive=index;
            window.scrollTo(0,0)
        }
    },
    router
});
var mo=new MutationObserver(function () {
    var wheight=document.documentElement.clientHeight;
    var hheight=parseInt($("#header").css("height"));
    var zheight=wheight-hheight-64;
    $(".nav").css("height",zheight);
    $("#content").css("height",zheight);
});
var options={
    'childList':true,
    'attributes':true
};
mo.observe(document.body,options);
