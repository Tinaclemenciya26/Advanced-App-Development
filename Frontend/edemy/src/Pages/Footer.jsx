const Footer = () => {
  return (
    <footer className="black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-sm text-gray-600 w-full lg:w-auto mb-2 lg:mb-0">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
          <div className="flex-grow">
            <a href="#" className="text-gray-600 hover:underline mx-2">
              About
            </a>
            <a href="#" className="text-gray-600 hover:underline mx-2">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:underline mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
