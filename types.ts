export interface WalletMessage {
  id: string;
  method: string;
  payload: Record<string, unknown>;
}

export interface EmbeddedWalletProvider {
  postMessage: (message: WalletMessage) => void;
}
