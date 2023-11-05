import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init({
      delay: 250,
      duration: 500,
      easing: 'ease-in-out',
    });
  }
});
