<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
  <section
  class="ezy__travel1 light"
  style="background-image: url(https://cdn.easyfrontend.com/pictures/hero/header35-img.png)"
  >
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div id="ezy__travel1-controls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8 text-center">
                  <h2 class="ezy__travel1-heading mb-4">Your Journey Begins</h2>
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-11 col-xl-9">
                      <p class="ezy__travel1-sub-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum molestie sem
                        volutpat, non imperdiet leo porttitor. Nullam tortor nibh, dictum vitae porttitor eu,
                        pharetra nec tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8 text-center">
                  <h2 class="ezy__travel1-heading mb-4">Your Journey Begins</h2>
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-11 col-xl-9">
                      <p class="ezy__travel1-sub-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum molestie sem
                        volutpat, non imperdiet leo porttitor. Nullam tortor nibh, dictum vitae porttitor eu,
                        pharetra nec tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10 col-xl-8 text-center">
                  <h2 class="ezy__travel1-heading mb-4">Your Journey Begins</h2>
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-11 col-xl-9">
                      <p class="ezy__travel1-sub-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere ipsum molestie sem
                        volutpat, non imperdiet leo porttitor. Nullam tortor nibh, dictum vitae porttitor eu,
                        pharetra nec tellus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ezy__travel1-arrows d-flex align-items-center">
            <button
              class="carousel-control-prev ezy__travel1-arrow-left me-4"
              type="button"
              data-bs-target="#ezy__travel1-controls"
              data-bs-slide="prev"
            >
              <i class="fas fa-arrow-left"></i>
            </button>
            <button
              class="carousel-control-next ezy__travel1-arrow-right"
              type="button"
              data-bs-target="#ezy__travel1-controls"
              data-bs-slide="next"
            >
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- search bar -->
    <div class="row ezy__travel1-search-bar">
      <div class="col-12">
        <div class="card border-0 p-4">
          <form action="">
            <!-- from -->
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control" id="from" placeholder="From" />
              <i class="ezy__travel1-refresh-icon fas fa-sync ms-2"></i>
            </div>
            <!-- to -->
            <div class="form-group">
              <input type="text" class="form-control" id="to" placeholder="To" />
            </div>
            <!-- depart -->
            <div class="form-group">
              <input type="date" class="form-control" id="depart" placeholder="depart" />
            </div>
            <!--  way -->
            <div class="form-group">
              <div class="input-group">
                <select type="inputWay" class="form-select">
                  <option selected>One Way</option>
                  <option>Multiple Way</option>
                </select>
              </div>
            </div>
            <!-- passengers -->
            <div class="form-group">
              <select type="passengers" class="form-select">
                <option selected>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
                <option>5 Passengers</option>
              </select>
            </div>

            <!-- type -->
            <div class="form-group">
              <select type="type" class="form-select">
                <option selected>Business</option>
                <option>Economy</option>
                <option>1st Class</option>
              </select>
            </div>
            <!-- button -->
            <div>
              <button class="btn ezy__travel1-search-btn w-100">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.ezy__travel1 {
  /* Bootstrap variables */
  --bs-body-color: #15191e;
  --bs-body-bg: rgb(255, 255, 255);

  /* Easy Frontend variables */
  --ezy-theme-color: rgb(13, 110, 253);
  --ezy-theme-color-rgb: 13, 110, 253;
  --ezy-body-color-invert: rgb(246, 246, 246);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  padding: 60px 0;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 1;
}

@media (min-width: 768px) {
  .ezy__travel1 {
    padding: 100px 0;
  }
}

.ezy__travel1-heading {
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
}

@media (min-width: 991px) {
  .ezy__travel1-heading {
    font-size: 80px;
  }
}

.ezy__travel1-sub-heading {
  font-size: 18px;
  line-height: 32px;
  opacity: 0.7;
}

