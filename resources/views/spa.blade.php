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
<body class=" bg-blue-100">
  <x-navbar2></x-navbar2>
  <main class="mt-16">
    <div class="bg-gray flex justify-center items-center">
      <div class="bg-gray-100 rounded-2xl shadow-lg w-full max-w-4xl p-8">
        <div class="flex justify-between items-center mb-6">
          <div class="bg-gray-100 border-none rounded-md py-2 px-4 text-sm">
            <input type="text" name="location" id="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="Set your location">
          </div>
          <div class="bg-gray-100 border-none rounded-md py-2 px-4 text-sm">
            <input type="text" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" placeholder="Specialization" />
          </div>
          <div class="flex items-center">
            <button class="bg-blue-600 text-white rounded-md py-2 px-4 text-sm">Search</button>
          </div>
        </div>
        
        
        {{-- new --}}
        <div class="flex justify-start mb-6">
          <div class="flex items-center space-x-2">
            <div class="input-group">
              <select type="inputWay" class="form-select appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline">
                <option selected>Availability</option>
                <option>One Way</option>
                <option>Multiple Way</option>
              </select>
            </div>
          </div>
          <div class="flex items-center space-x-2 ml-6">
            <select type="passengers" class="form-select appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline">
              <option selected>Filter</option>
              <option>1 Filters</option>
              <option>2 Filters</option>
              <option>3 Filters</option>
              <option>4 Filters</option>
              <option>5 Filters</option>
            </select>
          </div>
          <div class="flex items-center space-x-2 ml-6">
            <span class="text-black-500">Sort By</span>
            <select type="sort" class="form-select appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline">
              <option selected>Relevance</option>
              <option>Business</option>
              <option>Economy</option>
              <option>1st Class</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    {{-- <div class="flex justify-center items-center h-screen">
      <div class="font-sans">
        <div class="container mx-auto py-8 grid grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <h2 class="text-lg font-bold">MANSION SPA JOGJA</h2>
                <p class="text-gray-500">Relaxation</p>
                <p class="text-gray-500">16 years experience overall</p>
              </div>
            </div>
            <div class="mt-4 bg-green-100 px-4 py-2 rounded-md inline-flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-green-500 font-medium">99% 93 Patient Stories</span>
            </div>
            <div class="mt-4">
              <p class="text-gray-500">Kec. Gamping, Kabupaten Sleman, DIY</p>
              <p class="text-gray-500">The most famous relaxation spa</p>
              <a href="#" class="text-blue-500 hover:text-blue-700">more</a>
            </div>
            <div class="mt-4">
              <p class="text-gray-500">FREE &#8377;500 Consultation fee at clinic</p>
            </div>
            <div class="mt-4">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book FREE Spa Visit
              </button>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-bold">Available Today</h3>
              <div class="grid grid-cols-3 gap-4 mt-4">
                <div>
                  <p class="text-gray-500">Morning</p>
                  <p class="font-medium">11:30 AM</p>
                </div>
                <div>
                  <p class="text-gray-500">Afternoon</p>
                  <p class="font-medium">12:00 PM</p>
                  <p class="font-medium">12:30 PM</p>
                  <p class="font-medium">01:30 PM</p>
                  <p class="font-medium">02:00 PM</p>
                  <p class="font-medium">02:30 PM</p>
                </div>
                <div>
                  <p class="text-gray-500">Evening</p>
                  <p class="font-medium">06:00 PM</p>
                  <p class="font-medium">06:30 PM</p>
                  <p class="font-medium">07:00 PM</p>
                  <p class="font-medium">07:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-lg font-bold mb-4">Maps Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.61369824441!2d110.33927410840992!3d-7.746962888130327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2f0a9180d%3A0x65615dadf02a4713!2sAnjani%20Spa!5e0!3m2!1sen!2sid!4v1717088008917!5m2!1sen!2sid" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div> --}}

    {{-- spa 2 --}}
    <div class="flex justify-center items-center">
      <div class="font-sans">
        <div class="container mx-auto py-8 grid grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-2xl p-12">
            <div class="flex items-center">
              <div class="w-16 h-16 rounded-full bg-gray-200 mr-6"></div>
              <div>
                <h2 class="text-2xl font-bold">MANSION SPA JOGJA</h2>
                <p class="text-gray-500 text-lg">Relaxation</p>
                <p class="text-gray-500 text-lg">16 years experience overall</p>
              </div>
            </div>
            <div class="mt-6 bg-green-100 px-6 py-3 rounded-md inline-flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-green-500 font-medium text-lg">99% 93 Patient Stories</span>
            </div>
            <div class="mt-6">
              <p class="text-gray-500 text-lg">Kec. Gamping, Kabupaten Sleman, DIY</p>
              <p class="text-gray-500 text-lg">The most famous relaxation spa</p>
              <a href="#" class="text-blue-500 hover:text-blue-700 text-lg">more</a>
            </div>
            <div class="mt-6">
              <p class="text-gray-500 text-lg">FREE &#8377;500 Consultation fee at clinic</p>
            </div>
            <div class="mt-6">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">
                Book FREE Spa Visit
              </button>
            </div>
            <div class="mt-10">
              <h3 class="text-xl font-bold">Available Today</h3>
              <div class="grid grid-cols-3 gap-6 mt-6">
                <div>
                  <p class="text-gray-500 text-lg">Morning</p>
                  <p class="font-medium text-lg">11:30 AM</p>
                </div>
                <div>
                  <p class="text-gray-500 text-lg">Afternoon</p>
                  <p class="font-medium text-lg">12:00 PM</p>
                  <p class="font-medium text-lg">12:30 PM</p>
                  <p class="font-medium text-lg">01:30 PM</p>
                  <p class="font-medium text-lg">02:00 PM</p>
                  <p class="font-medium text-lg">02:30 PM</p>
                </div>
                <div>
                  <p class="text-gray-500 text-lg">Evening</p>
                  <p class="font-medium text-lg">06:00 PM</p>
                  <p class="font-medium text-lg">06:30 PM</p>
                  <p class="font-medium text-lg">07:00 PM</p>
                  <p class="font-medium text-lg">07:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.61369824441!2d110.33927410840992!3d-7.746962888130327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2f0a9180d%3A0x65615dadf02a4713!2sAnjani%20Spa!5e0!3m2!1sen!2sid!4v1717088008917!5m2!1sen!2sid" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {{-- <div class="bg-white rounded-lg shadow-2xl p-8">
            <h2 class="text-2xl font-bold mb-6">Maps Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.61369824441!2d110.33927410840992!3d-7.746962888130327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58f2f0a9180d%3A0x65615dadf02a4713!2sAnjani%20Spa!5e0!3m2!1sen!2sid!4v1717088008917!5m2!1sen!2sid" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> --}}
        </div>
      </div>
    </div>

    

  </main>
  
  <div class="container mx-auto py-8">
    <div class="flex justify-between items-center mb-4">
      <div>
        <span class="text-gray-500">Availability</span>
        <button class="text-blue-900 font-medium ml-2">Filter</button>
      </div>
      <div>
        <span class="text-gray-500 mr-2">Sort By</span>
        <button class="text-blue-900 font-medium">Relevance</button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-white shadow-md rounded-md overflow-hidden">
        <img src="https://via.placeholder.com/300x200" alt="Doctor" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-blue-900 font-medium">Dr. John Doe</h3>
          <p class="text-gray-500">Cardiologist</p>
          <p class="text-gray-500">New York, NY</p>
          <button class="bg-blue-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-800 focus:outline-none">Book Appointment</button>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-md overflow-hidden">
        <img src="https://via.placeholder.com/300x200" alt="Doctor" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-blue-900 font-medium">Dr. Jane Smith</h3>
          <p class="text-gray-500">Pediatrician</p>
          <p class="text-gray-500">Los Angeles, CA</p>
          <button class="bg-blue-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-800 focus:outline-none">Book Appointment</button>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-md overflow-hidden">
        <img src="https://via.placeholder.com/300x200" alt="Doctor" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-blue-900 font-medium">Dr. Michael Johnson</h3>
          <p class="text-gray-500">Orthopedist</p>
          <p class="text-gray-500">Chicago, IL</p>
          <button class="bg-blue-900 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-800 focus:outline-none">Book Appointment</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>