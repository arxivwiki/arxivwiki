(document.getElementById("randompage") || {}).onclick = async () => {
    const response = await fetch("https://raw.githubusercontent.com/arxivwiki/arxivwiki/main/_data/all.csv");
    const data = await response.text();
    lines = data.split("\n").slice(1);
    link = lines[Math.floor(Math.random() * lines.length)];
    window.location.href = link;
};
