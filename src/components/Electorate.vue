<template>
	<div class="bg-white rounded-lg shadow-sm">
		<div class="font-bold text-gray-900 uppercase p-4 flex items-center justify-between">
			<span>{{ electorate.name }}</span>
			<span class="text-white py-1 px-3 text-xs rounded-md" :class="'bg-' + electorate.party.toLowerCase()">{{ electorate.party }}</span>
		</div>
		<div class="px-4 font-bold text-xl text-gray-900 mb-6">{{ electorate.incumbent }}</div>
		<div class="text-sm font-bold uppercase text-gray-500 px-4 pb-2 flex items-center justify-between">
			<span>Final Preference Flow</span>
			<span>{{ electorate.margin + 50 }}%</span>
		</div>
		<div
			class="h-2 bg-gray-100 mx-4 rounded-full relative mb-5"
			:style="'background:linear-gradient(to right, #3b82f6 0%, #3b82f6 ' + (electorate.margin + 50) + '%, #f3f4f6 ' + (electorate.margin + 50.01) + '%, #f3f4f6 100%)'"
		>
			<div class="absolute bg-gray-200 w-2 h-4 -top-1 outline outline-white rounded-full transform -translate-x-1/2" :style="'left:' + (electorate.margin + 50) + '%'" />
		</div>

		<div class="electorate-margin"></div>
		<div class="candidates">
			Major candidates:
			<ul>
				<li v-for="candidate in electorate.candidates" :key="candidate">
					{{ candidate }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>

defineProps({
	electorate: Object,
})

const filterEmpty = (arr: string[]) => arr.filter((f) => f !== "")

</script>

<style>

.bg-alp { @apply bg-red-500 }
.bg-lib { @apply bg-blue-500 }
.bg-nat { @apply bg-lime-800 }
.bg-ind { @apply bg-teal-500 }
.bg-grn { @apply bg-green-500 }

</style>