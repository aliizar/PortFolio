import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailLockIcon from '@mui/icons-material/MailLock';
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-y-2 border-white text-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Connect <span className="text-red-400">with Me</span></h2>
        <div className="flex space-x-4">
          <a href="https://github.com/aliizar?tab=repositories" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com/thisis.alizar/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="text-3xl hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="text-3xl hover:text-gray-400" />
          </a>
          <a href="mailto:youremail@example.com">
            <MailLockIcon className="text-3xl hover:text-gray-400" />
          </a>
        </div>
        <p className="mt-4 text-green-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
