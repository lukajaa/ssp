<template :class="$colorMode.value">
  <div
    class="min-h-screen bg-white transition duration-300 ease-in-out dark:bg-gray-950"
  >
    <!-- <ThemeSwitcher /> -->
    <slot />
    <Footer />
    <UNotifications />
  </div>
</template>
