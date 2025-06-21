import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';

export const WalletConnection = () => {
  const { wallet, publicKey, connected } = useWallet();

  return (
    <div className="wallet-connection">
      <div className="wallet-buttons">
        <WalletMultiButton />
        {connected && <WalletDisconnectButton />}
      </div>
      
      {connected && (
        <div className="wallet-info">
          <h3>Wallet Connected!</h3>
          <p><strong>Wallet:</strong> {wallet?.adapter?.name}</p>
          <p><strong>Public Key:</strong> {publicKey?.toString()}</p>
          <p><strong>Network:</strong> Solana Mainnet</p>
        </div>
      )}
    </div>
  );
};

export default WalletConnection