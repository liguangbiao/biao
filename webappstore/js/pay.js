Mock.mock(
    'http://mockjs', {

                'ordernum|1-9879465464554':44645645,
                'price|1-1000':654,
                'address':"@cparagraph()"
    });
new Vue({
    el:"#content",
    data:{
        count:0,
        ordernum:null,
        price:null,
        address:null
    },
    mounted:function () {
        this.loadData();
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.ordernum=res.ordernum;
                self.price=res.price;
                self.address=res.address;
            })
        },
        choose:function (num) {
            this.count=num
        },
        checkpay:function () {
            if(this.count===0){
                layer.open({
                    content: '请选择支付方式！',
                    style: 'background-color:rgba(189,164,122,0.5); color:white; border:none;font-size:1rem;',
                    time:2
                });
            }else {
                layer.open({
                    content:"输入你的支付密码！",
                    btn:["确认付款","放弃付款"],
                    yes:function () {
                        window.location.href="paysucess.html"
                    }
                })
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