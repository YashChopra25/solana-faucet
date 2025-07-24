import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Droplets,
} from "lucide-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
const FaucetForm = () => {
  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { connection } = useConnection();
  const validateAddress = (addr: string) => {
    // Basic validation for Solana addresses (base58, 32-44 characters)
    const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return solanaAddressRegex.test(addr);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address.trim()) {
      setStatus("error");
      setMessage("Please enter a valid wallet address");
      return;
    }

    if (!validateAddress(address)) {
      setStatus("error");
      setMessage(
        "Please enter a valid Solana wallet address (32-44 base58 characters)"
      );
      return;
    }

    setIsLoading(true);
    setStatus("idle");
    // Simulate API call
    try {
      const NewPublicKey = new PublicKey(address);
      const airdrop = await connection.requestAirdrop(
        NewPublicKey,
        1000000000 // adding only 1 SOL
      );
      // Mock success response
      if (!airdrop) {
        throw new Error("Failed to do airdrop");
      }
      setIsLoading(false);
      setStatus("success");
      setMessage(
        `Successfully sent 1.0 SOL to ${address.slice(0, 6)}...${address.slice(
          -4
        )} on Solana devnet`
      );

      // Reset form after success
      setTimeout(() => {
        setAddress("");
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      setStatus("error");
      setMessage("Failed to send tokens. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Droplets className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Get Test Tokens
        </h2>
        <p className="text-gray-600">
          Enter your Solana wallet address to receive free SOL on devnet
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Wallet Address
          </label>
          <div className="relative">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Solana wallet address..."
              autoComplete="off"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm font-mono"
              disabled={isLoading}
            />
          </div>
        </div>

        {status !== "idle" && (
          <div
            className={`flex items-center space-x-2 p-4 rounded-lg ${
              status === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {status === "success" ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <p className="text-sm">{message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !address.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Sending SOL...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Request SOL</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Rate limit: 1 request per 24 hours per address
        </p>
      </div>
    </div>
  );
};

export default FaucetForm;
