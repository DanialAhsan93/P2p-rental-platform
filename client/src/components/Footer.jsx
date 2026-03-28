import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openChat } from '../redux/chatbot/chatbotSlice';

function Footer() {
    const dispatch = useDispatch();
  return (
    <footer className="max-w-[2200px] w-full mx-auto">

      <div className='bg-cyan-950 text-gray-300 py-10 px-4 lg:px-16'>

      

      <div className="flex flex-wrap">

        {/* Logo */}
        <Link to="/" className="w-[100%] md:w-1/3 lg:w-1/6 p-3">
          <h2 className="text-white text-xl font-bold mb-3">
            Rental-Platform
          </h2>
          <p className="text-sm">
            Your trusted platform for renting anything.
          </p>
        </Link>

        {/* Col 1 */}
        <div className="w-[100%] md:w-1/3 lg:w-1/6 p-3">
          <h3 className="text-white font-semibold mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <Link to="/about-us"><li>About Us</li></Link>
            <li onClick={() => dispatch(openChat("guarantee"))} className='cursor-pointer'>Guarantee</li>
            <li onClick={() => dispatch(openChat("faqs"))} className='cursor-pointer'>FAQ's</li>
            <Link to="/tou"><li>Terms and Conditions</li></Link>
            <Link to="/privacy-policy"><li>Privacy Policy</li></Link>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="w-[100%] md:w-1/3 lg:w-1/6 p-3">
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            {/* <li>Partnerships</li> */}
            <Link to="/categories"><li>All categories</li></Link>
            {/* <li>Areas where Hygglo is used</li> */}
            <Link to="/blog"><li>Renatl Platform's blog</li></Link>
            {/* <li>Hygglo in other countries</li> */}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="w-[100%] md:w-1/3 lg:w-1/6 p-3">
          <h3 className="text-white font-semibold mb-2">Countries</h3>
          <ul className="space-y-1 text-sm">
            <li>rental platform.dk</li>
            <li>rental platform.fi</li>
            <li>rental platform.se</li>
            <li>rental platform.no</li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="w-[100%] md:w-1/3 lg:w-1/6 p-3">
          <h3 className="text-white font-semibold mb-2">Download</h3>
          <ul className="space-y-1 text-sm">
            <li>App Store</li>
            <li>Google Play</li>
          </ul>

          <h3 className="text-white font-semibold mt-3">Social</h3>
          <ul className="space-y-1 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Col 5 */}
        <div className="w-[100%] md:w-1/3 lg:w-1/6 p-3">
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Rental platform's Ltd</li>
            <li>Arquen House, St Albans</li>
            <li>info@rentalplatform.com</li>
            <li>Company #09927338</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2026 Rental-Platform
      </div>

      </div>

    </footer>
  );
}

export default Footer;

