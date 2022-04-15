<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->

  <p>Custom range slider:</p>
  <input type="range" min="1" max="100" value="50" class="slider" id="slider" />
  <p>Value: <span id="demo"></span></p>
  <div class="grid">
    <Electorate
      v-for="Electorate in filterParty(electorateInfo, ['ALP'])"
      :key="Electorate"
      :electorateName="Electorate.Electorate"
      :sittingMP="Electorate.Incumbent"
      :sittingParty="Electorate.Party"
      :margin="Electorate.Margin"
      :candidates="Electorate.Candidates"
    />
  </div>
  <div class="grid">
    <Electorate
      v-for="Electorate in filterParty(electorateInfo, ['LIB', 'NAT', 'LNP'])"
      :key="Electorate"
      :electorateName="Electorate.Electorate"
      :sittingMP="Electorate.Incumbent"
      :sittingParty="Electorate.Party"
      :margin="Electorate.Margin"
      :candidates="Electorate.Candidates"
    />
  </div>
  <div class="grid">
    <Electorate
      v-for="Electorate in filterPartyExclusive(electorateInfo, [
        'LIB',
        'ALP',
        'NAT',
        'LNP',
      ])"
      :key="Electorate"
      :electorateName="Electorate.Electorate"
      :sittingMP="Electorate.Incumbent"
      :sittingParty="Electorate.Party"
      :margin="Electorate.Margin"
      :candidates="Electorate.Candidates"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Electorate from "./components/Electorate.vue";
import electorateInfo from "./content/data.json";

@Options({
  components: {
    HelloWorld,
    Electorate,
  },
  methods: {
    filterParty(arr: any[], party: string[]) {
      return arr.filter((f) => party.includes(f.Party));
    },
    filterPartyExclusive(arr: any[], party: string[]) {
      return arr.filter((f) => !party.includes(f.Party));
    },
  },
})
export default class App extends Vue {
  data() {
    return {
      electorateInfo,
    };
  }
  // mounted() {}
}

function test() {
  const slider = <HTMLInputElement>document.getElementById("myRange");
  const output = <HTMLInputElement>document.getElementById("demo");

  slider.addEventListener("change", function () {
    output.textContent = slider.value;
  });
}
</script>

<style>
:root {
  --LIB: #004e86;
  --ALP: #e2363e;
  --GRN: #00a652;
  --NAT: #016f4a;
  --KAP: #df1014;
  --CA: #ff5800;
  --IND: #5ffcf2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5px;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  height: 100%;
}

.grid > .electorate {
  height: 250px;
  background-color: #292929;
  padding: 5px;
  text-align: center;
  /* display: flex;
  justify-content: flex-end;
  flex-direction: column; */
  background-position: 50% 30%;
  background-repeat: no-repeat;
  background-size: 50%;
}

.electorate-name {
  font-weight: 600;
}
.electorate li {
  list-style: none;
}
.electorate ul {
  margin: 0;
  padding: 0;
}
</style>
