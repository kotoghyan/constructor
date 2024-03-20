<template>
  <div class="current-projects-root">
    <div class="current-projects-container">
      <!-- CURRENT PROJECT HEADER -->
      <div class="current-projects-header-container">
        <h1 class="current-projects-header-title">
          Текущие проекты
        </h1>
        <v-btn
          prepend-icon="$plus"
          variant="outlined"
          color="#19283F"
          class="current-projects-new-projects-button"
          @click="$router.push('/add-project')"
        >
          Новый проект
        </v-btn>
      </div>
      <!-- CURRENT PROJECT SEARCH INPUT -->
      <div class="current-projects-input-container">
        <v-text-field
          append-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          placeholder="Поиск"
          class="current-projects-search-input"
          rounded="xs"
        ></v-text-field>
        <div class="d-flex justify-center align-center current-projects-input-view-buttons-group">
          <v-btn-toggle
            v-model="toggle_exclusive"
            variant="outlined"
          >
            <v-btn
              class="current-projects-input-view-buttons"
            >
              <template v-slot:default>
                <img src="/src/assets/icons/grid.svg" alt="gridIcon">
              </template>
            </v-btn>
            <v-btn
              class="current-projects-input-view-buttons"
            >
              <template v-slot:default>
                <img src="/src/assets/icons/list.svg" alt="listIcon">
              </template>
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
      <!-- CURRENT PROJECT CARDS -->
      <div
        class="current-projects-cards-container"
        :class="{ 'flex-column': toggle_exclusive === 1 }"
      >
        <div
          v-for="(card, i) in cardInfo"
          :key="card+i"
        >
          <CurrentProjectCard :card="card" viewState="toggle_exclusive"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentProjectCard from "@/components/current-project/CurrentProjectCard.vue";

export default {
  name: "CurrentProjects",
  components: {CurrentProjectCard},

  data: () => ({
    toggle_exclusive: 0,
    cardInfo: [
      {
        numero: 2500,
        date: '9 января 2024',
        statusText: 'В работе',
        status: 'in-progress',
        titleCompany: 'АО «Компакт»',
        placeType: 'Логистический парк',
        address: 'г. Тверь, ул. Ленина, 25',
        user: 'Смирнов Николай Николаевич',
        email: 'smirnov@smirnov.ru',
        phone: '+7 915 915-25-25'
      },
      {
        numero: 2501,
        date: '6 января 2024',
        statusText: 'Черновик',
        status: 'draft',
        titleCompany: 'ООО «Эффективные решения»',
        placeType: 'Транспортный центр',
        address: 'г. Москва, ул. Центральная, 10',
        user: 'Иванов Сергей Сергеевич',
        email: 'ivanov@ivanov.ru',
        phone: '+7 915 915-25-25'
      },
      {
        numero: 2502,
        date: '9 января 2024',
        statusText: 'В работе',
        status: 'in-progress',
        titleCompany: 'ЗАО «ЛогистикСервис»',
        placeType: 'Складской комплекс',
        address: 'г. Санкт-Петербург, ул. Ленина, 12',
        user: 'Петров Андрей Андреевич',
        email: 'petrov@petrov.ru',
        phone: '+7 915 915-25-25'
      },
      {
        numero: 2504,
        date: '9 января 2024',
        statusText: 'черновик',
        status: 'draft',
        titleCompany: 'ИП «ТранспортЛогистика»',
        placeType: 'Дистрибуционный центр',
        address: 'г. Ижевск, ул. Центральная, 10',
        user: 'Сидоров Александр Александрович',
        email: 'sidorov@sidorov.ru',
        phone: '+7 915 915-25-25'
      },
      {
        numero: 2500,
        date: '2 января 2024',
        statusText: 'Завершен',
        status: 'done',
        titleCompany: 'АО «Компакт»',
        placeType: 'Центр логистики',
        address: 'г. Тверь, ул. Ленина, 25',
        user: 'Смирнов Николай Николаевич',
        email: 'smirnov@smirnov.ru',
        phone: '+7 915 915-25-25'
      }
    ]
  }),
}
</script>

<style lang="scss">
.current-projects-root {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

.current-projects-container {
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.current-projects-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.current-projects-header-title {
  font-size: 28px;
  font-weight: var(--font-w-semi-bold);
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
  color: var(--default-text-color);
}

.current-projects-new-projects-button {
  font-size: 14px;
  font-weight: var(--font-w-regular);
  letter-spacing: 0;
  text-align: left;
  padding: 10px 16px 10px 12px;
  border-radius: 8px;

  .v-btn__prepend {
    margin-inline: unset;
    margin-right: 8px;
  }
}

.current-projects-input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.current-projects-search-input {
  font-size: 14px;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  max-width: 320px;
  height: 100%;
  border-radius: 8px;

  .v-field__input {
    padding: 10px 8px 10px 12px;
  }

  .v-field__input::placeholder {
    font-size: 14px;
    font-weight: var(--font-w-regular);
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;

  }

  .v-field--center-affix {
    border-radius: 8px;
  }

  .v-field__append-inner {
    cursor: pointer;
  }
}

.current-projects-input-view-buttons-group {
  .v-btn--active {
    background-color: #F9F9F9;

    .v-btn__overlay {
      background-color: transparent;
    }
  }

  .v-btn-group .v-btn:not(:last-child) {
    border-right: 1px solid #E8E9EA;
  }
}
</style>
