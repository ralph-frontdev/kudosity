<template>
    <section class="bg-[#f8f7ff] text-[#18191B]">
        <div class="max-w-[1790px] mx-auto flex flex-col gap-[2.563rem] h-full justify-between items-center text-left px-5 lg:px-[2.25rem] py-12 lg:py-[6.313rem]">
            <h2 class="text-2xl lg:text-5xl lg:text-[3.125rem] font-medium text-center">
                Loved by the world’s best teams
            </h2>
            <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4">
                <div v-for="(person, index) in visiblePersons" :key="index" class="bg-white rounded-[36px] p-8 border-[2.5px] border-[#4252FF] border-solid h-max inline-block mb-5">
                    <div class="flex flex-row gap-5">
                        <div>
                            <NuxtImg :src="person.image" alt="person image" width="70" height="70" />
                        </div>
                        <div class="flex flex-col">
                            <h4 class="font-['Inter'] font-medium text-xl lg:text-[1.646rem] pt-1 pb-0 lg:pb-2">{{ person.name }}</h4>
                            <h5 class="font-['Inter'] font-normal text-lg lg:text-[1.332rem] text-[#9CA3AF]">@{{ person.username }}</h5>
                        </div>
                    </div>
                    <div>
                        <div v-html="person.bio" class="font-['Inter'] font-normal text-lg lg:text-[1.567rem] leading-normal pt-4 pb-8 content"></div>
                    </div>
                    <div class="flex flex-row gap-4 pb-5">
                        <time class="font-['Inter'] font-normal text-sm lg:text-[1.097rem] text-[#9CA3AF]">{{ person.time }}</time>
                        <date class="font-['Inter'] font-normal text-sm lg:text-[1.097rem] text-[#9CA3AF]">{{ person.date }}</date>
                    </div>
                    <div class="flex flex-row items-center gap-5">
                        <div class="flex flex-row gap-2">
                            <NuxtImg src="/images/icon/repost.svg" alt="kudosity logo" width="25" height="16" />
                            <p class="font-['Inter'] font-normal text-sm lg:text-[1.175rem] text-[#9CA3AF]">{{ person.reposts }}</p>
                        </div>
                        <div>
                            <NuxtImg src="/images/icon/heart.svg" alt="kudosity logo" width="20" height="16" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="visiblePersons.length < persons.length" class="relative w-full pb-32 pt-96 mt-[-72rem] z-[50] bg-gradient-to-t from-white to-transparent">
            <button  @click="showMore" class="w-[220px] lg:w-[271px] flex flex-row gap-4 justify-center items-center font-['Raleway'] text-md lg:text-xl font-semibold text-white uppercase z-[1] bg-black py-4 rounded-full leading-normal mx-auto">
                Show more <NuxtImg src="/images/icon/arrow-right-white.svg" class="text-white" />
            </button>
        </div>
    </section>
</template>

