import { ConnectionProvider } from "@solana/wallet-adapter-react";
import Index from "./index";
import { Analytics } from "@vercel/analytics/react"
function App() {
  // You can also provide a custom RPC endpoint.
  const endpoint = import.meta.env.VITE_DEVNET_URL!;
  return (
    <ConnectionProvider endpoint={endpoint}>
      <Index />
      <Analytics/>
    </ConnectionProvider>
  );
}

export default App;
