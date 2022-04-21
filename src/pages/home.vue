<template>
  <!--	<p>Custom range slider:</p>-->
  <div class="slider">
    <label for="Labor" class="pull-left">Labor</label>
    <label for="Coalition" class="pull-right">Coalition</label>
    <input
      type="range"
      min="1"
      max="100"
      value="50"
      class="slider"
      id="slider"
    />
  </div>
  <!--	<p>Value: <span id="demo"></span></p>-->

  <div class="main-container">
    <div
      class="
        grid
        lib
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        container
        mx-auto
        gap-4
      "
    >
      <Electorate
        v-for="electorate in sortBy(
          filterParty(electorateInfo, ['LIB', 'NAT'], false),
          'margin'
        )"
        :key="electorate"
        :electorate="electorate"
      />
    </div>
    <div
      class="
        grid
        lab
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        container
        mx-auto
        gap-4
      "
    >
      <Electorate
        v-for="electorate in sortBy(
          filterParty(electorateInfo, ['ALP'], false),
          'margin'
        )"
        :key="electorate"
        :electorate="electorate"
      />
    </div>
    <div
      class="
        grid
        ind
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        container
        mx-auto
        gap-4
      "
    >
      <Electorate
        v-for="electorate in sortBy(
          filterParty(electorateInfo, ['ALP', 'LIB', 'NAT'], true),
          'margin'
        )"
        :key="electorate"
        :electorate="electorate"
      />
    </div>
  </div>
</template>


<script lang="ts" setup>
import Electorate from "../components/Electorate.vue";
import electorateInfo from "../content/data.json";

const filterParty = (arr: any[], party: string[], reverse: boolean) =>
  arr.filter((f) =>
    reverse ? !party.includes(f.party) : party.includes(f.party)
  );

const sortBy = (arr: any[], key: string) =>
  arr.sort((a, b) => parseFloat(a[key]) - parseFloat(b[key]));
</script>
<style scoped>
.main-container {
  display: grid;
  padding: 10px;
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row; */
  grid-template-areas:
    "lib lab"
    "ind ind";
}
.grid {
  padding: 20px;
  transition: 1s;
}

.ind {
  grid-area: ind;
}

.lib {
  grid-area: lib;
}

.lab {
  grid-area: lab;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}

.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
</style>