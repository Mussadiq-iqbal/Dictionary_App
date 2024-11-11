import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons
import image from '../images/developer.png'

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-4 text-center flex flex-col items-center justify-center"
>
      <img src={image} alt=""
      className="w-8 h-8 rounded-full" />
      <p className="text-lg">
        Developed by <strong>Mussadiq Iqbal</strong>
      </p>
      <p className="mt-2 text-sm italic sm:px-40">
  As a passionate Frontend Developer and freelance expert, I craft stunning, user-friendly websites that engage and inspire. Transforming ideas into interactive, responsive digital experiences is my specialty.
</p>

      <p className="mt-2">
        Email: <a href="mailto:mussadiq.iqbal2000@gmail.com" className="text-blue-400">mussadiq.iqbal2000@gmail.com</a>
      </p>
      <p className="mt-2">
        LinkedIn: 
        <a href="https://www.linkedin.com/in/mussadiq-iqbal" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="inline-block text-blue-400 text-3xl ml-2" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
