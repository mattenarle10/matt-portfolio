// src/components/Footer.tsx
import Image from "next/image"; // Import the Image component from Next.js

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2 mt-4"> {/* Added mt-4 for margin-top */}
          <Image
            src="/imgs/M-white.png" // Path to your logo in the public folder
            alt="Matthew Enarle Logo"
            width={60} // Set the width of the logo
            height={60} // Set the height of the logo
            className="border-4 border-white rounded-full" // Added border and rounded corners
          />
        </div>

        {/* Copyright Text */}
        <p className="text-lg mt-5 mb-8"> {/* Changed text-sm to text-lg for larger font size */}
          2025 © Matthew Enarle • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
