<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SPA</title>
    @vite('resources/css/app.css')
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <div class="ezy__nav3 light py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
        <nav>
          <div class="container px-4">
            <div class="flex items-center justify-between lg:justify-start">
              <a class="font-black text-3xl" href="#"> LOGO </a>
              <button class="block lg:hidden cursor-pointer h-10 z-20" type="button" id="hamburger">
                <div class="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
                <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
                <div class="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
              </button>
              <div
                class="flex flex-col lg:flex-row justify-between items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent grow"
              >
                <ul class="flex items-center mb-2 lg:mb-0 mt-6 lg:mt-0">
                  <li class="nav-item">
                    <form class="lg:mx-4 mb-4 lg:mb-0">
                      <div class="flex rounded-lg overflow-hidden">
                        <input
                          class="min-h-[48px] grow px-4 bg-[#a3bef124]"
                          type="search"
                          placeholder="City, Address, Zip"
                          aria-label="Search"
                        />
                        <button class="bg-blue-600 text-white hover:bg-opacity-90 min-h-[48px] px-4" type="submit">
                          <span class="fas fa-search"></span>
                        </button>
                      </div>
                    </form>
                  </li>
                  <li class="">
                    <a class="px-4 opacity-100" href="#">Home</a>
                  </li>
                  <li class="">
                    <a class="px-4 opacity-50 hover:opacity-100" href="#">Services</a>
                  </li>
                  <li class="">
                    <a class="px-4 opacity-50 hover:opacity-100" href="#">Why us?</a>
                  </li>
                  <li class="">
                    <a class="px-4 opacity-50 hover:opacity-100" href="#">How It Works</a>
                  </li>
                </ul>
                <ul class="flex flex-row ml-auto mb-2 lg:mb-0">
                  <li class="nav-item">
                    <button class="bg-blue-600 text-white hover:bg-opacity-90 rounded-lg py-1.5 px-4">
                      Signup or Login
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
</body>
</html>