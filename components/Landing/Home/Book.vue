<template>
    <section class="bg-gradient-to-br from-[#9553FB] to-[#6F2BDA] text-white">
        <div class="max-w-[1502px] mx-auto flex flex-col lg:flex-row h-full justify-between items-center text-left px-5 lg:px-[3.75rem] py-12 lg:py-[8.5rem] gap-8">
            <div class="max-w-[339px] flex flex-col gap-[1.688rem]">
                <h2 class="font-bold text-5xl lg:text-[3.625rem] text-center lg:text-left">
                    Book your demo today
                </h2>
                <p class="font-['Inter'] font-bold text-base text-center lg:text-left">
                    “Kudosity was the easiest and most effective marketing tool we’ve ever used for lead qualification at Uber.”
                </p>
                <h5 class="text-center lg:text-left">
                    Uber, Singapore
                </h5>
            </div>
            <div class="w-full max-w-[869px] flex flex-col gap-[3.125rem]">
                <div class="w-full flex flex-col gap-5">
                    <div class="flex flex-col lg:flex-row gap-[1.875rem]">
                        <div class="w-full flex items-center border-b border-white py-2">
                            <input class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="First Name" aria-label="First Name">
                        </div>
                        <div class="w-full flex items-center border-b border-white py-2">
                            <input class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Last Name" aria-label="Last Name">
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-[1.875rem]">
                        <div class="w-full flex items-center border-b border-white py-2">
                            <input class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Company" aria-label="Company">
                        </div>
                        <div class="w-full flex items-center border-b border-white py-2">
                            <input class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone Number" aria-label="Phone Number">
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-[1.875rem]">
                        <div class="w-full flex items-center border-b border-white py-2">
                            <input class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Company">
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-[1.875rem]">
                        <div class="w-full flex items-center border-b border-white py-2">
                            <input class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Subject" aria-label="Subject">
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-[1.875rem]">
                        <div class="w-full flex items-center border-b border-white py-2">
                            <textarea class="w-full first-line:font-['Inter'] appearance-none bg-transparent border-none text-white placeholder:text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Message" aria-label="Message" rows="6" />
                        </div>
                    </div>
                </div>
                <button class="w-[285px] flex flex-row gap-4 justify-center items-center font-['Raleway'] text-xl font-semibold text-black uppercase bg-[#4AE3CE] py-4 leading-normal">
                    Submit Request <NuxtImg src="/images/icon/arrow-right.svg" class="w-[1.151rem]" />
                </button>
            </div>
        </div>
    </section>
</template>