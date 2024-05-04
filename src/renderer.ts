


window.electronAPI.readUrls(
  async (event: any, value: { name: string; scheme: string[] }[]) => {
    const p = document.getElementById("x");
    const outputCheck: string | any[] = [];
    let ulTop = document.createElement("ul");
    if (p) {
      for (const app of value) {
        if (!outputCheck.includes(app.name) || app.name === "undefined") {
          let liTitle = document.createElement("li");
          let ulSub = document.createElement("ul");
          liTitle.innerHTML = app.name;
          event.sender.send("icons", app.name);
          outputCheck.push(app.name);
          const icon = await window.electronAPI.setIcons(app.name);
          let img = document.createElement("img");
          img.src = icon;
          liTitle.appendChild(img);
          app.scheme.forEach((link: string) => {
            let li = document.createElement("li");
            let anc = document.createElement("a");
            anc.href = `${link}//`;
            anc.innerHTML = `${link}//`;
            li.appendChild(anc);
            ulSub.appendChild(li);
            liTitle.appendChild(ulSub);
          });
          ulTop.appendChild(liTitle);
        }
      }
      document.body.append(ulTop);
      event.sender.send("readUrls", value);
    }
  },
);
