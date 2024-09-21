
const Footer = () => {
  return (
    <footer className=" container text-white py-10">
    <div className="container mx-auto px-4">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Help Center</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Track Order</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Returns</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Shipping Info</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">About Us</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Careers</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Press</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Affiliate Program</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Terms of Service</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Accessibility</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">Instagram</a></li>
            <li><a href="#" className="text-black hover:text-gray-700 hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>
  
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-black">&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
