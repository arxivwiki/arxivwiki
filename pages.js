    (async () => {
      const response = await fetch('https://api.github.com/repos/arxivwiki/arxivwiki/contents/');
      const data = await response.json();
      let htmlString = '<p>';
      for (let file of data) {
        let len = file.path.length - 3
        if (file.path.indexOf(".md") == len && file.path !== "README.md") {
          name = file.path.substr(0, len)
          htmlString += `<div><a href="${name}">${name}</a></div>`;
        }
      }
      htmlString += '</p>';
      document.getElementById("allfiles").innerHTML = htmlString;
    })()
