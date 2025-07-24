import { Droplets, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solana Devnet Faucet
              </h1>
              <p className="text-xs text-gray-500">Free SOL Tokens</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              FAQ
            </a>
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/YashChopra25/solana-faucet"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/YashChopra25"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <div className="">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-5 h-5 stroke-amber-100 hover:stroke-0"
                  >
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
