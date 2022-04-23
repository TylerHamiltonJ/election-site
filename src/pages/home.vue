<template>
	<!--	<p>Custom range slider:</p>-->
	<div class="slider flex items-center justify-between">
		<label>Labor</label>
		<input
			type="range"
			min="1"
			max="100"
			value="50"
			class="slider"
			id="slider"
		/>
		<label>Coalition</label>
	</div>
	<div class="grid md:grid-cols-2 p-4">
		<div class="grid md:col-start-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Electorate
				v-for="electorate in sortBy(
          filterParty(electorateInfo, ['LIB', 'NAT'], false),
          'margin'
        )"
				:key="electorate"
				:electorate="electorate"
			/>
		</div>
		<div class="grid md:col-start-1 md:row-start-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Electorate
				v-for="electorate in sortBy(
          filterParty(electorateInfo, ['ALP'], false),
          'margin'
        )"
				:key="electorate"
				:electorate="electorate"
			/>
		</div>
		<div class="grid md:col-span-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full mx-auto">
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
import Electorate from '../components/Electorate.vue'
import electorateInfo from '../content/data.json'

const filterParty = (arr: any[], party: string[], reverse: boolean) =>
	arr.filter((f) =>
		reverse ? !party.includes(f.party) : party.includes(f.party)
	)

const sortBy = (arr: any[], key: string) =>
	arr.sort((a, b) => parseFloat(a[key]) - parseFloat(b[key]))
</script>

<style scoped>

.grid {
	padding: 20px;
	transition: 1s;
}


label {
	display: inline-block;
	max-width: 100%;
	margin-bottom: 5px;
	font-weight: 700;
}
</style>