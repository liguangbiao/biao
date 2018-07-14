// 底部组件
Vue.component('bottom',{
    template:'<a :href="item.href" :class="{addborder:index === isactive}" @click="change(index)"><img :src="item.src" class="normal" :class="{changecolor:index === isactive}"><span class="nocolor" :class="{addcolor:index===isactive}">{{item.name}}</span></a>',
        props:["item","index","isactive"],
    methods:{
        change:function (index) {
            this.$emit("parentchange",this.index);
        }
    }
});
// 底部组件实例
new Vue({
    el:"#bottom-nav",
    data:{
        hrefs:[
            {
                src:"images/index.png",
                href:"index.html",
                name:"首页"
            },
            {
                src:"images/kind.png",
                href:"kind.html",
                name:"分类"
            },
            {
                src:"images/shopcar.png",
                href:"car.html",
                name:"购物车"
            },
            {
                src:"images/user.png",
                href:"user.html",
                name:"个人中心"
            }
        ],
        isactive:0
    },
    mounted:function () {
        this.isactive=pagenum
    },
    methods:{
        parentchange:function (index) {
            this.isactive=index
        }
    }
});