/* arrows */
.ezy__travel1-arrows {
  position: absolute;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
}
@media (min-width: 991px) {
  .ezy__travel1-arrows {
    position: absolute;
    top: 50%;
    left: 0%;
    right: 0;
    transform: translateY(-50%);
  }
}
.ezy__travel1-arrow-left,
.ezy__travel1-arrow-right {
  position: relative;
  font-size: 24px;
  border: 1px solid #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
}
.ezy__travel1-arrow-left:hover,
.ezy__travel1-arrow-right:hover {
  color: var(--ezy-theme-color);
  border-color: var(--ezy-theme-color);
}
@media (min-width: 991px) {
  .ezy__travel1-arrow-left,
  .ezy__travel1-arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

/* search bar */
.ezy__travel1-search-bar {
  margin-top: 100px;
}
@media (min-width: 768px) {
  .ezy__travel1-search-bar {
    margin-top: 200px;
  }
}

.ezy__travel1-search-bar .card {
  border-radius: 5px;
}

.ezy__travel1-search-bar form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.ezy__travel1-search-bar form div:last-child {
  grid-column-end: span 2;
}
@media (min-width: 991px) {
  .ezy__travel1-search-bar form {
    grid-template-columns: repeat(7, 1fr);
  }
  .ezy__travel1-search-bar form div {
    grid-column-end: span 1 !important;
  }
}

.ezy__travel1-refresh-icon {
  cursor: pointer;
  color: var(--bs-body-color);
}

.ezy__travel1-search-bar .form-control,
.ezy__travel1-search-bar .form-select {
  min-height: 40px;
  line-height: 36px;
  border: 1px solid #eaeaea;
  background-color: transparent;
  color: #3b3b3b;
  border-radius: 5px;
}
.ezy__travel1-search-bar .form-control::placeholder,
.ezy__travel1-search-bar .form-select::placeholder {
  color: #3b3b3b;
}

.ezy__travel1-search-bar .form-control:focus {
  border-color: var(--ezy-theme-color);
  box-shadow: none;
  color: #3a3a3a;
}

.ezy__travel1-search-btn {
  padding: 5px 30px;
  background-color: var(--ezy-theme-color);
  color: #ffffff;
  border-radius: 5px;
  height: 48px;
  font-size: 15px;
  line-height: 1;
  font-weight: 400;
}

.ezy__travel1-search-btn:hover {
  color: #ffffff;
  background-color: rgba(var(--ezy-theme-color-rgb), 0.9);
}
</style>

    <section class="ezy__careers15 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div class="container px-4">
          <div class="grid grid-cols-12">
            <div class="col-span-12">
              <h1 class="text-3xl lg:text-[40px] font-bold mb-12">All Jobs</h1>
            </div>
            <!-- card start -->
            <div class="col-span-12 mt-6">
              <div
                class="bg-white shadow-2xl dark:bg-[#1E2735] dark:shadow-none hover:bg-blue-600 hover:bg-opacity-20 dark:hover:bg-blue-600 dark:hover:bg-opacity-20 group hover:scale-[1.01] duration-[.4s] p-4 md:p-6"
              >
                <div class="grid grid-cols-12 items-center w-full">
                  <div class="col-span-12 md:col-span-2">
                    <div
                      class="w-24 h-24 border border-gray-200 dark:border-gray-700 rounded-full flex justify-center items-center mx-auto"
                    >
                      <img
                        src="https://cdn.easyfrontend.com/pictures/logos/instagram-logo.png"
                        alt=""
                        class="max-w-[50px] h-auto"
                      />
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-7 mt-4 md:mt-0">
                    <div>
                      <a href="#" class="text-center md:text-start hover:text-blue-600"
                        ><h4 class="text-2xl font-bold mb-2">User Experience Design Intern, Summer 2019</h4></a
                      >
                      <h5 class="text-center md:text-start text-xl font-medium mb-2">
                        <span class="text-blue-600">Google</span> - Sydney, AU
                      </h5>
                    </div>
                    <div class="text-center md:text-start mt-6">
                      <p class="opacity-50 mb-2">Posted 6 Days ago - 68 applicants</p>
                      <div class="flex justify-center md:justify-start items-center">
                        <div>
                          <img
                            src="https://cdn.easyfrontend.com/pictures/users/user2.jpg"
                            alt=""
                            class="rounded-full"
                            width="50"
                            height="50"
                          />
                        </div>
                        <div class="ml-2">
                          <h6 class="font-bold">Contact: Sara Kleinz</h6>
                          <p class="mb-2">11shafayet@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-3 mt-4 md:mt-0">
                    <div class="flex md:flex-col md:items-center justify-center h-full">
                      <button
                        class="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400"
                      >
                        Save<i class="far fa-bookmark ml-2"></i>
                      </button>
                      <button
                        class="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400 ml-3 md:ml-0 md:mt-4"
                      >
                        Apply<i class="far fa-check-square ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card end -->
            <!-- card start -->
            <div class="col-span-12 mt-6">
              <div
                class="bg-white shadow-2xl dark:bg-[#1E2735] dark:shadow-none hover:bg-blue-600 hover:bg-opacity-20 dark:hover:bg-blue-600 dark:hover:bg-opacity-20 group hover:scale-[1.01] duration-[.4s] p-4 md:p-6"
              >
                <div class="grid grid-cols-12 items-center w-full">
                  <div class="col-span-12 md:col-span-2">
                    <div
                      class="w-24 h-24 border border-gray-200 dark:border-gray-700 rounded-full flex justify-center items-center mx-auto"
                    >
                      <img
                        src="https://cdn.easyfrontend.com/pictures/logos/apple-logo.png"
                        alt=""
                        class="max-w-[50px] h-auto"
                      />
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-7 mt-4 md:mt-0">
                    <div>
                      <a href="#" class="text-center md:text-start hover:text-blue-600"
                        ><h4 class="text-2xl font-bold mb-2">Graphic Design Cordinator, Summer 2020</h4></a
                      >
                      <h5 class="text-center md:text-start text-xl font-medium mb-2">
                        <span class="text-blue-600">Google</span> - London, UK
                      </h5>
                    </div>
                    <div class="text-center md:text-start mt-6">
                      <p class="opacity-50 mb-2">Posted 3 Days ago - 55 applicants</p>
                      <div class="flex justify-center md:justify-start items-center">
                        <div>
                          <img
                            src="https://cdn.easyfrontend.com/pictures/users/user4.jpg"
                            alt=""
                            class="rounded-full"
                            width="50"
                            height="50"
                          />
                        </div>
                        <div class="ml-2">
                          <h6 class="font-bold">Contact: Steve Smith</h6>
                          <p class="mb-2">your@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-3 mt-4 md:mt-0">
                    <div class="flex md:flex-col md:items-center justify-center h-full">
                      <button
                        class="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400"
                      >
                        Save<i class="far fa-bookmark ml-2"></i>
                      </button>
                      <button
                        class="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400 ml-3 md:ml-0 md:mt-4"
                      >
                        Apply<i class="far fa-check-square ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card end -->
            <!-- card start -->
            <div class="col-span-12 mt-6">
              <div
                class="bg-white shadow-2xl dark:bg-[#1E2735] dark:shadow-none hover:bg-blue-600 hover:bg-opacity-20 dark:hover:bg-blue-600 dark:hover:bg-opacity-20 group hover:scale-[1.01] duration-[.4s] p-4 md:p-6"
              >
                <div class="grid grid-cols-12 items-center w-full">
                  <div class="col-span-12 md:col-span-2">
                    <div
                      class="w-24 h-24 border border-gray-200 dark:border-gray-700 rounded-full flex justify-center items-center mx-auto"
                    >
                      <img
                        src="https://cdn.easyfrontend.com/pictures/logos/twitter-logo.png"
                        alt=""
                        class="max-w-[50px] h-auto"
                      />
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-7 mt-4 md:mt-0">
                    <div>
                      <a href="#" class="text-center md:text-start hover:text-blue-600"
                        ><h4 class="text-2xl font-bold mb-2">User Experience Design Intern, Summer 2019</h4></a
                      >
                      <h5 class="text-center md:text-start text-xl font-medium mb-2">
                        <span class="text-blue-600">Google</span> - Melbourne, AU
                      </h5>
                    </div>
                    <div class="text-center md:text-start mt-6">
                      <p class="opacity-50 mb-2">Posted 2 Days ago - 11 applicants</p>
                      <div class="flex justify-center md:justify-start items-center">
                        <div>
                          <img
                            src="https://cdn.easyfrontend.com/pictures/users/user7.jpg"
                            alt=""
                            class="rounded-full"
                            width="50"
                            height="50"
                          />
                        </div>
                        <div class="ml-2">
                          <h6 class="font-bold">Contact: Abraham Finn</h6>
                          <p class="mb-2">111shafayet@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-3 mt-4 md:mt-0">
                    <div class="flex md:flex-col md:items-center justify-center h-full">
                      <button
                        class="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400"
                      >
                        Save<i class="far fa-bookmark ml-2"></i>
                      </button>
                      <button
                        class="py-2 px-4 w-36 text-lg border border-gray-200 dark:border-gray-700 opacity-75 transition hover:opacity-100 group-hover:border-gray-400 ml-3 md:ml-0 md:mt-4"
                      >
                        Apply<i class="far fa-check-square ml-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- card end -->
          </div>
        </div>
      </section>
      
      

</body>
</html>