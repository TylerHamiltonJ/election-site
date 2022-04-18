<template>
<!--	<p>Custom range slider:</p>-->
<!--	<input type="range" min="1" max="100" value="50" class="slider" id="slider" />-->
<!--	<p>Value: <span id="demo"></span></p>-->

	<div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-4">
		<Electorate
			v-for="electorate in electorateInfo"
			:key="electorate"
			:electorate="electorate"
		/>
	</div>
</template>


<script lang="ts" setup>

import Electorate from '../components/Electorate.vue'
import electorateInfo from '../content/data.json'

const filterParty = (arr: any[], party: string[]) =>
	arr.filter((f) => party.includes(f.Party))

const filterPartyExclusive = (arr: any[], party: string[]) =>
	arr.filter((f) => !party.includes(f.Party))

</script>