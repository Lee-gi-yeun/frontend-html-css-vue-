<script setup>

import ScopedSlotChild from "@/components/04_scoped-slot/ScopedSlotChild.vue";
</script>

<template>
  <div class="container">
    <ScopedSlotChild>
      <!--
      #default : v-slot:default의 축약형으로 자식에서 <slot>에 name을 별도로 지정하지 않으면
      default slot이다
      {user} : 구조 분해 할당 문법으로 slotProps.user로 자식이 전달한 user에 접근한다
      -->
      <template #default="{user}">
        <Strong>{{user.name}}</Strong> - <em>{{user.age}}세</em>
      </template>
    </ScopedSlotChild>
  </div>
</template>

<style scoped>

</style>