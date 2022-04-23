<template>
  <div class="slider flex items-center justify-between">
    <label>Labor</label>
    <input
      type="range"
      min="-150"
      max="150"
      v-model="sliderVal"
      class="slider"
      id="slider"
    />
    <label>Coalition</label>
  </div>
</template>

<style scoped>
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
</style>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
const sliderVal = ref();

function convertToParty(
  fragment: any,
  party: any,
  newGrid: string,
  newPartyText: string
) {
  const grid = document.getElementById(newGrid);
  party.textContent = newPartyText;
  grid?.prepend(fragment);
}

function moveToGrid(parent: any, currentGrid: any, originalParty: any) {
  const mainOpponent = parent?.getAttribute("main-oponent");
  const incumbent = parent?.getAttribute("original-incumbent");
  const party = parent?.querySelector(".party");
  if (originalParty !== "IND") {
    // TODO Special case for independents
    party?.classList.toggle("bg-alp");
    party?.classList.toggle("bg-lib");
  }
  const fragment = document.createDocumentFragment();
  if (parent) fragment.appendChild(parent);
  if (originalParty === "ALP" && currentGrid === originalParty)
    convertToParty(fragment, party, "liberal-grid", "LIB");
  if (originalParty === "ALP" && currentGrid !== originalParty)
    convertToParty(fragment, party, "labor-grid", "ALP");
  if (originalParty === "LIB" && currentGrid === originalParty)
    convertToParty(fragment, party, "labor-grid", "ALP");
  if (originalParty === "LIB" && currentGrid !== originalParty)
    convertToParty(fragment, party, "liberal-grid", "LIB");
  return "independent-grid";
}

watchEffect(() => {
  if (sliderVal.value) {
    const margins = document.getElementsByClassName("electorate-margin");
    Array.from(margins).forEach((el) => {
      const libMargin: string = el.getAttribute("lib-margin") || "0";
      const startMargin: string = el.getAttribute("start-margin") || "0";
      const sliderValue =
        parseFloat(libMargin) >= 0
          ? parseFloat(sliderVal.value) / 10
          : -(parseFloat(sliderVal.value) / 10);
      const newMargin = parseFloat(startMargin) + sliderValue;
      el.textContent = `${newMargin.toFixed(1)}%`;
      const parent = el.closest(".electorate");
      const currentGrid = el.closest(".grid")?.getAttribute("party");
      let originalParty = parent?.getAttribute("original-party");
      if (originalParty === "NAT") originalParty = "LIB"; // TODO - fix this in data.json
      if (newMargin < 0 && currentGrid === originalParty) {
        moveToGrid(parent, currentGrid, originalParty);
      } else if (newMargin > 0 && currentGrid !== originalParty) {
        moveToGrid(parent, currentGrid, originalParty);
      }
    });
  }
});
</script>
