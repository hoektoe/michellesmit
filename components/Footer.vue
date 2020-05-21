<template>
  <footer class="relative bg-gray-900 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/12 px-4">
          <img alt="Michelle Smit Logo Artum Lilly" class="object cover footer-logo" src="../assets/img/logo_block.svg"/>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl text-green-200 font-semibold uppercase">Michelle Smit</h4>
          <h5 class="text-lg text-white mt-0 mb-6">
            Psychologist - Addiction Therapy
          </h5>
          <p class="text-gray-200">HPCSA registered counselling psychologist based in Cape Town and specializing in addiction therapy.</p>
          <div class="mt-2">
            <ul class="list-unstyled text-sm text-gray-700">
                <li><a class="text-green-200" href="mailto:therapy@michellesmit.com">therapy@michellesmit.com</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-4/12 px-4 hidden lg:flex">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-6/12 px-4 ml-auto">
              <span class="block uppercase text-gray-400 text-sm font-semibold mb-2">Sitemap</span>
              <ul class="list-unstyled">
                <li>
                  <a class="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#about">About</a>
                </li>
                <li>
                  <a class="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#therapy">Therapy Services</a>
                </li>
                <li>
                  <a class="text-gray-300 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#publication">Publication</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-300 font-semibold py-1">
            Copyright © {{date}} Michelle Smit.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
<style>
  .footer-logo {
    width: 100px;
  }
  @media (min-width: 1024px) {
    .footer-logo {
      width: 100%;
    }
  }
</style>