<script setup>
const persons = ref([
    {
        id: 1,
        name: 'Guillermo Rauch',
        username: 'rauchg',
        image: '/images/teams/guillermo-rauch.png',
        bio: '<p>Coolest domain. Check Coolest mission. Check Coolest product. Check</p>',
        time: '5:48 PM',
        date: 'Sep 15, 2021',
        reposts: 36
    },
    {
        id: 2,
        name: 'Matt Galligan',
        username: 'mg',
        image: '/images/teams/matt-galligan.png',
        bio: '<p>The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge.</p><p>So: can we please do the above for an email app, contacts app?</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 3,
        name: 'Thomas Paul Mann',
        username: 'thomaspaulmann',
        image: '/images/teams/thomas-paul-mann.png',
        bio: '<p>I\'m already rocking the new @calcom extension to coordinate my meetings 😎</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 4,
        name: 'Farhaj May00n (in Dilli 🇮🇳)',
        username: 'farhajmayan',
        image: '/images/teams/farhaj-may00n.png',
        bio: '<p>As of today I\'m officially a @calcom maxi. The product is epic. @peer_rich where can I buy merch??</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 5,
        name: 'KP',
        username: 'thisiskp_',
        image: '/images/teams/kp.png',
        bio: '<p>SaaS is eating the world</p><p>And Open Source is eating SaaS for breakfast</p><p>A lot of alternatives are rising up</p><p>Here are a few:</p><p>Calendly - @calcom<br>Airtable - @baserow<br>Zapier - @n8n_io</p><p>What else?</p>',
        time: '5:48 PM',
        date: 'Sep 15, 2021',
        reposts: 36
    },
    {
        id: 6,
        name: 'Joel',
        username: 'mg',
        image: '/images/teams/joel.png',
        bio: '<p>The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge.</p><p>So: can we please do the above for an email app, contacts app?</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 7,
        name: 'Sharath',
        username: '5harath',
        image: '/images/teams/Sharath.png',
        bio: '<p>Probably the first calendar app in web3 space!</p><p>Great work @peer_rich and @calcom team!</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 8,
        name: 'Talha Altinel',
        username: 'mg',
        image: '/images/teams/talha-altinel.png',
        bio: '<p>I am amazed by @calcom (Calendso) \'s success, I was quite pessimistic that it would take off as a project in 2020 but here we are using Calendso and trying to self-host with improved documentation 🤣🤣</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 1,
        name: 'Guillermo Rauch',
        username: 'rauchg',
        image: '/images/teams/guillermo-rauch.png',
        bio: '<p>Coolest domain. Check Coolest mission. Check Coolest product. Check</p>',
        time: '5:48 PM',
        date: 'Sep 15, 2021',
        reposts: 36
    },
    {
        id: 2,
        name: 'Matt Galligan',
        username: 'mg',
        image: '/images/teams/matt-galligan.png',
        bio: '<p>The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge.</p><p>So: can we please do the above for an email app, contacts app?</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 3,
        name: 'Thomas Paul Mann',
        username: 'thomaspaulmann',
        image: '/images/teams/thomas-paul-mann.png',
        bio: '<p>I\'m already rocking the new @calcom extension to coordinate my meetings 😎</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 4,
        name: 'Farhaj May00n (in Dilli 🇮🇳)',
        username: 'farhajmayan',
        image: '/images/teams/farhaj-may00n.png',
        bio: '<p>As of today I\'m officially a @calcom maxi. The product is epic. @peer_rich where can I buy merch??</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 5,
        name: 'KP',
        username: 'thisiskp_',
        image: '/images/teams/kp.png',
        bio: '<p>SaaS is eating the world</p><p>And Open Source is eating SaaS for breakfast</p><p>A lot of alternatives are rising up</p><p>Here are a few:</p><p>Calendly - @calcom<br>Airtable - @baserow<br>Zapier - @n8n_io</p><p>What else?</p>',
        time: '5:48 PM',
        date: 'Sep 15, 2021',
        reposts: 36
    },
    {
        id: 6,
        name: 'Joel',
        username: 'mg',
        image: '/images/teams/joel.png',
        bio: '<p>The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge.</p><p>So: can we please do the above for an email app, contacts app?</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 7,
        name: 'Sharath',
        username: '5harath',
        image: '/images/teams/Sharath.png',
        bio: '<p>Probably the first calendar app in web3 space!</p><p>Great work @peer_rich and @calcom team!</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    },
    {
        id: 8,
        name: 'Talha Altinel',
        username: 'mg',
        image: '/images/teams/talha-altinel.png',
        bio: '<p>I am amazed by @calcom (Calendso) \'s success, I was quite pessimistic that it would take off as a project in 2020 but here we are using Calendso and trying to self-host with improved documentation 🤣🤣</p>',
        time: '6:19 AM',
        date: 'Sep 7, 2022',
        reposts: 3
    }
]);

const visibleItemsCount = ref(8);

const visiblePersons = computed(() => {
  return persons.value.slice(0, visibleItemsCount.value);
});

function showMore() {
  visibleItemsCount.value += 8;
}
</script>

<style>
.content p {
    padding-bottom: 1rem;
}
</style>