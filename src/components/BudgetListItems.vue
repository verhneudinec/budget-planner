<template>
  <div class="list">
    <div class="list-item" v-for="(item, prop) in GET_LIST" :key="prop">
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BudgetListItem",
  data: () => ({}),
  methods: {
    ...mapActions("list", ["DELETE_ITEM"]),
    deleteItem(id) {
      this.DELETE_ITEM(id);
    },
    isIncome(type) {
      if (type === "OUTCOME") return false;
      return true;
    }
  },
  computed: {
    ...mapGetters("list", ["GET_LIST"])
  }
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
