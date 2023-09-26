/* eslint-disable @typescript-eslint/no-var-requires */
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  readUrls: (
    callback: (
      _event: any,
      value: { name: string; scheme: string[] }[],
    ) => void,
  ) => ipcRenderer.on("readUrls", callback),
  setIcons: (value: string) => ipcRenderer.invoke("setIcons", value),
});
