
function formatViews(views) {
    if(views>=1000000) {
        return (views / 1000000).toFixed(1) + "M";
    }else if(views>=1000) {
        return (views/1000).toFixed(1) + "K";
    }
    return views.toString();
}

function createCard(title, cName, views, monthsOld, duration, thumbnail , srno) {

    const container = document.querySelector(".outer");
    
    const card = document.createElement('div');
    card.classList.add('inner');

    const formattedViews = formatViews(views);

    card.innerHTML = `

        <h5 class="srno">${srno}</h5>
            <div class = "thumbnail-container">
                <img class="thumbnail" src="${thumbnail}" alt="thumbnail">
            <span class="duration">${duration}</span>
            </div>

            <div class="middle">
                <h2 class="title">${title}</h2>

            <div class="details">
                <p class="cName">${cName} • </p>
                <p class="views">  ${formattedViews} views • </p>
                <p class="views">  ${monthsOld} months ago </p>
            </div>
            
            </div>
            <img class="dots" src="dots.svg" alt="dots">

    `;

    container.appendChild(card);
}


createCard(
    "Introduction To Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "24:10",
    "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g",
    2
)

createCard(
    "Introduction To Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "24:10",
    "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g",
    2
)

createCard(
    "Introduction To Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "24:10",
    "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g",
    2
)
createCard(
    "Introduction To Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "24:10",
    "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g",
    2
)
createCard(
    "Introduction To Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "24:10",
    "https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDseCMNxPNnml2Myk1G9MS1_2j5g",
    2
)
