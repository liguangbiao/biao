Mock.mock(
    'http://mockjs', {
        'address|1-4':[{
            'name':'@csentence(2)',
            'phone|10000-987465465':654,
            'address':'@csentence(10, 50)'
        }]
    }
);
new Vue({
    el:"#main",
    data:{
        isactive:null,
        addresses:[]
    },
    computed:{
        total:function () {
            return this.addresses.length
        }
    },
    mounted:function () {
        this.loadData()
    },
    methods:{
        loadData:function () {
            let self=this;
            $.get("http://mockjs",function (aaa) {
                var res=JSON.parse(aaa);
                self.addresses=res.address
            })
        },
        change:function (index) {
            this.isactive=index
        },
        remove:function (index) {
            event.stopPropagation();
            var r=confirm("确认删除？");
            if(r){
                this.addresses.splice(index,1)
            }else {
                return false
            }
        },
        toeditor:function () {
            event.stopPropagation();
            window.location.href="editoraddress.html"
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