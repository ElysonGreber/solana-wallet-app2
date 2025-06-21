import React from 'react';
import { WalletContextProvider } from './components/WalletContextProvider';
import { WalletConnection } from './components/WalletConnection';
import './App.css';

function App() {
  return (
    <WalletContextProvider>
      <div className="app">
        <header className="app-header">
          <h1>Solana Wallet Connection</h1>
          <p>Connect your Solana wallet to interact with the mainnet</p>
        </header>
        
        <main className="app-main">
          <WalletConnection />
        </main>
      </div>
    </WalletContextProvider>
  );
}

export default App;