<template>
  <div class="">
    <div class="vars">
      <a-list v-if="vars" size="small" bordered :data-source="vars">
        <template #renderItem="{ item }">
          <a-list-item>
            <span style="display: inline-block;width: 15px;height: 15px" :style="{'background': item.value}"></span>
            ${{ item.key }}: {{item.value}}
            <template #actions>
              <a key="list-loadmore-edit" @click="removeScssVariables(item.key)">remove</a>
            </template>
          </a-list-item>
        </template>
        <template #header>
          <div>Vars</div>
        </template>
      </a-list>

      <a-textarea
          v-model:value="value1"
          placeholder="Add vars"
          auto-size
          style="margin-bottom: 5px"
      />
      <a-button @click="convertString" type="dashed">Add vars</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref} from "vue";
import {convertStringToSCSSVariables} from "@/assets/helpers/stringToSCSSVariables";
import {useConstructorStore} from "@/store/constructor";

export default {
  name: "panelStyles",
  setup() {
    const value1 = ref('');
    const constructorStore = useConstructorStore()
    const vars = computed(() => constructorStore.getVars)

    const convertString = () => {
      constructorStore.setVars(convertStringToSCSSVariables(value1.value))
      value1.value = ''
    };
    const removeScssVariables = (key: string) => {
      constructorStore.removeVars(key)
    }

    return {value1, convertString,removeScssVariables, vars}
  }
}
</script>

<style scoped>
.vars {
  text-align: left;
}
</style>