"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  readUrls: (callback) => electron.ipcRenderer.on("readUrls", callback),
  setIcons: (value) => electron.ipcRenderer.invoke("setIcons", value)
});
