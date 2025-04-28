<script setup>
import SlotChild from "@/components/03_slot/SlotChild.vue";
import {ref} from "vue";
const slotData = ref('hello slot');
</script>

<template>
  <div class="container">
    <h1>Parent</h1>
    slot data 변경 : <input type="text" v-model="slotData">
    <SlotChild>
      <h3>{{slotData}}</h3>
    </SlotChild>
    <!--
    Slot의 name 속성 활용하기
    -->

  </div>
</template>

<style scoped>

</style>