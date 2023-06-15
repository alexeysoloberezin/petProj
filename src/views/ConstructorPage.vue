<template>
 <div class="constructor">
   <div class="constructor-nav">
    <ConstructorNav></ConstructorNav>
   </div>
   <div class="constructor-holst">
    <ConstructorHolst></ConstructorHolst>
   </div>
   <div class="constructor-panel">
    <ConstructorPanel></ConstructorPanel>
   </div>
 </div>
</template>

<script lang="ts">
import ConstructorNav from "@/components/Constructor/ConstructorNav.vue";
import ConstructorPanel from "@/components/Constructor/ConstructorPanel.vue";
import ConstructorHolst from "@/components/Constructor/ConstructorHolst/index.vue";
export default {
  name: "ConstructorPage",
  components: {ConstructorHolst, ConstructorPanel, ConstructorNav}
}
</script>

<style scoped lang="scss">
.constructor{
  &-nav{
    position: fixed;
    top: 0;
    left: 0;
  }
  &-holst{
    margin: 20px 430px 20px 100px;
    background: #fff;
    box-shadow: 0 0 0 5px #000;
  }
  &-panel{
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100vh;
    padding: 10px;
    background: #1f1f1f;
  }
}
</style>