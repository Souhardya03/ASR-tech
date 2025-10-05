import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-10">

        {/* QuickShop */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">QuickShop</h3>
          <p className="text-lg mb-2">Subscribe</p>
          <p className="text-lg mb-4">Get 10% off your first order</p>
          <div className="flex w-2/3 items-center border border-gray-300 bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-black text-black outline-none"
            />
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-800">
              ➤
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <p className="flex items-center gap-2 text-lg mb-2">
            <MdLocationOn /> 111 Bijoy sarani, 1515, India
          </p>
          <p className="flex items-center gap-2 text-lg mb-2">
            <MdEmail /> exclusive@gmail.com
          </p>
          <p className="flex items-center gap-2 text-lg">
            <MdPhone /> +88018-88888-9999
          </p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Category</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Download App</h3>
          <p className="text-lg mb-3">Save $3 with App New User Only</p>
          <div className="flex gap-3 items-center mb-4">
            <div className="bg-white p-2 rounded">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com"
                alt="QR Code"
                className="w-20 h-20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-black border border-gray-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8"
                />
              </button>
              <button className="bg-black border border-gray-400 px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-8"
                />
              </button>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 QuickShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
