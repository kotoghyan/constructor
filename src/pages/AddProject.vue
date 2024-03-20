<template>
<div class="add-project-root">
  <AddProjectComponent />
</div>
</template>

<script>
import AddProjectComponent from "@/components/add-project/AddProjectComponent.vue";

export default {
  name: "AddProject",
  components: {AddProjectComponent}
}
</script>

<style scoped>
.add-project-root{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
</style>
