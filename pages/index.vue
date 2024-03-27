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
  	title: 'Curiosity to connect with customer conversation | Kudosity',
	meta: [
		{ name: 'description', content: 'Grow customer relationships with messaging experiences.' },
        { name: 'keywords', content: 'sms, customers, support, solutions, conversation, messaging' },
        { name: 'author', content: 'kudosity' },
	],
    bodyAttrs: {
        class: 'm-0 font-inter text-base antialiased font-normal text-left leading-default bg-gray-50 text-slate-500 '
    },
})

useSeoMeta({
    title: 'Curiosity to connect with customer conversation | Kudosity',
    ogTitle: 'Curiosity to connect with customer conversation | Kudosity',
    description: 'Grow customer relationships with messaging experiences.',
    ogDescription: 'Grow customer relationships with messaging experiences..',
    ogImage: '/images/lead-qualification.png',
    twitterCard: 'summary_large_image',
})
</script>