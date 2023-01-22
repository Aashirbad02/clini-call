import React from 'react'

const Signup = () => {
  return (
//     <div class="bg-gray-50 min-h-screen flex items-center justify-center">
//   {/* <!-- login container --> */}
//   <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
//     {/* <!-- form --> */}
//     <div class="md:w-1/2 px-8 md:px-16">
//       <h2 class="font-bold text-2xl text-[#002D74]">Signup</h2>
//       <p class="text-xs mt-4 text-[#002D74]">If you are a new user, register yourself</p>

//       <form action="" class="flex flex-col gap-0">
//         <input class="p-2 mt-4 rounded-xl border" type="name" name="name" placeholder="Name"/>
//         <input class="p-2 mt-4 rounded-xl border" type="email" name="email" placeholder="Email"/>
//         <input class="p-2 mt-4 rounded-xl border" type="name" name="city" placeholder="City"/>
//         <div class="relative ">
//           <input class="p-2 rounded-xl border w-full mt-4" type="password" name="password" placeholder="Password"/>
//           <input class="p-2 rounded-xl border w-full mt-4" type="cpassword" name="cpassword" placeholder="Confirm Password"/>
//           {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
//             <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
//             <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
//           </svg> */}
//         </div>
//         <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 my-4">Sign up</button>
//       </form>

//       {/* <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
//         <hr class="border-gray-400"/>
//         <p class="text-center text-sm">OR</p>
//         <hr class="border-gray-400"/>
//       </div> */}
// {/* 
//       <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
//         <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
//           <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
//           <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
//           <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
//           <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
//         </svg>
//         Login with Google
//       </button> */}

//       {/* <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
//         <a href="/">Forgot your password?</a>
//       </div> */}

//       <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
//         <p>Already have an account?</p>
//         <button class="py-2 px-5 bg-[#002D74] border rounded-xl hover:scale-110 duration-300">Login</button>
//       </div>
//     </div>

//     {/* <!-- image --> */}
//     <div class="md:block hidden w-1/2">
//       <img class="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt='oops'/>
//     </div>
//   </div>
// </div>

// <!-- component -->
<div class="min-h-screen p-6  bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto mt-20">
    <div>
      {/* <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
      <p class="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="Full Name" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="email"
                        placeholder="email@domain" />
              </div>
              <div class="md:col-span-5">
                <label for="number">Phone number</label>
                <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="8989263399" />
              </div>
               
              <div class="md:col-span-2">
                <label for="address">Age</label>
                <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="19" />
              </div>

              <div class="md:col-span-2">
                <label for="city">Blood Group</label>
                <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="B+" />
              </div>
              <div class="md:col-span-2">
                <label for="address">Height</label>
                <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="5'7" />
              </div>

              <div class="md:col-span-2">
                <label for="city"> Weight</label>
                <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="64" />
              </div>

              <div class="md:col-span-2">
                <label for="number">Password</label>
                <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="Kiwis786" />
              </div> 
               <div class="md:col-span-2">
                <label for="number">Confirm Password</label>
                <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="fullname"
                        placeholder="Kiwis786" />
              </div>

      
              

              {/* <div class="md:col-span-2">
                <label for="country">Country / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">State / province</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                  <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Zipcode</label>
                <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
              </div>

              <div class="md:col-span-5">
                <div class="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                  <label for="billing_same" class="ml-2">My billing address is different than above.</label>
                </div> */}
              {/* </div> */}

              {/* <div class="md:col-span-2">
                <label for="soda">How many soda pops?</label>
                <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                  <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div> */}
      
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup