var pagenum=3;
Mock.mock(
    'http://mockjs', {
        'src|1':["images/navclothes.jpg","images/details-3.jpg","images/goods1.jpg"],
         'name':'@csentence(4)',
        'money|1-1000':221,
        'address':"@cparagraph()",
        'integral|10-999':64
    });
new Vue({
    el:"#content",
    data:{
        head:null,
        name:null,
        money:null,
        address:null,
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
                self.head=res.src;
                self.name=res.name;
                self.money=res.money;
                self.address=res.address;
                self.integral=res.integral
            })
        }
    }
});