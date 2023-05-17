import React from 'react'

const Navbar = ({setIsDark}) => {

  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark)
  }

  return (
    <header className='text-black flex justify-around py-6 px-3 bg-white shadow-md shadow-gray-400 dark:bg-slate-600 dark:text-white dark:shadow-gray-950 duration-200'>
      <h1 className='font-bold'>Where in the world?</h1>

      <button onClick={handleChangeTheme} className='flex gap-2 font-semibold items-center'>
        <i className='bx bx-moon'></i>
        <span>Dark Mode</span>
      </button>
    </header>
  )
}

export default Navbar