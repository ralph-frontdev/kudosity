<template>
    <header>
        <nav class="hidden lg:block lg:absolute w-full text-white z-10">
            <div class="flex flex-row m-auto 2xl:px-0 py-5 w-full max-w-[1740px] justify-between">
                <div class="flex flex-row items-center gap-[5.25rem]">
                    <NuxtLink to="/">
                        <NuxtImg src="/images/logo/kudosity-logo.svg" alt="kudosity logo" width="184" height="42" />
                    </NuxtLink>
                    <ul class="flex flex-row gap-[4.625rem]">
                        <li>
                            <NuxtLink to="/">
                                Products
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                Customers
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                Developers
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                Partners
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                Resources
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                About Us
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-row items-center">
                    <NuxtLink to="/">
                        Login
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </header>
</template>