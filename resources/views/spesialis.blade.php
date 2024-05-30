<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
  {{-- NEW --}}

  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <div class="flex items-center mb-4">
        <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img src="https://via.placeholder.com/150" alt="Profile Image" class="w-full h-full object-cover">
        </div>
        <div>
          <h2 class="text-xl font-bold">Endang Soekanti</h2>
          <p class="text-gray-500">Psikologi Klinis, Hospital UGM Yogyakarta</p>
          <p class="text-gray-500">Yogyakarta, Sleman</p>
        </div>
      </div>
  
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <input type="radio" name="location" value="di-yogyakarta" class="mr-2" checked>
          <label for="di-yogyakarta">Di Yogyakarta</label>
        </div>
        <div class="flex items-center">
          <input type="radio" name="location" value="jawa-timur" class="mr-2">
          <label for="jawa-timur">Jawa Timur</label>
        </div>
        <div class="flex items-center">
          <input type="radio" name="location" value="jawa-tengah" class="mr-2">
          <label for="jawa-tengah">Jawa Tengah</label>
        </div>
        <div class="flex items-center">
          <input type="radio" name="location" value="jawa-barat" class="mr-2">
          <label for="jawa-barat">Jawa Barat</label>
        </div>
        <div class="flex items-center">
          <input type="radio" name="location" value="jakarta" class="mr-2">
          <label for="jakarta">Jakarta</label>
        </div>
      </div>
  
      <div class="mt-6">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
          Make promise
        </button>
      </div>
    </div>
  </div>


    <section class="ezy__careers13 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div class="container px-4">
          <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6">
              <div>
                <h1 class="text-[32px] font-bold capitalize lg:text-[52px] mt-6 mb-4">Start Doing Works That Matters</h1>
                <p class="text-lg font-medium leading-normal lg:text-xl lg:pr-5">
                  We are looking for passionate people to join us on our mission. We value flat hierachies, clear
                  communication, full ownership and responsibility.
                </p>
              </div>
            </div>
            <div class="col-span-12">
              <hr class="mt-12 mb-6 mx-2 dark:border-gray-700" />
            </div>
            <!-- cards -->
            <div class="col-span-12">
              <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-4">
                  <div class="mt-6">
                    <h3 class="text-3xl font-medium mb-2">Design</h3>
                    <p class="opacity-75">Open positions in our design team</p>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-8">
                  <!-- card starts -->
                  <div
                    class="bg-white dark:bg-[#1E2735] border dark:border-[#1E2735] shadow-sm rounded-xl w-full p-4 md:p-6 mt-6"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 lg:col-span-8">
                        <div class="">
                          <h4 class="inline-flex text-2xl font-medium mb-4">Product Designer</h4>
                          <p
                            class="py-1 px-3 w-48 inline-flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 ml-2 mb-2"
                          >
                            Design
                          </p>
                          <p class="opacity-75 mb-3">We're looking for a mid level product designer to join our team.</p>
                          <div class="flex items-center mb-2">
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-map-marker-alt mr-2 opacity-75"></i>
                              <p class="opacity-75">Remote friendly</p>
                            </div>
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-clock mr-2 opacity-75"></i>
                              <p class="opacity-75">Full-time</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-4 mt-6 lg:mt-0">
                        <div class="flex flex-col lg:items-center">
                          <p
                            class="py-1 px-3 w-48 flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 mb-4"
                          >
                            Melbourne, Australia
                          </p>
                          <div>
                            <button class="font-medium hover:text-blue-600 transition p-0 ml-2 lg:ml-0">
                              Apply Now <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- card starts -->
                  <div
                    class="bg-white dark:bg-[#1E2735] border dark:border-[#1E2735] shadow-sm rounded-xl w-full p-4 md:p-6 mt-6"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 lg:col-span-8">
                        <div class="">
                          <h4 class="inline-flex text-2xl font-medium mb-4">UI/UX Designer</h4>
                          <p
                            class="py-1 px-3 w-48 inline-flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 ml-2 mb-2"
                          >
                            Design
                          </p>
                          <p class="opacity-75 mb-3">We're looking for a mid level product designer to join our team.</p>
                          <div class="flex items-center mb-2">
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-map-marker-alt mr-2 opacity-75"></i>
                              <p class="opacity-75">Remote friendly</p>
                            </div>
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-clock mr-2 opacity-75"></i>
                              <p class="opacity-75">Part-time</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-4 mt-6 lg:mt-0">
                        <div class="flex flex-col lg:items-center">
                          <p
                            class="py-1 px-3 w-48 flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 mb-4"
                          >
                            Tokyo, Japan
                          </p>
                          <div>
                            <button class="font-medium hover:text-blue-600 transition p-0 ml-2 lg:ml-0">
                              Apply Now <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="col-span-12">
              <hr class="mt-12 mb-6 mx-2 dark:border-gray-700" />
            </div>
      
            <!-- cards -->
            <div class="col-span-12">
              <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-4">
                  <div class="mt-6">
                    <h3 class="text-3xl font-medium mb-2">Developer</h3>
                    <p class="opacity-75">Open positions in our developer team</p>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-8">
                  <!-- card starts -->
                  <div
                    class="bg-white dark:bg-[#1E2735] border dark:border-[#1E2735] shadow-sm rounded-xl w-full p-4 md:p-6 mt-6"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 lg:col-span-8">
                        <div class="">
                          <h4 class="inline-flex text-2xl font-medium mb-4">React JS Developer</h4>
                          <p
                            class="py-1 px-3 w-48 inline-flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 ml-2 mb-2"
                          >
                            Developer
                          </p>
                          <p class="opacity-75 mb-3">We're looking for a mid level product designer to join our team.</p>
                          <div class="flex items-center mb-2">
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-map-marker-alt mr-2 opacity-75"></i>
                              <p class="opacity-75">Office based</p>
                            </div>
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-clock mr-2 opacity-75"></i>
                              <p class="opacity-75">Full-time</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-4 mt-6 lg:mt-0">
                        <div class="flex flex-col lg:items-center">
                          <p
                            class="py-1 px-3 w-48 flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 mb-4"
                          >
                            Sydney, Australia
                          </p>
                          <div>
                            <button class="font-medium hover:text-blue-600 transition p-0 ml-2 lg:ml-0">
                              Apply Now <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- card starts -->
                  <div
                    class="bg-white dark:bg-[#1E2735] border dark:border-[#1E2735] shadow-sm rounded-xl w-full p-4 md:p-6 mt-6"
                  >
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 lg:col-span-8">
                        <div class="">
                          <h4 class="inline-flex text-2xl font-medium mb-4">Wordpress Developer</h4>
                          <p
                            class="py-1 px-3 w-48 inline-flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 ml-2 mb-2"
                          >
                            Developer
                          </p>
                          <p class="opacity-75 mb-3">We're looking for a mid level product designer to join our team.</p>
                          <div class="flex items-center mb-2">
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-map-marker-alt mr-2 opacity-75"></i>
                              <p class="opacity-75">Remote friendly</p>
                            </div>
                            <div class="flex items-center mr-2 sm:mr-6">
                              <i class="fas fa-clock mr-2 opacity-75"></i>
                              <p class="opacity-75">Part-time</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-12 lg:col-span-4 mt-6 lg:mt-0">
                        <div class="flex flex-col lg:items-center">
                          <p
                            class="py-1 px-3 w-48 flex items-center justify-center rounded-2xl bg-gray-400 dark:bg-gray-600 bg-opacity-20 dark:bg-opacity-20 mb-4"
                          >
                            Langthui, Maldhive
                          </p>
                          <div>
                            <button class="font-medium hover:text-blue-600 transition p-0 ml-2 lg:ml-0">
                              Apply Now <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
</body>
</html>