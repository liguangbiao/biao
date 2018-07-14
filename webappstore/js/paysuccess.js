Mock.mock(
    'http://mockjs', {
        'integral|10-1000':45
    }
);
new Vue({
    el:"#content",
    data:{
        integral:null
    },
    mounted:function () {
        this.loadData()
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.integral=res.integral
            })
        }
    }
})