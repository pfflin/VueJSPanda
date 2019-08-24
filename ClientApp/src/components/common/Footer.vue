<template>
  <div class="wrapper">
    <div v-if="loader" class="background">
      </div>
    <div v-if="loader" class="gooey">
  <span class="dot"></span>
  <div class="dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
  
</div>
    <h3>Time Remaining for Lunch Order: </h3>
   <h2>{{time}}</h2>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
   export default {
  name: '',
  methods: {
      getTime(){
        let that = this;
        const deadline = {
          hours:17
          ,minutes:59
          ,seconds:59}
          setTimeout(function(){
          let date = new Date();
           if(deadline.hours - date.getHours() < 0){
               that.$store.commit('time',"No more orders for today")
           }else if(deadline.hours - date.getHours() < 5){
               that.$store.commit('time', `${deadline.hours - date.getHours()}:${deadline.minutes - date.getMinutes()}:${deadline.seconds - date.getSeconds()}`)
                 that.getTime();
           }
          },1000);
        }
      
    },
    computed: {
      time:function(){
        
        return this.$store.state.time;
      },
      loader:function(){
        return this.$store.state.loader;
      }
    },
    mounted(){
      this.getTime()
    }
}
</script>

<style scoped>
.wrapper{
  background-color:rgba(248, 249, 250, 0.39);
}
.background{
  height: 100vh;
  width:100%;
  background: white;
  position: absolute;
  top:0;
}
.gooey{


  position: absolute;
  top: 50%;
  left: 50%;
  width: 142px;
  height: 40px;
  margin: -20px 0 0 -71px;
  background: white;
  filter: contrast(20);
}
  .dot{
 position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 15px;
    filter: blur(4px);
    background: #000;
    border-radius: 50%;
    transform: translateX(0);
    animation: dot 2.8s infinite;
  }
   
  .dots{
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 2.8s infinite;
  }
    span{
      display: block;
      float: left;
      width: 16px;
      height: 16px;
      margin-left: 16px;
      filter: blur(4px);
      background: #000;
      border-radius: 50%;
    }
@keyframes dot {
  
  50%{transform: translateX(96px);}  
}
  
@keyframes dots{
  50%{transform: translateX(-31px)}
    
}

</style>
