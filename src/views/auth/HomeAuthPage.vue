<!-- <template>
    <div class="flex flex-row justify-between items-center fixed w-screen">
        <div class="flex flex-row justify-center"><img class="w-24 h-24" src="@/assets/food-logo.png" /></div>
        <div class="w-3/4 mx-12 ">
            <nav class="flex flex-row justify-between">
                <ul class="flex flex-row justify-evenly w-1/2">
                    <li class="block bg-black-1 rounded-sm py-1 px-4 hover:bg-brown-200"><a href="/">Home</a></li>
                    <li class="block bg-black-1 rounded-sm py-1 px-4"><a href="/recipes">Recipes</a></li>
                    <li class="block bg-black-1 rounded-sm py-1 px-4"><a href="/cookbooks">Cookbooks</a></li>
                    <li class="block bg-black-1 rounded-sm py-1 px-4"><a href="/about">About</a></li>
                </ul>
                <ul>
                    <li class="block bg-black-1 rounded-sm py-1 px-4">
                        <a href="/profile">My Profile</a>
                    </li>
                </ul>

            </nav>
        </div>
    </div>
    <div class="mt-28">
        <div class="w-full h-full">This is the Main Content</div>
    </div>
</template> -->
<template>


<nav class="bg-black-2 border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div>
        <a href="#" class="flex items-center">
          <img src="@/assets/food-logo.png" class="h-8" alt="WAWGTE Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WAWGTE</span>
        </a>
    </div>
    <div>
      <a href="/auth" class="px-4 menu-btn">Home</a>
      <a href="/recipes" class="px-4 menu-btn">Recipes</a>
      <a href="/cookbooks" class="px-4 menu-btn">Cookbooks</a>
      <a href="/about" class="px-4 menu-btn">About</a>
    </div>
    <div>
      <a href="/my-profile" class="menu-btn">My Profile</a>
    </div>

   
  </div>
</nav>

</template>
<script>

export default {

}
</script>