import React from 'react'
import Licenses from '../Data/licenses.json'
import License from './License'
const Licences = () => {
  return (
    <div  id='licences' className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto">
    <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent mt-32">
      LICENSES AND CERTIFICATIONS
    </h1>
    <div className="flex  w-full flex-wrap justify-center items-center">
        {Licenses.licenses.map((item)=>(
           <License item={item}></License>
        ))}
    </div>
  </div>
  )
}

export default Licences
