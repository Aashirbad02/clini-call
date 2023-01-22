import React, { useState } from "react";
import data from "./data";
import Doctor from "./Doctor";
const Doctors = () => {
  const [team, setTeam] = useState(data);

  return (
    <div className="w-full my-2 px-12 mx-6 ml-0">
      <div>
        <h1 className="w-full max-w-[1440px] mx-auto text-center py-2 text-3xl text-indigo-600 font-bold">
          Doctors near you
        </h1>
        <div className="w-32 h-1 bg-white mx-auto my-3"></div>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 comm:gap-y-3 comm:gap-x-16 gap-x-20 gap-y-4 place-content-center">
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
      </div>
    </div>
  );
};

export default Doctors;
