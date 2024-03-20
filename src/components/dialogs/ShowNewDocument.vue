<template>
  <v-dialog
    v-if="dialog"
    :value="dialog"
    width="980"
    scrollable
    :transition="false"
  >
    <v-card
      class="show-new-document-root"
    >
      <div
        class="show-new-document-header pa-5"
      >
        <h1>
          КП 23522_АКВАТЕК_АО КОМПАКТ
        </h1>
        <span>
          Сформировано 22 февраля 2024, 11:11
        </span>
        <v-btn
          icon="$close"
          variant="text"
          @click="dialog = false"
          class="show-new-document-close-button"
        />
      </div>
      <v-divider></v-divider>
      <div class="show-new-document-content">
        <div class="show-new-document-content-left-side">
          <v-btn variant="text">
            <img src="/src/assets/page1.png" alt="page1">
          </v-btn>
          <v-btn variant="text">
            <img src="/src/assets/page2.png" alt="page2">
          </v-btn>
          <v-btn variant="text">
            <img src="/src/assets/page3.png" alt="page3">
          </v-btn>
        </div>
        <div>
          <img src="/src/assets/mainPage.png" alt="mainPage">
        </div>
      </div>
      <v-divider></v-divider>
      <div class="show-new-document-footer">
        <div class="d-flex ga-2">
          <v-btn
            elevation="0"
            class="show-new-document-footer-button-left-side"
          >
            <template #prepend>
              <img src="/src/assets/icons/ruler.svg" alt="ruler">
            </template>
            Запросить чертежи...
          </v-btn>
          <v-btn
            elevation="0"
            class="show-new-document-footer-button-left-side"
          >
            <template #prepend>
              <img src="/src/assets/icons/mail-01.svg" alt="ruler">
            </template>
            Отправить по почте...
          </v-btn>
        </div>
        <div class="d-flex ga-2">
          <v-btn
            elevation="0"
            variant="outlined"
            color="rgba(0, 129, 191, 1)"
            class="show-new-document-footer-button-right-side"
          >
            <template #prepend>
              <img src="/src/assets/icons/download-01.svg" alt="download">
            </template>
            Паспорт.pdf
          </v-btn>
          <v-btn
            elevation="0"
            variant="outlined"
            color="rgba(0, 129, 191, 1)"
            class="show-new-document-footer-button-right-side"
          >
            <template #prepend>
              <img src="/src/assets/icons/download-01.svg" alt="download">
            </template>
            Чертежи.pdf
          </v-btn>
          <v-btn
            elevation="0"
            color="rgba(0, 129, 191, 1)"
            class="show-new-document-footer-button-right-side"
          >
            <template #prepend>
              <img src="/src/assets/icons/download-02.svg" alt="download">
            </template>
            ТКП.pdf
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ShowNewDocument",

  props: {
    dialog: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>

<style scoped>
.show-new-document-root.show-new-document-root.show-new-document-root {
  border-radius: 8px;
  color: var(--default-text-color);
}
.show-new-document-header {
  position: relative;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: var(--font-w-semi-bold);
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 8px;
  }

  span{
    font-size: 14px;
    font-weight: var(--font-w-regular);
    line-height: 20px;
    letter-spacing: 0;
    text-align: left;

  }
}

.show-new-document-close-button {
  position: absolute;
  top: 0;
  right: 0;
}

.show-new-document-content {
  padding: 20px 20px 0 20px;
  display: flex;
  gap: 40px;
}

.show-new-document-content-left-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;

  button {
    border: 1px solid rgba(174, 177, 182, 1);
    height: fit-content;
    padding: 0;
  }
}
.show-new-document-footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.show-new-document-footer-button-left-side {
  border-radius: 8px;
  background-color: rgba(249, 249, 249, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  text-transform: none;
  height: 40px;
}

.show-new-document-footer-button-right-side {
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  text-transform: none;
  height: 40px;
}
</style>
