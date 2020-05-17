<template>
  <div>
    <div class="w-full flex flex-wrap items-center justify-between py-2 bg-gray-900 text-white text-center">
      <div class="container px-4 mx-auto text-sm">
        Online therapy during the lockdown. Stay safe
      </div>
    </div>
    <navbar-component></navbar-component>
    <main>
      <section id="about" class="pb-10 pt-10" >
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto pb-6">
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Therapy that gets to the heart of the matter
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >My therapy is centred on working with the deeper emotions that underlie your behaviour and experience,
              whether you are a couple, an individual, a child, a teen or a family. It connects with the heart of
               your experience and resolves the root of your difficulties so that you can move forward in your life
               with greater compassion and insight.</p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                For therapy to be successful, you need to feel respected and understood by me, know and understand
                the path ahead in therapy, agree on your therapy goal and feel that you are making steady progress
                towards it.
              </p>
              <a
                href="#contact"
                class="font-bold text-gray-800 mt-8 flex items-center hover:text-green-300"
                ><img height="18px" width="18px" class="mr-2" src="../assets/icons/mail.svg"/>Contact me</a
              >
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-200"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-green-200 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-black">
                    Michelle Smit
                  </h4>
                  <p class="text-md font-light mt-2 text-black">
                    Psychiatrist specializing in addiction counselling etc etc etc
                    this is more paragraphs to make the block nice and spacey
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Therapy Services -->
      <section id="therapy" class="relative py-20 bg-gray-300 mt-10">
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4 relative text-center">
              <div class="absolute px-6 left-0 right-0" style="top: 20px;">
                <p class="text-3xl text-white font-bold mb-3">Connection</p>
                <p class="text-white">"The energy that exists between people when they feel seen, heard and valued. When they can give and receive without judgement; and when they derive sustenance and strength from the relationship."</p>
                <p class="text-white text-base mt-3">Brené Brown</p>
              </div>
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/lily.jpg"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Open Dialog</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-green-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-green-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-green-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Publication -->
      <section id="publication" class="relative py-20 bg-gray-300">
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Publication</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  In the May 2020 edition of the South African Psychiatry Magazine - an article on addiction care during COVID-19
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-green-200 mr-3"></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          <a href="https://www.yumpu.com/en/document/read/63387059/south-african-psychiatry-may-2020" target="_blank">Download the article</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-green-200 mr-3"></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          <a href="https://www.yumpu.com/en/document/read/63387059/south-african-psychiatry-may-2020" target="_blank">View Magazine</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4 relative text-center">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/publication.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="relative block py-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <form name="contactus" netlify data-netlify-honeypot=”bot-field”>
                <input type="hidden" name="form-name" value="contactus" />
                <div class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300">
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl font-semibold">Schedule your appointment</h4>
                    <div class="relative w-full mb-3 mt-8">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="full-name"
                        >Full Name</label
                      ><input
                        type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        name="full_name"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email"
                        >Email</label
                      ><input
                        type="email"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        name="email"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message"
                        >Message</label
                      ><textarea
                        rows="4"
                        cols="80"
                        name="message"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-green-200 text-gray-900 hover:bg-green-300 text-sm font-bold uppercase px-6 py-3 border border-green-500 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style="transition: all 0.15s ease 0s;">Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default Vue.extend({
  components: {
    NavbarComponent,
    FooterComponent
  }
})
</script>

