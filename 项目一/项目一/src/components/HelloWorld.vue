<template>
<div>
   <ul>
     <li><a>首页</a></li>
     <li><a>咨询</a></li>
     <li><a>关于</a></li>
     <li><a>下载</a></li>
   </ul>
   <button @click="jump" class="btn btn-primary">点击跳转</button>
   <button class="btn btn-primary" @click="jumpFilter">跳转到task</button>
   <p>{{imgArr | filterString}}</p>
   <img src="../assets/logo.png">
   <img v-for="img in imgArr" :src="img" :key="img.key">
   
   <!-- <div class="flex">
     <a><span>首页</span></a>
     <a><span>咨询</span></a>
     <a><span>关于</span></a>
     <a><span>下载</span></a>
   </div> -->
   <!-- <div id="wrap">
        <div id="box">
            <a href="#" id="one">世界那么大</a>
            <a href="#" id="two">我想去看看</a>
        </div>
    </div> -->
</div>
</template>

<script>
import Mock from 'mockjs'
export default {
  name: "HelloWorld",
  data() {
    return {
      imgArr:[],
    };
  },
  methods: {
    jump() {
      this.$router.push({
        name: "dev",
        query: {
          query: 1
        },
        params: {
          idObj: {
            id: 1,
            id1: 2
          }
        }
      });
    },
    jumpFilter(){
      this.$router.push({
        name:"filter",
      })
    }
  },
  filters:{
    filterString(value){
      if(value){
        return 'hhhh'
      }
    }
  },
  created:function(){
    // console.log(this.axios)
    this.axios.get('../api/data').then((res)=>{
      if(res.data.status == '200'){
         console.log(res.data.data);
         for(let i of res.data.data){
           console.log(i);
           this.imgArr.push(i.pic);
           console.log(Mock)
         }
        
       
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  color: orangered;
}
.flex{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 2px;
 
}
.flex a{
  width: 10%;
  height: 40px;
  border: 1px solid #eee;
  line-height: 40px;
  margin: 0;
  align-self: flex-end;
}
/* button{
  background: #eee;
  border:none;
  box-shadow: 1px 1px #ddd;
  padding: 5px 8px;
} */
#wrap {width: 300px;height: 300px;background: #ccc; margin: 0 auto;position: relative;perspective:1000px;}
#box {position: absolute;left: 50px;width: 200px;height: 200px;border: 1px solid #000;transform-style:preserve-3d; transform-origin: right center;}
#box a {display: block;width: 100%;height: 100%;position: absolute;left: 0;top: 0;font-size: 28px; backface-visibility: hidden;color: #fff}
#box a:nth-of-type(1) {background: blue;transition:transform .8s}
#box a:nth-of-type(2) {background: red;transform:rotateY(-180deg);transition:transform .8s}
#box:hover a:nth-of-type(1) {transform:rotateY(180deg);}
#box:hover a:nth-of-type(2) {transform:rotateY(0deg);}
</style>
