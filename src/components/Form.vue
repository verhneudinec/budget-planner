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

      <ElButton type="primary" @click="onSubmit">Добавить</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    header: 'Добавление элемента',
    formData: {
      type: 'INCOME',
      comment: '',
      value: '',
    },
    rules: {
      comment: [
        { required: true, message: 'Введите комментарий', trigger: 'blur' },
      ],
      value: [
        {
          required: true,
          message: 'Введите значение',
          trigger: 'blur',
        },
        { type: 'number', message: 'Здесь должно быть число', trigger: 'blur' },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) this.$emit('submitForm', { ...this.formData });
        this.$refs.addItemForm.resetFields();
      });
    },
    validateValue(value) {
      console.log(value);
      return false;
    },
  },
  computed: {},
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.form-card .type-select {
  width: 100%;
}
</style>
