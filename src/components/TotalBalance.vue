<template>
  <ElCard class="balance-wrap">
    <div class="total-value" :style="{ color: totalColor }">
      Баланс: {{ total }}
    </div>
  </ElCard>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    totalColor() {
      let color = this.total == 0 ? 'black' : this.total > 0 ? 'green' : 'red';
      return color;
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
}
.balance-wrap {
  max-width: 500px;
  margin: 10px auto;
}
</style>
