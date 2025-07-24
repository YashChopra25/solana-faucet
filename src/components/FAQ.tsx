import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are devnet SOL tokens?",
      answer: "Devnet SOL tokens are Solana tokens used on the Solana devnet for development and testing purposes. They have no monetary value and cannot be traded or exchanged for real SOL or money."
    },
    {
      question: "How often can I request tokens?",
      answer: "You can request SOL tokens once every 24 hours per wallet address. This helps ensure fair distribution and prevents abuse of the service."
    },
    {
      question: "Which network is supported?",
      answer: "We support Solana devnet only. This is the official Solana test network for developers to build and test their applications."
    },
    {
      question: "Why do I need devnet SOL?",
      answer: "Devnet SOL is essential for developers to test Solana programs, dApps, and other Solana applications without risking real money. They allow you to simulate transactions on devnet."
    },
    {
      question: "Is there a limit on token amounts?",
      answer: "Yes, we distribute a fixed amount of 1.0 SOL per request to ensure sustainable distribution and prevent spam."
    },
    {
      question: "What if the faucet is empty?",
      answer: "Our faucet is regularly refilled. If you encounter issues, please wait a few minutes and try again. You can also check our social media for updates."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our Solana devnet faucet service</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;