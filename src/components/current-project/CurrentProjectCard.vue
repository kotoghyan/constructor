<template>
  <v-card
    width="376px"
    class="current-project-card-root"
    elevation="0"
    variant="outlined"
  >
    <div class="current-project-card-header-root">
      <div class="d-flex justify-lg-start align-center ga-2">
        <span>№{{ card.numero }}</span>
        <div class="current-project-card-header-dot"/>
        <span>{{ card.date }}</span>
      </div>
      <v-chip
        :color="cardStatusColor"
        active-class="current-project-card-header-chip-active"
      >
        {{ card.statusText }}
      </v-chip>
    </div>
    <v-divider></v-divider>
    <div class="current-project-card-content">
      <div class="d-flex align-center justify-start ga-4">
        <img src="/src/assets/icons/building-07.svg">
        <span>{{ card.placeType }}</span>
      </div>
      <div class="d-flex align-center justify-start ga-4">
        <img src="/src/assets/icons/marker-pin-01.svg">
        <span>{{ card.address }}</span>
      </div>
      <div class="d-flex align-center justify-start ga-4">
        <img src="/src/assets/icons/user-01.svg">
        <span>{{ card.user }}</span>
      </div>
      <div class="d-flex align-center justify-start ga-4">
        <img src="/src/assets/icons/mail-01.svg">
        <span>{{ card.email }}</span>
      </div>
      <div class="d-flex align-center justify-start ga-4">
        <img src="/src/assets/icons/phone.svg">
        <span>{{ card.phone }}</span>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CurrentProjectCard",

  props: {
    card: {
      type: Object,
      required: true
    },
  },

  computed: {
    cardStatusColor() {
      console.log(this.$router, 'this.card.status')
      if (this.card.status === 'in-progress') {
        return '#0F4EA7';
      }
      if (this.card.status === 'completed') {
        return '#0F4EA7';
      }

      if (this.card.status === 'draft') {
        return '#B07225';
      }
    }
  }
}
</script>


<style>
.current-project-card-header-root {
  padding: 16px 16px 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  .v-chip {
    border-radius: 8px;
  }
}

.current-project-card-header-dot {
  width: 4px;
  height: 4px;
  background-color: rgba(70, 70, 70, 0.6);
  border-radius: 50%;
}

.current-project-card-root.current-project-card-root {
  border-radius: 8px;
  border: 1px solid rgba(70, 70, 70, 0.1);
  padding: 0;
  margin: 0;

}

.current-projects-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 100%;
}

.current-project-card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;

  span {
    font-size: 14px;
    font-weight: var(--font-w-regular);
    line-height: 17px;
    letter-spacing: 0;
    text-align: left;
    color: var(--default-text-color);
  }
}
</style>
