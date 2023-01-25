/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import data from "./data";
import Doctor from "./Doctor";
const Doctors= ({ name, email, contact, img, designation,address }) => {
  const [team, setTeam] = useState(data);
  const [search, setSearch] = useState('');
  console.log(search)
  
 

  return (
    
 <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div className="text-2xl my-2 mx-auto flex justify-center">
    Doctors near you
  </div>
    <div class="flex items-center justify-center pb-4 bg-white dark:bg-gray-900">
      
        <label for="table-search" class="sr-only" value={search} onChange={(e)=>setSearch(e.target.value)}>Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" value={search} onChange={(e)=>setSearch(e.target.value)}
             class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Specialisation
                </th>
                <th scope="col" class="px-6 py-3">
                    Contact
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Pincode
                </th>
            </tr>
        </thead>
        <tbody>
        {team.filter((data) => {
                return search === ''
                  ? data
                  : data.pincode.includes(search);
              }).map((data) => (
           
              <Doctor

                key={data.id}
                name={data.name}
                img={data.img}
                designation={data.designation}
                email={data.email}
                contact={data.contact}
                pincode={data.pincode}
                address={data.address}
             
          />
          
          ))}
        </tbody>
    </table>
</div> 
/* <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
          {team.map((data) => {
            return (
              <Doctor
                key={data.id}
                name={data.name}
                img={data.img}
                designation={data.designation}
                email={data.email}
                contact={data.contact}
              />
            );
          })}
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div
</div> */


  );
};
export default Doctors;
