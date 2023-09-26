/* eslint-disable no-unused-vars */

export interface IElectronAPI {
  readUrls: (callback: (event, value) => void) => Promise<void>;
  setIcons: (value: string) => Promise<any>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
