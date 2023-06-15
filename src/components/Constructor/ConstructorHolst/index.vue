<template>
  <div class="canvas">
    <iframe :srcdoc="html" frameborder="0"></iframe>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {useConstructorStore} from "@/store/constructor";

export default {
  name: "ConstructorHolst",
  setup(){
    const constructorStore = useConstructorStore()
    const html = computed(() => constructorStore.getHtml)

    return {html}
  }
};
</script>

<style>
.canvas {
  /* Добавьте стили для вашего "холста" */
  all: unset;

}

.canvas *:not(title) {
  /* Сбрасывает стили наследуемых элементов внутри "холста" */
  all: unset;
}
.canvas .holst{
  min-height: 100vh;
}
</style>
