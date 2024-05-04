/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent } from "electron";
// import * as dotenv from 'dotenv/config';
import path from "path";
import { spawn } from "child_process";
import icons from "@api/iconfinder";

let start = 0,
  end = 25;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL != undefined) {
    win.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // void win.loadFile("./dist/index.html");
  win.webContents.openDevTools();

  win.webContents.on("did-navigate", () => {
    win.webContents.goBack();
    createUrlList();
  });

  // ipcMain.on("invokeEnv", (event) => {
  //   event.sender.send("envReply", dotenv);
  // });

  createUrlList();

  function createUrlList() {
    const appInfo = spawn(
      "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",
      ["-dump"]
    );

    appInfo.on("error", (err) => console.error(err));

    const x: ArrayBuffer[] = [];

    appInfo.stdout.on("data", (data: Buffer) => {
      x.push(data);
    });

    let result;

    appInfo.stdout.on("end", async () => {
      let q = x
        .toString()
        .split(
          "--------------------------------------------------------------------------------"
        );
      const replace = q.at(0);
      q = q.slice(1);

      let final3: any[] = [];

      q.forEach((ui) => {
        const po = ui.split("\n");
        let obj = {};
        po.map((x, index) => {
          let f = x.search(":");
          if (f > 0) {
            let c = x.substring(0, f);
            let j = x.substring(f + 1).trim();
            Object.defineProperty(obj, c, {
              value: j,
              enumerable: true,
              configurable: true,
            });
          }
        });
        final3.push(obj);
      });
      result = final3
        .filter((x) => (x["claimed schemes"] ? true : false))
        .map((x) => {
          return {
            name: x.displayName ? x.displayName : x.name,
            scheme: x["claimed schemes"].split(","),
          };
        });

      try {
        // const resultStr = JSON.stringify(result);
        // console.log({ resultStr });
        // await win.webContents.executeJavaScript(
        //   `window.localStorage.setItem("apps", JSON.stringify(${resultStr}))`,
        //   true
        // );
        // const res = await win.webContents.executeJavaScript(
        //   `window.localStorage.getItem("apps")`,
        //   true
        // );

        console.log(app.getPath("sessionData"));
      } catch (err) {
        console.error(err);
      }
      win.webContents.send("readUrls", result.slice(0, 25));
    });
  }
}

app.whenReady().then(() => {
  ipcMain.on(
    "readUrls",
    (_event: any, value: { name: string; scheme: string[] }[]) => {
      console.log(value); // will print value to Node console
    }
  );

  ipcMain.handle("setIcons", setIcons);
  ipcMain.handle("pullNextApps", pullNextApps);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

async function setIcons(event: any, value: string) {
  let iconUrl = "";
  icons.auth(process.env.ICON_API_KEY as string);

  try {
    const { data } = await icons.search({ query: value, count: 2 });
    const icon = data;
    let iconArr = icon.icons[1];
    let url = iconArr ? iconArr.raster_sizes[3]?.formats[0].preview_url : "";
    return url;
  } catch (err) {
    console.error(err);
    app.quit();
  }

  return iconUrl;
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

function pullNextApps(event: IpcMainInvokeEvent, ...args: any[]) {}
