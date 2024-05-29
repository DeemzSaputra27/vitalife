<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-100">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VITALIFE</title>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>

<body class="h-full">
  {{-- @section('content') --}}

    <div class="min-h-full">
      <x-navbar></x-navbar>

        <main>
            <div class="bg-biru mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div class="pt-5">
                  <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <!--Left Col-->
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                      <p class="uppercase tracking-loose w-full">Skip the Travel! Take Online</p>
                      <h1 class="my-4 text-5xl font-bold leading-tight">
                        Welcome <span class="text-biru2 ml-2 my-4 text-5xl font-bold leading-tight">Vitalife</span>
                      </h1>
                      <p class="leading-normal text-2xl mb-8">
                        We are the solution for travelling in a healthy condition and we provide health specialists
                      </p>
                      <button class="mx-auto lg:mx-0 hover:underline bg-biru2 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Consult Now
                      </button>
                    </div>
                    <!--Right Col-->
                    <div class="w-full md:w-3/5 py-6 text-center">
                        <div class="shadow-md rounded-lg overflow-hidden">
                          <img class="w-full h-auto scale-75" src="../image/doc2.png" />
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            {{-- Wellness Support --}}
              <div class="p-20 text-center flex flex-col items-center">
                <h2 class="text-4xl font-bold mb-8">Wellness Support</h2>
                <div class="flex space-x-20">
                  <a href="#spa" class="flex-shrink-0 ml-8 mr-0 group">
                    <div class="relative p-4 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg">
                      <img src="../image/spa.png" alt="spa" class="h-32 mb-5">
                      <p class="text-lg font-bold">SPA</p>
                    </div>
                  </a>
                  <div class="flex-shrink-0 w-16"></div>
                  <a href="#yoga" class="flex-shrink-0 ml-8 mr-0 group">
                    <div class="relative p-4 group-hover:shadow-md rounded-lg  group-hover:border-gray-500 group-hover:rounded-lg">
                      <img src="../image/meditation.png" alt="Meditation" class="h-32 mb-5">
                      <p class="text-lg font-bold">YOGA</p>
                    </div>
                  </a>
                  <div class="flex-shrink-0 w-16"></div>
                  <a href="#event" class="flex-shrink-0 ml-8 mr-0 group">
                    <div class="relative p-4 group-hover:shadow-md rounded-lg  group-hover:border-gray-500 group-hover:rounded-lg">
                      <img src="../image/run.png" alt="event" class="h-32 mb-5">
                      <p class="text-lg font-bold">EVENT</p>
                    </div>
                  </a>
                </div>
              </div>

            <!--  Spesialis  -->

            <div class="bg-biru p-20 text-center flex flex-col items-center"> 
              <h2 class="text-3xl font-bold mb-8">Specialisation</h2> 
              <div class="grid grid-cols-4 gap-20"> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/anatomy.png" alt="Anatomy" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Anatomy</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/care.png" alt="Primary Care" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Primary Care</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/cardiology.png" alt="Cardiology" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Cardiology</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/skin.png" alt="Skin & Genitals" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Skin & Genitals</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/human.png" alt="Human Senses" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Human Senses</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/psico.png" alt="Piscologist" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Piscologist</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/fisio.png" alt="Fisioterapy" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Fisioterapy</p> 
                  </div> 
                </a> 
                <a href="#event" class="flex flex-col items-center group"> 
                  <div class="relative p-3 group-hover:shadow-md rounded-lg group-hover:border-gray-500 group-hover:rounded-lg"> 
                    <img src="../image/preg.png" alt="Pregnancy" class="h-24 mb-3"> 
                    <p class="text-base font-bold">Pregnancy</p> 
                  </div> 
                </a> 
              </div> 
              <button class="bg-biru2 text-white px-6 py-3 rounded-md mt-8 hover:bg-gray-700">View All</button> </div>
            </div>
            
            <section class="ezy__team15 light py-14 md:py-24 bg-white text-zinc-900 dark:text-white z-[1]">
              <div class="container px-4 mx-auto">
                <h1 class="text-3xl md:text-[45px] font-bold mb-12">Featured Instructor</h1>
                <div class="relative">
                  <div class="grid grid-cols-6 mt-12 gap-6">
                    <!-- card starts -->
                    <div class="col-span-6 md:col-span-3 lg:col-span-2">
                      <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <div class="relative">
                          <img
                            class="w-full rounded-t-xl"
                            src="https://cdn.easyfrontend.com/pictures/users/userM1.jpg"
                            alt=""
                          />
                          <div class="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
                            <h4 class="text-2xl font-bold mb-2">Alicia Nicolson</h4>
                            <p class="mb-2">Lorem ipsum dolor sit amet.</p>
                            <a href="#" class="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
                              >View Details</a
                            >
                          </div>
                        </div>
                        <div class="flex p-4 md:p-6 mb-4">
                          <div class="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                            <h5 class="text-xl font-medium mb-1">85 + Classes</h5>
                            <p class="">From The masters</p>
                          </div>
                          <div class="w-1/2 px-4">
                            <h5 class="text-xl font-medium mb-1">20 Lessons</h5>
                            <p class="">Average Per Class</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card ends -->
                    <!-- card starts -->
                    <div class="col-span-6 md:col-span-3 lg:col-span-2">
                      <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <div class="relative">
                          <img
                            class="w-full rounded-t-xl"
                            src="https://cdn.easyfrontend.com/pictures/users/userM16.jpg"
                            alt=""
                          />
                          <div class="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
                            <h4 class="text-2xl font-bold mb-2">Alex Hales</h4>
                            <p class="mb-2">The light creature divide him.</p>
                            <a href="#" class="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
                              >View Details</a
                            >
                          </div>
                        </div>
                        <div class="flex p-4 md:p-6 mb-4">
                          <div class="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                            <h5 class="text-xl font-medium mb-1">17 + Classes</h5>
                            <p class="">From The masters</p>
                          </div>
                          <div class="w-1/2 px-4">
                            <h5 class="text-xl font-medium mb-1">27 Lessons</h5>
                            <p class="">Average Per Class</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card ends -->
                    <!-- card starts -->
                    <div class="col-span-6 md:col-span-3 lg:col-span-2">
                      <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <div class="relative">
                          <img
                            class="w-full rounded-t-xl"
                            src="https://cdn.easyfrontend.com/pictures/users/userM22.jpg"
                            alt=""
                          />
                          <div class="absolute bottom-7 w-full flex flex-col justify-center items-center z-10 text-white">
                            <h4 class="text-2xl font-bold mb-2">Elecya Perry</h4>
                            <p class="mb-2">Voluptas Possi numquam id ipsum.</p>
                            <a href="#" class="px-5 py-2 bg-blue-600 text-white hover:bg-opacity-90 rounded-md mt-4"
                              >View Details</a
                            >
                          </div>
                        </div>
                        <div class="flex p-4 md:p-6 mb-4">
                          <div class="w-1/2 px-4 border-dashed border-r border-black dark:border-white text-end">
                            <h5 class="text-xl font-medium mb-1">19 + Classes</h5>
                            <p class="">From The masters</p>
                          </div>
                          <div class="w-1/2 px-4">
                            <h5 class="text-xl font-medium mb-1">31 Lessons</h5>
                            <p class="">Average Per Class</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card ends -->
                  </div>
                  <button
                    class="absolute top-1/2 -translate-y-1/2 left-0 md:-left-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10"
                  >
                    <i class="fas fa-angle-left"></i>
                  </button>
                  <button
                    class="absolute top-1/2 -translate-y-1/2 right-0 md:-right-3 text-2xl bg-blue-600 bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full z-10"
                  >
                    <i class="fas fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </section>
            
            <section class="ezy__about9 light py-14 md:py-24 bg-biru dark:text-[#0b1727]">
              <div class="container px-4">
                <div class="grid grid-cols-12 items-center gap-4 mb-12">
                  <div class="col-span-12 lg:col-span-6">
                    <h6 class="font-medium opacity-70 mb-2">Hello Visitor,</h6>
                    <h1 class="text-3xl leading-none font-bold uppercase tracking-wider mb-2">Welcome to easyfrontend</h1>
                    <hr class="bg-blue-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
                    <p class="opacity-70 mb-2">
                      Since our inception set out in 2012, TalEx has set out to disrupt inception the HR & Talent/Staffing
                      Management industry. Purposefully designed by our founders (Amrita Grewal and Julie Dacar) to connect
                      great companies and great talent.
                    </p>
                    <ul class="flex flex-col ezy__about9-features mt-5">
                      <li>
                        <span class="fas fa-check text-blue-600 mr-2 mb-4 text-sm"></span>
                        <span class="opacity-75 text-sm">Beautiful and easy to understand UI.</span>
                      </li>
                      <hr class="w-11/12 my-2"/>
                      <li>
                        <span class="fas fa-check text-blue-600 mr-2 mb-4 text-sm"></span>
                        <span class="opacity-75 text-sm">Theme advantages are pixel perfect design & clear code</span>
                      </li>
                      <hr class="w-11/12 my-2" />
                      <li>
                        <span class="fas fa-check text-blue-600 mr-2 mb-4 text-sm"></span>
                        <span class="opacity-75 text-sm">Present your services with flexible</span>
                      </li>
                      <hr class="w-11/12 my-2" />
                      <li>
                        <span class="fas fa-check text-blue-600 mr-2 mb-4 text-sm"></span>
                        <span class="opacity-75 text-sm">Find more creative ideas for your projects</span>
                      </li>
                      <hr class="w-11/12 my-2" />
                      <li>
                        <span class="fas fa-check text-blue-600 mr-2 text-sm"></span>
                        <span class="opacity-75 text-sm">Faucibus porta lacus fringilla vel</span>
                      </li>
                    </ul>
                    <div class="mt-12">
                      <button
                        class="bg-gray-900 text-white dark:bg-biru2 dark:text-white hover:bg-opacity-90 rounded-md px-5 py-2 transition"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div class="col-span-12 lg:col-span-6">
                    <div class="mt-12 lg:mt-0">
                      <img
                        src="https://cdn.easyfrontend.com/pictures/about/about9.jpg"
                        alt=""
                        class="max-w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
{{-- 
              <section
              class="ezy__blog13 py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden"
            >
              <div class="container px-8 md:px-24">
                <div class="grid grid-cols-1">
                  <div class="col-span-1">
                    <h1 class="text-2xl md:text-[45px] leading-none font-bold">
                      Our Recent Blogs
                    </h1>
                  </div>
            
                  <div class="col-span-1">
                    <div class="grid grid-cols-6 gap-x-6">
                      <!-- card item -->
                      <div class="col-span-6 md:col-span-3 lg:col-span-2">
                        <div
                          class="mt-6 md:mt-12 bg-gray-100 dark:bg-[#1E2735] rounded-xl overflow-hidden"
                        >
                          <div class="relative">
                            <img
                              src="https://cdn.easyfrontend.com/pictures/blog/blog_11_1.png"
                              alt=""
                              class="w-full"
                            />
                            <img
                              class="absolute -bottom-6 left-6 w-12 h-12 rounded-full"
                              src="https://cdn.easyfrontend.com/pictures/instructor/instructor_2_3.png"
                              alt=""
                            />
                          </div>
                          <div class="p-6 pb-8">
                            <a href="" class="hover:text-blue-600">
                              <h5 class="text-[19px] font-medium leading-6 mt-3 mb-3">
                                How to pitch a video game: 7 tips for pitching a video
                                game
                              </h5>
                            </a>
                            <p class="text-[17px] leading-none opacity-80 mb-5">
                              August 10th, 2022
                            </p>
                            <p class="opacity-80 mb-6">
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </p>
                            <a
                              href="#"
                              class="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-sm py-2.5 px-6 mb-2"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
                      <!-- card item -->
                      <div class="col-span-6 md:col-span-3 lg:col-span-2">
                        <div
                          class="mt-6 md:mt-12 bg-gray-100 dark:bg-[#1E2735] rounded-xl overflow-hidden"
                        >
                          <div class="relative">
                            <img
                              src="https://cdn.easyfrontend.com/pictures/blog/blog_11_2.png"
                              alt=""
                              class="w-full"
                            />
                            <img
                              class="absolute -bottom-6 left-6 w-12 h-12 rounded-full"
                              src="https://cdn.easyfrontend.com/pictures/instructor/instructor_2_3.png"
                              alt=""
                            />
                          </div>
                          <div class="p-6 pb-8">
                            <a href="" class="hover:text-blue-600">
                              <h5 class="text-[19px] font-medium leading-6 mt-3 mb-3">
                                How to pitch a video game: 7 tips for pitching a video
                                game
                              </h5>
                            </a>
                            <p class="text-[17px] leading-none opacity-80 mb-5">
                              August 10th, 2022
                            </p>
                            <p class="opacity-80 mb-6">
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </p>
                            <a
                              href="#"
                              class="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-sm py-2.5 px-6 mb-2"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
                      <!-- card item -->
                      <div class="col-span-6 md:col-span-3 lg:col-span-2">
                        <div
                          class="mt-6 md:mt-12 bg-gray-100 dark:bg-[#1E2735] rounded-xl overflow-hidden"
                        >
                          <div class="relative">
                            <img
                              src="https://cdn.easyfrontend.com/pictures/blog/blog_11_3.png"
                              alt=""
                              class="w-full"
                            />
                            <img
                              class="absolute -bottom-6 left-6 w-12 h-12 rounded-full"
                              src="https://cdn.easyfrontend.com/pictures/instructor/instructor_2_3.png"
                              alt=""
                            />
                          </div>
                          <div class="p-6 pb-8">
                            <a href="" class="hover:text-blue-600">
                              <h5 class="text-[19px] font-medium leading-6 mt-3 mb-3">
                                How to pitch a video game: 7 tips for pitching a video
                                game
                              </h5>
                            </a>
                            <p class="text-[17px] leading-none opacity-80 mb-5">
                              August 10th, 2022
                            </p>
                            <p class="opacity-80 mb-6">
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </p>
                            <a
                              href="#"
                              class="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-sm py-2.5 px-6 mb-2"
                              >Read More</a
                            >
                          </div>
                        </div>
                      </div>
            
                      <div class="col-span-6 text-center">
                        <button
                          class="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition text-blue-600 py-3 px-7 mt-12"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
 --}}
            {{-- <section
  class="ezy__contact6 light py-14 md:py-24 text-zinc-900 dark:text-white bg-cover bg-center bg-no-repeat overflow-hidden"
  style="background-image: url(https://cdn.easyfrontend.com/pictures/contact/contact_6.svg)"
>
  <div class="container px-4">
    <div class="grid grid-cols-12 py-6 lg:gap-8">
      <div class="col-span-12 lg:col-span-7 mb-4 lg:mb-0"></div>
      <div class="col-span-12 lg:col-span-5">
        <div class="bg-white dark:bg-[#162231] shadow-xl rounded-2xl p-6 md:p-12">
          <h2 class="text-2xl md:text-[45px] leading-none font-bold mb-4">Contact Us</h2>
          <p class="text-lg mb-12">We list your menu online, help you process orders.</p>

          <form class="">
            <div class="mb-4">
              <input
                type="text"
                class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                placeholder="Enter Name"
              />
            </div>
            <div class="mb-4">
              <input
                type="email"
                class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                placeholder="Enter Email"
              />
            </div>
            <div class="mb-4">
              <textarea
                name="message"
                class="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
                placeholder="Enter Message"
                rows="3"
              ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
 --}}


            <!-- About Us -->
            <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                    alt=""
                    class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
                <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </div>
                <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </div>
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aut nulla architecto ex consectetur repudiandae labore facilis vitae quibusdam incidunt amet, veritatis obcaecati nobis recusandae asperiores, dolorum necessitatibus, at quisquam.</p>
                    </div>
                    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div
                            class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
                            <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
                        </div>
                        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Offices worldwide</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Full-time colleagues</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Hours per week</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
                            </div>
                            <div class="flex flex-col-reverse">
                                <dt class="text-base leading-7 text-gray-300">Paid time off</dt>
                                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </main>

        <footer class="bg-white">
            <div class="container mx-auto px-8">
                <div class="w-full flex flex-col md:flex-row py-6">
                    <div class="flex-1 mb-6 text-black">
                        {{-- <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                            href="#">
                            <!--Icon from: http://www.potlabicons.com/ -->
                            <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512.005 512.005">
                                <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502"
                                    transform="matrix(1,0,0,1,0,0)" />
                                <path class="plane-take-off"
                                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z " />
                            </svg>
                            VITALIFE
                        </a> --}}
                        <img class="h-10 w-25" src="../image/LOGO_2.png" alt="Your Company">
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Links</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex-1">
                        <p class="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul class="list-reset mb-6">
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official
                                    Blog</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#"
                                    class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="https://www.freepik.com/free-photos-vectors/background" class="text-gray-500">Vitalife.</a>
        </footer>
    </div>
  {{-- @endsection --}}


</body>

</html> 
