Mock.mock(
    'http://mockjs', {
        'name':'@csentence(2)',
        'phone|10000-987465465':654,
        'address':'@csentence(10, 50)',
        'youzheng|321-65461':654
    }
);
new Vue({
    el:"#content",
    data:{
        name:null,
        phone:null,
        address:null,
        youzheng:null
    },
    mounted:function () {
        this.loadData()
    },
    methods: {
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.name=res.name;
                self.phone=res.phone;
                self.address=res.address;
                self.youzheng=res.youzheng;
            })
        },
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