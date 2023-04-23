<template>
  <div>
    <div
      class="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6"
    >
      <Widget icon="i-carbon-chart-column" title="Earning" subtitle="$340.5" />
      <Widget
        icon="i-carbon-document"
        title="Spend this month"
        subtitle="$642.9"
      />
      <Widget icon="i-carbon-chart-column" title="Sales" subtitle="$574.5" />
      <Widget
        icon="i-carbon-list-boxes"
        title="Your balance"
        subtitle="$1,000"
      />
      <Widget icon="i-carbon-chart-column" title="New Tasks" subtitle="145" />
      <Widget icon="i-carbon-home" title="Total Projects" subtitle="$2433" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Widget from '@/components/Widget/Widget.vue'
</script>
