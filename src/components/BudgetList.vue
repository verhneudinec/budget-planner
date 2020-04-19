<template>
  <div class="budget-list-wrap">
    <ElCard>
      <template v-if="isNotEmpty">
        <TotalBalance />
        <BudgetListItems />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItems from "@/components/BudgetListItems";
import TotalBalance from "@/components/TotalBalance";
import { mapGetters } from "vuex";
export default {
  name: "BudgetList",
  components: {
    BudgetListItems,
    TotalBalance,
  },
  data: () => ({
    header: "Бюджет",
    emptyTitle: "Список пустой!",
  }),
  computed: {
    ...mapGetters("list", ["GET_LIST"]),
    isNotEmpty() {
      Object.keys(this.GET_LIST).length;
      return Boolean(Object.keys(this.GET_LIST).length);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
  margin-bottom: 60px;
}
</style>
