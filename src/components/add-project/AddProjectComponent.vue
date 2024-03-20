<template>
  <div class="add-project-component-root">
    <div>
      <AddProjectComponentBreadcrumbs/>
    </div>
    <h1 class="add-project-component-title">Сформировать коммерческое предложение</h1>
    <div class="add-project-component-constructor">
      <h2 class="add-project-component-constructor-subtitle">Позиция 1</h2>
      <div class="add-project-component-constructor-group">
        <div class="add-project-component-constructor-left mt-4">
          <div class="add-project-component-constructor-left-inputs">
            <SharedSelect
              :options="categorys"
              :item="data.category"
              property="category"
              label="Категория"
              width="448px"
              :delete-button="false"
              @handleSelect="handleChange"
            />
            <SharedNumberInput
              :value="data.count"
              property="count"
              label="Количество"
              width="100px"
              @handleChangeCount="handleChangeCount"
            />
          </div>
          <img src="/src/assets/preview.png" alt="constructor" width="564">
        </div>
        <div class="add-project-component-constructor-right">
          <div class="add-project-component-constructor-right-application-scope">
            <span class="add-project-component-constructor-right-application-scope-label">Сфера применения</span>
            <div class="mt-1">
              <v-slide-group
                v-model="data.scopeOfApplications"
                selected-class="selected-scope-of-application"
                class="add-project-component-constructor-right-application-scope-buttons"
                mandatory
                show-arrows
              >
                <v-slide-group-item
                  v-for="n in scopeOfApplication"
                  :key="n"
                  v-slot="{ isSelected, toggle, selectedClass }"
                >
                  <v-btn
                    :class="selectedClass"
                    @click="toggle"
                    variant="outlined"
                  >
                    {{ n }}
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </div>
          </div>
          <SharedSelect
            :options="purposes"
            :item="data.purpose"
            property="purpose"
            label="Назначение" width="564px"
            :delete-button="false"
            @handleSelect="handleChange"
          />
          <div class="d-flex ga-4">
            <div class="d-flex ga-4 flex-column">
              <SharedSelect
                :options="lengths"
                :item="data.length"
                property="length"
                label="Длина" width="274px"
                placeholder="Длина, м"
                :delete-button="false"
                @handleSelect="handleChange"
              />
              <SharedSelect
                :options="weights"
                :item="data.weight"
                property="weight"
                label="Вес" width="274px"
                placeholder="Вес, кг/м"
                :delete-button="false"
                @handleSelect="handleChange"
              />
              <SharedSelect
                :options="couplingOuterDiameters"
                :item="data.couplingOuterDiameter"
                property="couplingOuterDiameter"
                label="Наружный диаметр муфты" width="274px"
                placeholder="Диаметр, мм"
                :delete-button="false"
                @handleSelect="handleChange"
              />
            </div>
            <div class="d-flex ga-4 flex-column">
              <SharedSelect
                :options="thicknesses"
                :item="data.thickness"
                property="thickness"
                label="Толщина" width="274px"
                placeholder="Толщина, мм"
                :delete-button="false"
                @handleSelect="handleChange"
              />
              <SharedSelect
                :options="couplingInnerDiameters"
                :item="data.couplingInnerDiameter"
                property="couplingInnerDiameter"
                label="Внутренний диаметр муфты" width="274px"
                placeholder="Диаметр, мм"
                :delete-button="false"
                @handleSelect="handleChange"
              />
              <SharedSelect
                :options="couplingWidths"
                :item="data.couplingWidth"
                property="couplingWidth"
                placeholder="Ширина, мм"
                label="Внутренний диаметр муфты" width="274px"
                :delete-button="false"
                @handleSelect="handleChange"
              />
            </div>
          </div>
         </div>
      </div>
      <v-btn
        prepend-icon="$plus"
        variant="tonal"
        class="add-project-component-constructor-add-position-button"
      >
        Добавить позицию
      </v-btn>
      <v-divider class="mt-4"
      ></v-divider>
      <div class="add-project-component-constructor-buttons-container">
        <v-btn
          class="add-project-component-constructor-buttons-container-button"
          variant="text"
          color="rgba(0, 129, 191, 1)"
          @click="clearDataPositions"
        >
          Очистить позиции
        </v-btn>
        <v-btn
          class="add-project-component-constructor-buttons-container-button"
          color="rgba(0, 129, 191, 1)"
          elevation="0"
          @click="dialog = true"
        >
          Сформировать КП
        </v-btn>
      </div>
    </div>
    <ShowNewDocument v-model="dialog" :dialog="dialog" />
  </div>
