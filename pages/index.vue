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
                About
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                My passion is within the field of addiction care. I have worked within multidisciplinary teams at in-patient facilities caring for
                patients that have both substance and process addiction. These addictions range from; alcohol, prescription tablets, cocaine, heroin,
                methamphetamines to shopping, gaming, and gambling to name a few. In addition, many of the patients I have treated over the years have a dual diagnosis.
                Often, addiction is comorbid with a psychiatric diagnosis such as depression, anxiety, PTSD, personality disorders or mood disorders.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                I am fluent in both English and Afrikaans. I obtained my Master’s degree with the Pearson Institute and am currently completing my Doctorate
                degree in Psychology. I am registered with the Health Professions Council of South Africa, as well as with the BHF.
              </p>
              <a
                href="#contact"
                class="font-bold text-gray-800 mt-8 flex items-center hover:text-green-300">
                  <img alt="mail icon to contact michelle smit" height="18px" width="18px" class="mr-2" src="~/assets/icons/mail.svg"/>Contact me
              </a>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-200">
                <img data-piio="/michellesmit.jpg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+f9vPQAJZAN2rlRQVAAAAABJRU5ErkJggg=="
                alt="Michelle Smit | Psychologist - Addiction Therapy" class="w-full align-middle rounded-t-lg"/>

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
                    HPCSA registered counselling psychologist based in Cape Town and specializing in addiction therapy. Due to the nature of online therapy is available for consultations globally.
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
              <img data-piio="/lily.jpg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+f9vPQAJZAN2rlRQVAAAAABJRU5ErkJggg=="
                alt="lilly picture with text from Brené Brown overlaid" class="max-w-full rounded-lg shadow-lg"/>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 mt-16 sm:mt-0">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Therapy services</h3>
                <ul class="list-none mt-4 font-light">
                  <li class="py-2">
                    <div class="flex items-center">

                      <div>
                        <h4 class="font-bold mb-2">
                          Individual psychotherapy
                        </h4>
                        <p class="mb-4">
                          Addiction itself is complex and each patient is unique in their experiences.
                          As such, my approach is holistic in that I consider various components such as developmental history, environmental contexts, and medical histories.
                        </p>
                        <p class="mb-4">
                          Addiction is often accompanied by a history of trauma, coping difficulties and feelings of grief, guilt, shame, and hopelessness. Patients may experience an impact on the functioning in areas of their life such as work, relationships, and health due to their addiction. The recovery process would entail exploring these spheres and the behavioral patterns of the individual as a means to cope.
                           Medium to long term therapy is best suited for addiction treatment due to the complexity. If in-patient treatment is required, a referral will be made that is best suited to the patient.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">

                      <div>
                        <h4 class="font-bold mb-2">Couples therapy</h4>
                        <p class="mb-4">
                          Addiction does not only affect the individual, but it affects their loved ones as well. Couples therapy provides a platform for the couple to explore their relationship difficulties and to ascertain a path forward.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">

                      <div>
                        <h4 class="font-bold mb-2">Psychoeducation</h4>
                        <p class="mb-4">
                          Addiction is complex and often friends and families may not understand how to support their loved ones and may need guidance. Psychoeducation includes but is not limited to guidance on; appropriate boundaries, recovery process,
                           the fellowship, substance use disorders, dual-diagnosis, the impact of psychiatric comorbidity and the effect addiction may have on the family system.
                        </p>
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
                <p class="mt-4 text-lg font-light">
                  In the May 2020 edition of the South African Psychiatry Magazine - an article on addiction care during COVID-19
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <h4 class="font-bold">
                          <a href="/South_African_Psychiatry_Magazine_Article.pdf" target="_blank" download>Download the article</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <h4 class="font-semibold">
                          <a rel="noopener" href="https://www.yumpu.com/en/document/read/63387059/south-african-psychiatry-may-2020" target="_blank">View Magazine</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4 relative text-center">
              <img data-piio="/publication.jpg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+f9vPQAJZAN2rlRQVAAAAABJRU5ErkJggg=="
                alt="South African Psychiatry May Edition Cover Image" class="max-w-full rounded-lg shadow-lg"/>
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
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="full_name">Full Name</label>
                      <input
                        type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        name="full_name"
                        id="full_name"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Email</label>
                      <input type="email"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        name="email"
                        id="email"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label  class="block uppercase text-gray-700 text-xs font-bold mb-2" for="message">Message</label>
                      <textarea
                        rows="4"
                        cols="80"
                        name="message"
                        id="message"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."></textarea>
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

