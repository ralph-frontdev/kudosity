<template>
    <LandingHomeBanner />
    <LandingHomeCompanies />
    <LandingHomeDemo />
    <LandingHomeServices />
    <LandingHomeTeams />
    <LandingHomeBook />
</template>

<script setup>
useHead({
  	title: 'Kudosity | Curiosity to connect with customer conversation',
	meta: [
		{ name: 'description', content: 'Grow customer relationships with messaging experiences' }
	],
    bodyAttrs: {
        class: 'm-0 font-inter text-base antialiased font-normal text-left leading-default bg-gray-50 text-slate-500 '
    },
})
</script>