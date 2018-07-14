<template>
   <div>
       <p>{{message}}</p>
       <button @click="getRouterMessage" class="btn btn-success">获取路由信息</button>
       <p>query传参：{{$route.query}}</p>
       <p>params传参：{{$route.params}}</p>
   </div>
</template>

<script>
export default {
  name: 'routerReceive',
  data () {
    return {
      message:'this is the routerReceive Page',
    }
  },
  methods:{
    getRouterMessage(){
      console.log(this.$route.query.query)
       console.log(this.$el);
       console.log(this.$route.params.idObj.id);
    }
  },
  mounted:()=>{
    console.log('fff');
    // console.log(this.$data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
