<template>
  <v-breadcrumbs
    class="add-project-breadcrumbs"
    :items="items"
    active-color="rgba(120, 123, 132, 1)"
    @click="(el) => {console.log(el)}"
  >
    <template v-slot:divider>
      <v-icon
        icon="mdi-chevron-right"
        color="rgba(174, 177, 182, 1)"
      ></v-icon>
    </template>

    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :color="item.color"
      >
        {{ item.title }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: "AddProjectComponentBreadcrumbs",

  data: () => ({
    items: [
      {
        title: 'Проекты',
        disabled: false,
        href: '/',
      },
      {
        title: 'Новый проект',
        disabled: false,
        href: '/',
      },
      {
        title: 'Продвинутый режим',
        disabled: false,
        href: '/',
      },
      {
        title: 'Коммерческое предложение',
        disabled: false,
        href: '/add-project',
      },
    ],
  }),

  mounted() {
    this.items.forEach((item, i) => {
      if (this.$route.path === item.href) {
        this.items[i].color = 'rgba(120, 123, 132, 1)';
      }
    });
  },
}
</script>

<style>
.add-project-breadcrumbs {
  color: var(--default-text-color);
  font-size: 14px;
  font-weight: var(--font-w-medium);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 !important;

  li {
    padding: 0;
  }

  .mdi-chevron-right::before {
    width: 20px;
    height: 20px;
  }
}
</style>
