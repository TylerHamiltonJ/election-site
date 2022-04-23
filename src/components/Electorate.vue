<template>
  <div
    class="bg-white rounded-lg shadow-sm electorate"
    :original-party="electorate.party"
    :original-incumbent="electorate.incumbent"
    main-opponent="Main Opponent Here"
  >
    <div
      class="
        font-bold
        text-gray-600
        uppercase
        p-4
        flex
        items-center
        justify-between
      "
    >
      <span>{{ electorate.name }}</span>
      <span
        :start-margin="electorate.margin"
        :current-margin="electorate.margin"
        :lib-margin="electorate.lib_margin"
        class="
          text-gray-900
          bg-gray-100
          font-bold
          px-2
          rounded-md
          text-xs
          py-1
          electorate-margin
        "
        >{{ electorate.margin }}%</span
      >
    </div>
    <div class="p-4 pt-0 font-bold text-xl text-gray-900 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="text-gray-300 w-5 h-5 mr-2"
        fill="currentColor"
        v-if="electorate.incumbent === 'Vacant'"
      >
        <path
          d="M464 224C437.5 224 416 245.5 416 272V352H96V272C96 245.5 74.51 224 48 224S0 245.5 0 272v192C0 472.8 7.164 480 16 480h64C88.84 480 96 472.8 96 464V448h320v16c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16v-192C512 245.5 490.5 224 464 224zM128 272V320h256V272c0-38.63 27.53-70.95 64-78.38V160c0-70.69-57.31-128-128-128H192C121.3 32 64 89.31 64 160v33.62C100.5 201.1 128 233.4 128 272z"
        />
      </svg>
      <span class="incumbent">{{ electorate.incumbent }}</span>
    </div>
    <div
      class="text-white py-1 text-center font-bold rounded-b-md bg-ind party"
      v-if="electorate.incumbent === 'Dave Sharma'"
    >
      {{ electorate.party }}
    </div>
    <div
      class="text-white py-1 text-center font-bold rounded-b-md party"
      v-else="electorate.incumbent === 'Dave Sharma'"
      :class="'bg-' + electorate.party.toLowerCase()"
    >
      {{ electorate.party }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  electorate: Object,
});
const filterEmpty = (arr: string[]) => arr.filter((f) => f !== "");
</script>

<style>
.bg-alp {
  @apply bg-red-500;
}

.bg-lib {
  @apply bg-blue-500;
}

.bg-nat {
  @apply bg-lime-800;
}

.bg-ind {
  @apply bg-teal-500;
}

.bg-grn {
  @apply bg-green-500;
}

.bg-uap {
  @apply bg-yellow-500;
}

.bg-kap {
  @apply bg-red-800;
}

.bg-ca {
  @apply bg-orange-500;
}
</style>