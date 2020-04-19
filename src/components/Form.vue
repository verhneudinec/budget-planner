<template>
  <ElCard class="form-card" :header="header">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Тип" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type"
        >
          <ElOption label="Доход" value="INCOME" />
          <ElOption label="Расход" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>

      <ElFormItem label="Комментарий" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>

      <ElFormItem label="Значение" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>

      <ElButton class="submitButton" type="primary" @click="onSubmit"
        >Добавить</ElButton
      >
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  data: () => ({
    header: "Добавление элемента",
    formData: {
      type: "INCOME",
      comment: "",
      value: "",
    },
    rules: {
      comment: [
        { required: true, message: "Введите комментарий", trigger: "blur" },
      ],
      value: [
        {
          required: true,
          message: "Введите значение",
          trigger: "blur",
        },
        { type: "number", message: "Здесь должно быть число", trigger: "blur" },
      ],
    },
  }),
  methods: {
    ...mapActions("list", ["ADD_ITEM"]),
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        const newObj = { ...this.formData };
        if (valid) this.ADD_ITEM(newObj);
        this.$refs.addItemForm.resetFields();
      });
    },
    onSubmitForm(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };

      this.$set(this.list, newObj.id, newObj);
    },
  },
  computed: {},
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
  margin-bottom: 30px;
}
.form-card .type-select {
  width: 100%;
}
.submitButton {
  width: 100%;
}
</style>
