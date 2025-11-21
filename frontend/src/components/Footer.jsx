import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <footer className='bg-black flex justify-evenly flex-row p-4 text-sm text-white font-sans'>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-white text-base' >EXCLUSIVE</p>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="relative mt-2">
                    <img src={assets.send} alt="send" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-80 cursor-pointer" />
                    <input 
                    type="email" 
                    placeholder='Enter your email' 
                    className='pl-2 pr-4 py-2 bg-black text-white font-bold placeholder-gray-400 border-white border outline-none rounded'
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-white text-base' >SUPPORT</p>
                <p>111, Bijoy Sarani,<br />DH 1515, Bangladesh</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-white text-base' >Account</p>
                <p>My Account</p>
                <p>Login/Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-white text-base' >Quick Links</p>
                <p >Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
                <p>About Us</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className='font-bold text-white text-base' >Download App</p>
                <p className='text-gray-300'>Save $3 with App - New Users Only</p>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <img src={assets.qrcode} alt="qr code" className='' />
                    <div className="flex flex-col gap-3 ">
                        <img src={assets.playstore} alt="google-play-badge" className='w-30 cursor-pointer' />
                        <img src={assets.app_store} alt="app-store-badge" className='w-30 cursor-pointer' />
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-4 justify-evenly">
                    <img src={assets.facebook} alt="facebook" className='w-6 h-6 cursor-pointer' />
                    <img src={assets.twitter} alt="twitter" className='w-6 h-6 cursor-pointer' />
                    <img src={assets.instagram} alt="instagram" className='w-6 h-6 cursor-pointer' />
                    <img src={assets.linkedin} alt="linkedin" className='w-6 h-6 cursor-pointer' />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer