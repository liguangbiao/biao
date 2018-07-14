var pagenum=3;
var user=[
    {
        username: "admin",
        password: 123456
    }
];
// function regist() {
//     layer.closeAll();
//     layer.open({
//         type:1,
//         content:"<input type='text' placeholder='请输入注册的用户名' id='username'>" +
//         "<input type='password' placeholder='请输入注册密码' id='userpassword'>",
//         anim:"up",
//         btn:["确认注册","取消"],
//         yes:function (a) {
//             user.push({username:document.getElementById("username").value,
//                 password:document.getElementById("userpassword").value});
//             layer.open({
//                 content:"注册成功！",
//                 skin:"msg",
//                 time:2
//             });
//             layer.close(a);
//         }
//     });
// }
new Vue({
    el:"#content",
    data:{
        head:"images/userport.png",
        name:"登录or注册",
        money:"",
        // head:"images/head1.jpg",
        // name:"小黄",
        // money:"88888",
    },
    methods:{
        // login:function () {
        //     layer.open({
        //         type:1,
        //         content:"<input type='text' placeholder='请输入用户名' id='username'>" +
        //         "<input type='password' placeholder='请输入密码' id='userpassword'>" +
        //         "<a href='javascript:' onclick='regist()'>没有账号？点击这里注册.</a>",
        //         anim:"up",
        //         btn:["确认登录","取消"],
        //         yes:function (a) {
        //             for (var i=0;i<user.length;i++){
        //                 if(document.getElementById("username").value==user[i].username &&
        //                     document.getElementById("userpassword").value==user[i].password){
        //                     layer.closeAll();
        //                     layer.open({
        //                         content:"登录成功！",
        //                         skin:"msg",
        //                         time:2
        //                     });
        //                     setTimeout("window.location.href=\'user1.html'",800)
        //                 }else {
        //                     layer.open({
        //                         content:"用户名密码错误！",
        //                         skin:"msg",
        //                         time:2
        //                     });
        //                 }
        //             }
        //         }
        //     });
        // }
    }
});