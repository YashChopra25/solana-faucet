
import Navbar from './components/Navbar';
import FaucetForm from './components/FaucetForm';
import InfoSection from './components/InfoSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
const Index = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Free SOL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                for Solana Devnet Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access free SOL tokens instantly for your Solana development needs. 
              Perfect for testing smart contracts, dApps, and other decentralized solutions on Solana devnet.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <FaucetForm />
          </div>
        </div>
      </section>

      <InfoSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Index
