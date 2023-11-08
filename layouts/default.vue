<template :class="$colorMode.value">
  <div class="min-h-screen">
    <ThemeSwitcher />
    <slot />
    <Footer />
    <UNotifications />
  </div>
</template>
