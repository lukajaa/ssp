<template :class="$colorMode.value">
  <div class="min-h-screen bg-white text-black">
    <slot />
    <Footer />
    <UNotifications />
  </div>
</template>
