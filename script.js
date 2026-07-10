async function loadNews(){

    const res = await fetch("news.json");
    const data = await res.json();

    document.getElementById("summary").innerHTML =
        data.summary.map(text => `<div class="news-item">${text}</div>`).join("");

    document.getElementById("important").innerHTML =
        createList(data.important);

    document.getElementById("ai").innerHTML =
        createList(data.ai);

    document.getElementById("mahjong").innerHTML =
        createList(data.mahjong);

    document.getElementById("slot").innerHTML =
        createList(data.slot);

    document.getElementById("recommend").innerHTML =
        createList(data.recommend);

    document.getElementById("lastUpdate").innerHTML =
        "最終更新 " + new Date().toLocaleTimeString("ja-JP",{
            hour:"2-digit",
            minute:"2-digit"
        });

}

function createList(list){

    if(list.length===0){
        return "<div class='news-item'>まだニュースはありません</div>";
    }

    return list.map(item =>
        `<div class="news-item">${item}</div>`
    ).join("");

}

document
.getElementById("refreshButton")
.addEventListener("click",loadNews);

loadNews();
