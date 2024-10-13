import React from 'react'
import Button from './Button'
import HamburgerMenu from './Humburger/Humberger'

const Navbar = () => {
    return (
        <>
            <div className="navbar sm:px-12   px-6 flex items-center justify-between h-24 lg:px-20">
                <div className="logo">
                    <h1 className='cursor-pointer font-Pasifico text-3xl text-[#1F3E97]'>vantela</h1>
                </div>
                <div className="hidden nav-links sm:block">
                    <ul className='flex gap-6'>
                        <li className='cursor-pointer text-[#858585] font-semibold hover:text-[#1F3E97] transition-all duration-500'>Home</li>
                        <li className='cursor-pointer text-[#858585] font-semibold hover:text-[#1F3E97] transition-all duration-500'>Sneakers</li>
                        <li className='cursor-pointer text-[#858585] font-semibold hover:text-[#1F3E97] transition-all duration-500'>Sales</li>
                        <li className='cursor-pointer text-[#858585] font-semibold hover:text-[#1F3E97] transition-all duration-500'>Clothes</li>
                        <li className='cursor-pointer text-[#858585] font-semibold hover:text-[#1F3E97] transition-all duration-500'>Others</li>
                    </ul>
                </div>
                <div className="uath lg:flex hidden items-center gap-6 ">
                    <div className="icons flex items-center gap-3">
                        <div className="notification">
                            <p className='cursor-pointer'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/vpbspaec.json"
                                    trigger="hover"
                                    colors="primary:#1f3e97,secondary:#1f3e97"
                                    style={{ width: 50, height: 50 }}>
                                </lord-icon>

                            </p>
                        </div>
                        <div className="notification">
                            <p className='cursor-pointer'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/aydxrkfl.json"
                                    trigger="hover"
                                    colors="primary:#1f3e97,secondary:#1f3e97"
                                    style={{ width: 35, height: 35 }}>
                                </lord-icon>

                            </p>
                        </div>
                        <div className="notification">
                            <p className='cursor-pointer'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/ggirntso.json"
                                    trigger="hover"
                                    colors="primary:#1f3e97,secondary:#1f3e97"
                                    style={{ width: 35, height: 35 }}>
                                </lord-icon>

                            </p>
                        </div>
                    </div>

                    <div className="">
                        <Button color = "text-white mx-3 transition-all duration-500 hover:bg-white hover:text-[#1F3E97] border-2 hover:border-[#1F3E97] bg-[#1F3E97] font-semibold rounded-full px-4 py-2" title = "Sign Up" />
                        <Button color = " hover:bg-[#1F3E97] hover:text-white trasition-all duration-500 text-[#1F3E97] bg-white border border-[#1F3E97] border-2 font-semibold rounded-full px-4 py-2" title = "Sign In" />
                    </div>
                </div>

                <div className="humburger lg:hidden flex items-center justify-center">
                    <HamburgerMenu/>
                </div>
            </div>
        </>
    )
}

export default Navbar
