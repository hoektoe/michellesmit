<template>
  <nav class="border-b w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <a
          class="text-base align-center leading-relaxed flex mr-4 whitespace-no-wrap uppercase text-black"
          href="/"
        >
          <logo></logo>
          <div class="flex flex-col w-full ml-4 justify-center">
            <div class="w-full uppercase font-bold mb-2" style="font-size:2rem;line-height:2.2rem;">Michelle Smit</div>
            <div class="w-full uppercase " style="font-size:1.5rem;line-height: 1.5rem;">psychologist - addiction therapy</div>
          </div>
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <img src="../assets/icons/menu.svg"/>
        </button>

      <div
        class="lg:flex flex-grow items-center lg:shadow-none"
        v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="flex items-center">
            <a href="#about" class="font-light lg:text-black lg:hover:text-green-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-base">
              About
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="font-light lg:text-black lg:hover:text-green-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-base"
              href="#therapy"
            >Therapy Services</a>
          </li>
          <li class="flex items-center">
            <a
              class="font-light lg:text-black lg:hover:text-green-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-base"
              href="#publication"
            >Publication</a>
          </li>
          <li class="flex items-center">
            <a
              class="font-light lg:text-black lg:hover:text-green-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-base"
              href="#contact"
            >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Logo from "~/components/Logo.vue";

export default {

  data() {
    return {
      showMenu: false
    };
  },
  components: {
    Logo
  },
  methods: {
    toggleNavbar: function() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
