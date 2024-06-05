<template>

  <div>
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
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {

}
</script>