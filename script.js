async function loadNews(){

const res = await fetch("news.json");

const data = await res.json();

document.getElementById("summary").innerHTML =
data.summary.join("<br>");

document.getElementById("updated").innerHTML =
"最終更新 " + new Date().toLocaleString();

}

loadNews();
