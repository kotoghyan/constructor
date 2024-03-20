<template>
  <div class="header-root">
    <div class="header-container">
      <img src="/src/assets/logo.png" alt="avatar">
      <div>
        <v-btn
          v-for="(btn, i) of buttons"
          variant="text"
          :key="btn.link"
          class="header-link-button"
          :class="{ 'active-link-button': activeButton === i }"
          @click="setActiveButton(i)"
        >
          {{ btn.title }}
        </v-btn>
      </div>
      <div class="d-flex justify-center align-center ga-2 cursor-pointer">
        <span class="header-user-name">Иван Иванов</span>
        <img src="/src/assets/avatar.png " alt="avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      activeButton: 0,
      buttons: [
        {
          title: 'Проекты',
          link: '/projects'
        },
        {
          title: 'Документы',
          link: '/documents'
        },
        {
          title: 'Настройки',
          link: '/settings'
        }
      ]
    }
  },

  methods: {
    setActiveButton(index) {
      this.activeButton = index;
    }
  }
}
</script>

<style scoped>
.header-root {
  color: white;
  background-color: #19283F;
  display: flex;
  justify-content: center;
}

.header-container {
  max-width: 1160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
}

.header-link-button {
  color: #AEB1B6;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: var(--font-w-semi-bold);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;

}

.active-link-button {
  color: #FFFFFF;
}

.header-user-name {
  font-size: 14px;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;

}
</style>
