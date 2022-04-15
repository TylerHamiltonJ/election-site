<script lang="ts">
export default {
  props: {
    electorateName: String,
    sittingMP: String,
    margin: Number,
    sittingParty: String,
    candidates: Array,
  },
  methods: {
    filterEmpty(arr: string[]) {
      return arr.filter((f) => f !== "");
    },
  },
};
</script>

<template>
  <div class="electorate">
    <div
      class="electorate-name"
      :style="`background-color:var(--${sittingParty})`"
    >
      {{ electorateName }}
    </div>
    <div class="sitting-mp">{{ sittingMP }}</div>
    <div class="electorate-margin">{{ margin }}</div>
    <div class="sitting-party">{{ sittingParty }}</div>
    <div class="candidtates">
      Major candidates:
      <ul>
        <li v-for="candidate in filterEmpty(candidates)" :key="candidate">
          {{ candidate }}
        </li>
      </ul>
    </div>
  </div>
</template>