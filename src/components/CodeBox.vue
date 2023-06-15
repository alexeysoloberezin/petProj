<template>
    <pre class="code">
      <code>{{ code }}</code>
    </pre>
</template>

<script>
export default {
  name: "CodeBox",
  props: ['code']
}
</script>

<style scoped lang="scss">
.code{
  color: #b4b4b4;
  background: #383636;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
}
</style>