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
  <x-navbar2></x-navbar2>
  <main>
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