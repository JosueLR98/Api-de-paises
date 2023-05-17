import React from 'react'

const Country = ({country}) => {
  return (
    <article className='bg-gray-100  shadow-md shadow-gray-400/90  rounded-md overflow-hidden  dark:bg-slate-600 dark:text-white dark:shadow-gray-950 duration-200'>
      <div className='h-[200px]'>
        <img className='h-full w-full object-cover' src={country.flags.svg} alt="" />
      </div>
      <section className='p-6'>
        <h2 className='font-bold text-xl mb-3'>{country.name.common}</h2>
        <ul className='grid gap-1 text-base font-semibold'>
          <li>Population: <span className='font-normal'>{country.population}</span></li>
          <li>Region: <span className='font-normal'>{country.region}</span></li>
          <li>Capital: <span className='font-normal'>{country.capital?.[0]}</span></li>
        </ul>
      </section>
    </article>
  )
}

export default Country