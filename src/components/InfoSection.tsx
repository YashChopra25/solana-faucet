
import { Shield, Clock, Zap, AlertTriangle } from 'lucide-react';

const InfoSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Distribution",
      description: "Receive SOL tokens instantly to your Solana wallet address."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable infrastructure."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Available",
      description: "Access SOL tokens anytime, anywhere for your Solana development needs."
    }
  ];

  return (
    <div className="py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Solana Devnet Faucet</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Solana Devnet Faucet is a free service that provides SOL tokens for Solana developers and users. 
              These tokens have no monetary value and are intended solely for testing purposes on Solana devnet.
            </p>
            <p className="text-gray-600 mb-4">
              Our faucet helps developers test their decentralized applications (dApps), Solana programs, 
              and other Solana-based solutions without using real SOL cryptocurrency.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-1">Important Notice</h4>
                  <p className="text-amber-700 text-sm">
                    SOL tokens distributed by this faucet have no monetary value and cannot be exchanged 
                    for real SOL or fiat currency. Use only on Solana devnet for development and testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;