<template>
  <div class="balance-wrap" :style="{ color: totalBalanceColor }">
    Баланс: {{ totalBalance }}
    <ElDivider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalBalance",
  computed: {
    ...mapGetters("list", ["GET_LIST"]),
    totalBalance() {
      return Object.values(this.GET_LIST).reduce(
        (acc, item) => (acc += item.value),
        0
      );
    },
    totalBalanceColor() {
      let color =
        this.totalBalance == 0
          ? "black"
          : this.totalBalance > 0
          ? "green"
          : "red";
      return color;
    },
  },
};
</script>

<style scoped>
.balance-wrap {
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  margin: 10px auto;
}
</style>
