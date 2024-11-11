import React from 'react';
import dictionaryImage from '../images/dictionary.jpg';

function Briefnote() {
  return (
    <div className="mt-6 p-6 bg-blue-50 rounded-lg shadow-md" style={{ height: '80vh' }}>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Image of Dictionary */}
        <img
          src={dictionaryImage} // You can replace this with a real image of a dictionary
          alt="Dictionary"
          className="w-52 h-52 object-contain mb-4"
        />
        
        {/* Heading and Description about the Dictionary */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center">About This Dictionary</h2>
        <p className="mt-4 text-base text-gray-600 text-center">
          Welcome to the digital dictionary app! Here, you can search for any word and get detailed meanings, pronunciations, and examples of usage. 
          As a frontend developer, I created this app to provide users with a seamless, interactive experience to enhance learning and comprehension.
        </p>
        <p className="mt-4 text-base text-gray-600 text-center">
          Whether you're a student, professional, or just curious about a word, this app gives you quick and easy access to word definitions, context, and more—all with a user-friendly interface that works beautifully on any device.
        </p>

        {/* Developer Section */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <h3 className="font-semibold text-gray-800">About The Developer</h3>
          <p className="mt-2 italic">
            I’m Mussadiq Iqbal, a passionate Frontend Developer. I specialize in creating engaging, responsive web applications. This dictionary is just one example of how I use my skills to bring useful digital tools to life. I’m always eager to take on new challenges and develop more interactive, user-centric projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Briefnote;