</template>

<script>
import AddProjectComponentBreadcrumbs from "@/components/add-project/AddProjectComponentBreadcrumbs.vue";
import SharedSelect from "@/shared-component/SharedSelect.vue";
import SharedNumberInput from "@/shared-component/SharedNumberInput.vue";
import ShowNewDocument from "@/components/dialogs/ShowNewDocument.vue";

export default {
  name: "AddProjectComponent",

  components: {ShowNewDocument, SharedNumberInput, SharedSelect, AddProjectComponentBreadcrumbs},

  data: () => ({
    data: {
      category: 'Стеклопластиковые трубы FLOWTECH',
      count: 0,
      scopeOfApplications: 0,
      purpose: 'Трубопроводы систем холодного водоснабжения',
      length: '',
      weight: '',
      couplingOuterDiameter: '',
      thickness: '',
      couplingInnerDiameter: '',
      couplingWidth: '',
    },

    categorys: [{text: 'Стеклопластиковые трубы FLOWTECH', value: 'hello'}],
    scopeOfApplication: ['ЖКХ', 'Сельское хозяйство', 'Другие сферы'],
    purposes: [{text: 'Трубопроводы систем холодного водоснабжения', value: 'hello'}],
    lengths: [{text: '1 м', value: '1'}, {text: '2 м', value: '2'}, {text: '3 м', value: '3'}],
    weights: [{text: '1 кг/м', value: '1'}, {text: '2 кг/м', value: '2'}, {text: '3 кг/м', value: '3'}],
    couplingOuterDiameters: [{text: '1 мм', value: '1'}, {text: '2 мм', value: '2'}, {text: '3 мм', value: '3'}],
    thicknesses: [{text: '1 мм', value: '1'}, {text: '2 мм', value: '2'}, {text: '3 мм', value: '3'}],
    couplingInnerDiameters: [{text: '1 мм', value: '1'}, {text: '2 мм', value: '2'}, {text: '3 мм', value: '3'}],
    couplingWidths: [{text: '1 мм', value: '1'}, {text: '2 мм', value: '2'}, {text: '3 мм', value: '3'}],
    dialog: false,
  }),

  methods: {
    handleChange(value, property) {
      this.data[property] = value.text || value;
    },

    handleChangeCount(value) {
      this.data.count = +value
    },

    clearDataPositions() {
      this.data = {
        category: 'Стеклопластиковые трубы FLOWTECH',
        count: 0,
        scopeOfApplications: 0,
        purpose: 'Трубопроводы систем холодного водоснабжения',
        length: '',
        weight: '',
        couplingOuterDiameter: '',
        thickness: '',
        couplingInnerDiameter: '',
        couplingWidth: '',
      }
    }
  },
}
</script>

<style >
.add-project-component-root {
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--default-text-color);
}

.add-project-component-title {
  margin-top: 32px;
  font-size: 28px;
  font-weight: var(--font-w-semi-bold);
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
}

.add-project-component-constructor {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

.add-project-component-constructor-subtitle {
  font-size: 20px;
  font-weight: var(--font-w-semi-bold);
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
}

.add-project-component-constructor-group {
  display: flex;
  gap: 32px;
}

.add-project-component-constructor-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.add-project-component-constructor-left-inputs {
  display: flex;
  gap: 16px;
}

.add-project-component-constructor-right {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.add-project-component-constructor-right-application-scope-label {
  font-size: 14px;
  font-weight: var(--font-w-medium);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
}

.add-project-component-constructor-right-application-scope-buttons .v-slide-group__content {
  display: flex;
  gap: 16px;

  button {
    border-radius: 8px;
    font-size: 14px;
    font-weight: var(--font-w-regular);
    line-height: 20px;
    letter-spacing: 0;
    padding: 0 16px;
    text-align: left;
    border: 1px solid rgba(232, 233, 234, 1)
  }
}

.selected-scope-of-application {
  background: rgba(244, 245, 245, 1);
  border: 1px solid rgba(174, 177, 182, 1) !important;
}

.add-project-component-constructor-add-position-button {
  margin-top: 24px;
  background: rgba(249, 249, 249, 1);
  font-size: 14px;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;


  .v-btn__underlay {
    background: transparent;
  }
}

.add-project-component-constructor-buttons-container {
    height: 64px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.add-project-component-constructor-buttons-container-button {
  border-radius: 8px;
  font-size: 14px;
  font-weight: var(--font-w-regular);
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  text-transform: capitalize;
}
</style>
