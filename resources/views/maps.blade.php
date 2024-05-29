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


  {{-- coba --}}

  <section
class="ezy__epcategory9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10"
>
<!-- shapes -->
<div class="absolute top-0 right-0">
  <img
    src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_10_shape1.png"
    alt=""
  />
</div>

<div class="container px-4 mx-auto relative">
  <h2
    class="text-[32px] md:text-5xl leading-tight font-bold text-center mb-12"
  >
    Top Category
  </h2>

  <div class="relative">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 sm:col-span-6 md:col-span-3 my-12">
        <a
          href="#!"
          class="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700"
        >
          <div
            class="absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40"
          >
            <img
              src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_1.png"
              alt=""
              class="w-20"
            />
          </div>
          <h4 class="text-2xl font-medium mb-6">Toys</h4>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3 my-12">
        <a
          href="#!"
          class="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700"
        >
          <div
            class="absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40"
          >
            <img
              src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png"
              alt=""
              class="w-20"
            />
          </div>
          <h4 class="text-2xl font-medium mb-6">Kids</h4>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3 my-12">
        <a
          href="#!"
          class="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700"
        >
          <div
            class="absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40"
          >
            <img
              src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png"
              alt=""
              class="w-20"
            />
          </div>
          <h4 class="text-2xl font-medium mb-6">Bags</h4>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-3 my-12">
        <a
          href="#!"
          class="bg-white dark:bg-slate-800 shadow-xl relative flex items-end justify-center min-h-[155px] rounded-t-[30px] rounded-b-[15px] border dark:border-slate-700"
        >
          <div
            class="absolute -top-[75px] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-full flex justify-center items-center h-40 w-40"
          >
            <img
              src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png"
              alt=""
              class="w-20"
            />
          </div>
          <h4 class="text-2xl font-medium mb-6">Babies</h4>
        </a>
      </div>
    </div>
    <div class="flex items-center">
      <button
        class="absolute top-1/2 left-0 md:-left-7 -translate-y-1/2 bg-white bg-opacity-50 shadow-xl text-pink-500 text-xl font-bold flex justify-center items-center rounded-full px-5 py-4 mr-4"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        class="absolute top-1/2 right-0 md:-right-7 -translate-y-1/2 bg-white bg-opacity-50 shadow-xl text-pink-500 text-xl font-bold flex justify-center items-center rounded-full px-5 py-4"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</div>
</section>

    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <!--
          Background backdrop, show/hide based on slide-over state.
      
          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <!--
                Slide-over panel, show/hide based on slide-over state.
      
                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                  From: "translate-x-full"
                  To: "translate-x-0"
                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                  From: "translate-x-0"
                  To: "translate-x-full"
              -->
              <div class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="absolute -inset-0.5"></span>
                          <span class="sr-only">Close panel</span>
                          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
      
                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                            </div>
      
                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Throwback Hip Bag</a>
                                  </h3>
                                  <p class="ml-4">$90.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Salmon</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>
      
                                <div class="flex">
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center">
                            </div>
      
                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Medium Stuff Satchel</a>
                                  </h3>
                                  <p class="ml-4">$32.00</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">Blue</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>
      
                                <div class="flex">
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
      
                          <!-- More products... -->
                        </ul>
                      </div>
                    </div>
                  </div>
      
                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
</body>
</html>