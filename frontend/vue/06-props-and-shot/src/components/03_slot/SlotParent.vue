<script setup>
import SlotChild from "@/components/03_slot/SlotChild.vue";
import {reactive, ref} from "vue";
import NamedSlotChild from "@/components/03_slot/NamedSlotChild.vue";
import DynamicSlotChild from "@/components/03_slot/DynamicSlotChild.vue";
const slotData = ref('hello slot');
const obj = reactive({
  name : 'Vue',
  founder : 'Evan Yu',
  img : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Edgar_F_Codd.jpg/150px-Edgar_F_Codd.jpg'
});
const dynamicName = ref('동서남북');
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
  <NamedSlotChild>
    <template v-slot:name>
      <h1>name : {{obj.name}}</h1>
    </template>
    <template v-slot:founder>
      <p>founder : {{obj.founder}}</p>
    </template>
    <template v-slot:img>
      <img :src="obj.img" :alt="obj.img" />
    </template>
  </NamedSlotChild>

  <h1>Dynamic Slot</h1>
   <input type="text" v-model="dynamicName">
  <DynamicSlotChild>
    <!--
    #[dynamicName] : vue 3에서 지원하는 v-slot:[dynamicName]의 축약 문법
    입력 된 dynamicName 값이 속성 이름과 일치 할 때 해당 slot이 렌더링 된다
    -->
    <template #[dynamicName]>
      {{dynamicName}} : 입력 된 값이 slot의 name과 일치할 때 나타남!
    </template>
  </DynamicSlotChild>
  </div>
</template>

<style scoped>
  img {
    width: 200px;
    height: 200px;
  }
</style>