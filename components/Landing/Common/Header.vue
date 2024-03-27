<template>
    <header>
        <nav class="fixed w-full text-white z-10 bg-black" :class="{ 'open': isMobileMenuOpen, 'close': !isMobileMenuOpen }">
            <div class="overlay-black md:hidden"></div>
            <div class="max-w-[1740px] flex flex-row m-auto 2xl:px-0 p-5 w-full justify-between">
                <div class="w-full flex flex-row items-center gap-[5.25rem] justify-between lg:justify-start">
                    <div class="flex gap-4 items-center justify-center lg:px-0 lg:items-stretch lg:justify-start">
                        <div class="flex-shrink-0 z-10">
                            <NuxtLink to="/">
                                <NuxtImg src="/images/logo/kudosity-logo.svg" alt="kudosity logo" width="184" height="42" />
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex items-center lg:hidden">
                        <button type="button" class="nav-toggle z-10" @click="isMobileMenuOpen = !isMobileMenuOpen" :aria-expanded="isMobileMenuOpen ? 'true' : 'false'">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <ul class="hidden lg:flex flex-row gap-[4.625rem]">
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
                <div class="hidden lg:flex flex-row items-center">
                    <NuxtLink to="/">
                        Login
                    </NuxtLink>
                </div>
            </div>
            <div>
                <div class="aside lg:hidden z-20">
                    <ul>
                        <li>
                            <NuxtLink to="/" class="text-[16px] cursor-pointer font-medium block lg:inline-block lg:mt-0 text-[#4252FF] mr-4">
                                Products
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[16px] cursor-pointer font-medium block lg:inline-block lg:mt-0 text-[#4252FF] mr-4">
                                Customers
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[16px] cursor-pointer font-medium block lg:inline-block lg:mt-0 text-[#4252FF] mr-4">
                                Developers
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[16px] cursor-pointer font-medium block lg:inline-block lg:mt-0 text-[#4252FF] mr-4">
                                Partners
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[16px] cursor-pointer font-medium block lg:inline-block lg:mt-0 text-[#4252FF] mr-4">
                                Resources
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[16px] cursor-pointer font-medium block lg:inline-block lg:mt-0 text-[#4252FF] mr-4">
                                About Us
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                Login
                            </NuxtLink>
                        </li>
                    </ul>
                    </div>
                </div>
        </nav>
    </header>
</template>

<script setup>
    const isMobileMenuOpen = ref(false);

    onMounted(() => {
        console.log("Mounted", isMobileMenuOpen.value);
    })

    function toggleMobileMenu() {
        console.log("Mounted", isMobileMenuOpen.value);
		isMobileMenuOpen.value = !isMobileMenuOpen.value;
	}
</script>

<style scoped>

.loginselect  :deep(.multiselect__tags){
  height: 48px !important;
  background-color: #c8dfff !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: 10px !important;
}
.loginselect {
  min-width: 97px !important;
  max-width: 97px !important;
  height: 48px !important;
  
}
.loginselect :deep(.multiselect__select){
  height: 100%;
}
.loginselect :deep(.multiselect__placeholder){
  color: black !important; 
  font-weight: 500;
  font-size: 16px;
}

.loginselect :deep(.multiselect__content-wrapper){

  align-items: center !important;
  justify-content: center !important;
  width: 200px !important;
  margin-left: -40px !important;
  margin-top: 10px !important;
  border-radius: 5px !important;
}
.loginselect :deep(.multiselect__placeholder)
{
display: block !important;   
}
.loginselect :deep(.multiselect__option--highlight){
  background: #FAA61A !important;
  color: white !important;
  font-weight: 600;
  font-size: 16px !important;
}
.loginselect :deep(.multiselect__option){
  font-weight: 600;
  font-size: 16px !important;
}
.loginselect :deep(.multiselect__option:hover){
  color: #fff !important;
}

.loginselect :deep(.multiselect__content-wrapper) {
  border: none !important;
  @apply shadow-2xl;
}

.aside {
  position: absolute;
  right: 0;
  top: 80px;
  background: #fff;
  overflow: auto;
  min-width: 200px;
  transform: translateX(110%);
  transition: all ease 500ms;
  margin-right: 20px;
  border-radius: 15px;
  @apply shadow-2xl;
}

.open .aside {
  transform: translateX(0%);
}

.aside ul {
  padding: 10px 0;
}

.aside ul li {
  cursor: pointer;
  padding: 12px 20px;
  color: #000;
  display: flex;
  align-items: center;
  font-weight: 100;
  position: relative;
}

.open .aside ul li {
  animation: fadeInLeft ease 500ms;
  animation-fill-mode: forwards;
  /* opacity: 0; */
}

.open .aside ul li:nth-child(1) {
  animation-delay: 0.1s;
}

.open .aside ul li:nth-child(2) {
  animation-delay: 0.2s;
}

.open .aside ul li:nth-child(3) {
  animation-delay: 0.3s;
}

.open .aside ul li:nth-child(4) {
  animation-delay: 0.4s;
}

.open .aside ul li:nth-child(5) {
  animation-delay: 0.5s;
}

.open .aside ul li:nth-child(6) {
  animation-delay: 0.6s;
}

.open .aside ul li:nth-child(7) {
  animation-delay: 0.7s;
}

.open .aside ul li:nth-child(8) {
  animation-delay: 0.8s;
}
.nav-toggle {
  width: 25px;
  height: 20px;
  position: relative;
}
.nav-toggle span {
  display: block;
  height: 3px;
  background: white;
  position: absolute;
  border-radius: 5px;
  transition: all ease 250ms;
}
.nav-toggle span:nth-child(1) {
  top: 0;
  right: 0;
  width: 100%;
}
.nav-toggle span:nth-child(2) {
  top: 50%;
  right: -1px;
  transform: translateY(-50%);
  width: 75%;
}
.nav-toggle span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
}
.open .nav-toggle span:nth-child(1) {
    transform: translateY(-50%) rotate(-45deg);
    transform-origin: bottom right;
    width: 50%;
    top: 50%;
}
.open .nav-toggle span:nth-child(3) {
    transform: translateY(50%) rotate(45deg);
    transform-origin: top right;
    width: 50%;
    bottom: 50%;
}

.preload * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}

.aside .loginselect :deep(.multiselect__content-wrapper) {
  left: 50px;
}


.aside .loginselect {
  min-width: 110px !important;
  max-width: 110px !important;
  height: 48px !important;
  
}

.open .overlay-black {
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: #000;
    opacity: 80%;
    z-index: 3;
    touch-action: none;
    -ms-touch-action: none;
}
</style>