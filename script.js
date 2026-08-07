console.log(apps);

const appContainer = document.getElementById("appContainer");

function showApps(appList){

appContainer.innerHTML="";

appList.forEach(app=>{

appContainer.innerHTML+=`
<div class="app-card">

<img src="${app.image}" alt="${app.name}">

<div class="app-info">

<h3>${app.name}</h3>

<div class="app-tags">
<span class="verified">✔ Verified</span>
<span class="trending">🔥 Trending</span>
</div>

<p class="bonus">🎁 Bonus ${app.bonus}</p>

<p class="withdraw">💰 Min Withdrawal ${app.withdraw}</p>
<p class="downloads">👥 ${Math.floor(Math.random()*90000+10000).toLocaleString()}+ Downloads</p>

<a href="${app.link}" target="_blank" class="download-btn">⬇ Download Now</a>

</div>

</div>
`;

});

}

showApps(apps);

const categoryButtons = document.querySelectorAll(".category-bar button");

categoryButtons.forEach(btn => {

btn.addEventListener("click", () => {

categoryButtons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const text = btn.textContent.trim();

if(text === "All"){

showApps(apps);

document.getElementById("topapps").scrollIntoView({
behavior:"smooth"
});

}

else if(text === "New"){

showApps(apps.slice(0,5));

document.getElementById("topapps").scrollIntoView({
behavior:"smooth"
});

}

else if(text === "Diwa Apps"){

const filtered = apps.filter(app => {

const name = app.name.toLowerCase();

return (
name.includes("diwa") ||
name.includes("mqm bet") ||
name.includes("goodslots")
);

});

showApps(filtered);

document.getElementById("topapps").scrollIntoView({
behavior:"smooth"
});

}

});

});

const search = document.querySelector(".search input");
const searchResults = document.getElementById("searchResults");

if(search){

search.addEventListener("input",()=>{

const value = search.value.toLowerCase().trim();

if(value===""){
searchResults.style.display="none";
showApps(apps);
return;
}

const filtered = apps.filter(app=>
app.name.toLowerCase().includes(value)
);

searchResults.innerHTML="";

searchResults.style.display="block";

filtered.forEach(app=>{

searchResults.innerHTML += `
<div class="search-item" onclick="window.open('${app.link}','_blank')">

<img src="${app.image}" alt="${app.name}">

<div>

<h3>${app.name}</h3>

<p>🎁 Bonus ${app.bonus}</p>

<a href="${app.link}" target="_blank" class="download-btn">
⬇ Download
</a>

</div>

</div>
`;

});

});

}
const featuredContainer = document.getElementById("featuredContainer");

if(featuredContainer){

const featuredApps = apps.slice(0,3);

featuredApps.forEach(app=>{

featuredContainer.innerHTML += `
<div class="app-card featured-card">


<img src="${app.image}" alt="${app.name}">

<div class="app-info">
<p class="top-choice">🏆 Top Choice</p>
<h3>${app.name}</h3>

<p class="rating">⭐⭐⭐⭐⭐ <span>(4.9)</span></p>

<p class="bonus">🎁 Bonus ${app.bonus}</p>

<p class="withdraw">💰 Min Withdrawal ${app.withdraw}</p>
<p class="downloads">👥 ${Math.floor(Math.random()*90000+10000).toLocaleString()}+ Downloads</p>


<a href="${app.link}" target="_blank" class="download-btn">Download</a>

</div>

</div>
`;

});

}
const newAppContainer = document.getElementById("newAppContainer");

if (newAppContainer) {

newAppContainer.innerHTML = "";

const newApps = apps.slice(0,5);

newApps.forEach(app => {

newAppContainer.innerHTML += `
<div class="app-card featured-card">

<span class="new-badge">NEW</span>

<img src="${app.image}" alt="${app.name}">

<div class="app-info">

<h3>${app.name}</h3>

<p class="bonus">🎁 Bonus ${app.bonus}</p>

<p class="withdraw">💰 Min Withdrawal ${app.withdraw}</p>

<p class="downloads">👥 ${Math.floor(Math.random()*90000+10000).toLocaleString()}+ Downloads</p>

<a href="${app.link}" target="_blank" class="download-btn">Download</a>

</div>

</div>
`;

});

}
const topBtn = document.getElementById("topBtn");

if(topBtn){
  
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

}


const liveCount = document.getElementById("liveCount");

if (liveCount) {

let visitors = 420;

liveCount.textContent = visitors;

setInterval(() => {

visitors++;

if (visitors > 500) {
    visitors = 380;
}

liveCount.textContent = visitors;

}, 1000);

}
