<template>
  <div class="list">
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span>
        <i class="el-icon-top" v-if="isIncome(item.type)"></i>
        <i class="el-icon-bottom" v-else></i>
      </span>
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value">{{ item.value }}</span>
      <ElButton type="danger" size="mini" @click="deleteItem(item.id)">
        <i class="el-icon-delete"></i>
      </ElButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    isIncome(type) {
      if (type === 'OUTCOME') return false;
      return true;
    },
  },
  computed: {},
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>
