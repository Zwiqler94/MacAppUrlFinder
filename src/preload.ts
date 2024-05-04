/* eslint-disable @typescript-eslint/no-var-requires */
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  readUrls: (
    callback: (
      _event: any,
      value: { name: string; scheme: string[] }[],
    ) => void,
  ) => ipcRenderer.on("readUrls", callback),
  setIcons: (value: string) => ipcRenderer.invoke("setIcons", value),
});

// async function getConfig() {
//   let config = null;
//   if (ipcRenderer) {
//     ipcRenderer.on("envReply", (event, arg) => {
//       config = arg.parsed;
//       return config.parsed;
//     });
//     ipcRenderer.send("invokeEnv");
//   }
// }

// getConfig();