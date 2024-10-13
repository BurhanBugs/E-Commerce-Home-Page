import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="w-full  bg-[#1F3E97] pt-24 pb-6 ">
                <div className="w-[80%]   mx-auto ">
                    <div className="flex justify-between px-9 w-full items-center h-16 mb-16 ">
                        <div className="FooterLogo">
                            <h1 className='cursor-pointer font-Pasifico text-4xl text-white'>vantela</h1>

                        </div>
                        <div className="newsLetter ">
                            <input placeholder='Subscribe to our news letter' className='w-96 focus:outline-none border-2 focus:border-yellow-400 h-9 p-5 placeholder:font-semibold placeholder:text-black rounded-full' type="email" name="Email" id="Email" />

                        </div>
                    </div>

                    <div className="FooterLinks text-white">
                        <div className="flex  w-full justify-around ">
                            <div>
                                <div className=" font-semibold text-xl">
                                    Company
                                </div>
                                <div className="mt-6">
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >About Us</li>
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >Our Store</li>
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >News</li>
                                </div>
                            </div>

                            <div>
                                <div className="text-xl font-semibold">
                                    Help
                                </div>
                                <div className="mt-6">
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >FAQ</li>
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >Help</li>
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >Term</li>
                                </div>
                            </div>

                            <div>
                                <div className="text-xl font-semibold">
                                    Social Media
                                </div>
                                <div className="mt-6">
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >Instagram</li>
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >TikTok</li>
                                    <li className='list-none  font-sembold text-slate-200 hover:underline cursor-pointer m-1 ' >Facebook</li>
                                </div>
                            </div>

                            <div>
                                <div className="text-xl font-semibold">
                                    Contact
                                </div>
                                <div className="mt-6">
                                    <li className='list-none  font-light text-slate-200   m-1 ' >Samnabad,Faisalabad,Pakistan</li>
                                    <li className='list-none  font-light text-slate-200 hover:underline cursor-pointer m-1 ' >Phone: +923060666286</li>
                                    <li className='list-none  font-light text-slate-200 hover:underline cursor-pointer m-1 ' >Email: burhanbugs@gmial.com</li>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                

            </div>

            <div className="FooterStatement  bg-[#18378F]">
                    <div className="flex h-12 items-center justify-center ">
                        <p className="text-center  text-white font-semibold text-md">
                            © Copyright 2024. All Right Reserverd
                        </p>
                    </div>
                </div>

        </>
    )
}

export default Footer
