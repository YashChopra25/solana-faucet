import { Droplets, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TestNet Faucet</h3>
                <p className="text-sm text-gray-400">Free SOL Tokens</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Providing free SOL tokens for Solana developers worldwide. 
              Build, test, and deploy with confidence on Solana devnet.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />by
              <a href='https://yashchopra.tech' className='underline decoration-wavy hover:text-blue-400 hover:underline ms-1' target='__blank'> Yash Chopra</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md" className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Documentation</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://github.com/anza-xyz/wallet-adapter/blob/master/APP.md" className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>API Reference</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://yashchopra.tech" className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>Support</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-1" title='Not Available'>
                  <span>Status Page</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-yellow-400 mb-2">⚠️ Important Disclaimer</h5>
            <p className="text-sm text-gray-300">
              SOL tokens provided by this faucet are for development and testing purposes only on Solana devnet. 
              They have no monetary value and cannot be exchanged for real SOL or fiat currency. 
              Do not attempt to use these tokens on mainnet-beta or for any commercial purposes. 
              This service is provided "as is" without warranties of any kind.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Solana Devnet Faucet. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Built for the Solana developer community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;