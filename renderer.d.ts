/* eslint-disable no-unused-vars */

export interface IElectronAPI {
  readUrls: (callback: (event: any, value: any) => void) => Promise<void>;
  setIcons: (value: string) => Promise<any>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
