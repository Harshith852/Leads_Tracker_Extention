let myleads = [];
let inputel = document.getElementById("input-el");
const saveel = document.getElementById("save-el");
const tabbtn = document.getElementById("save-tab");
const deleteel = document.getElementById("delete-el");
let ulel = document.getElementById("ul-el");
const leadslocstr = JSON.parse(localStorage.getItem("myleads"));

if (leadslocstr){
    myleads.push(leadslocstr);
    renderleads();
}

saveel.addEventListener("click",function (){
    myleads.push(inputel.value);
    inputel.value = "";
    localStorage.setItem("myleads",JSON.stringify(myleads));
    renderleads();
})

function renderleads(){
    ulel.innerHTML = "";
    for (let i=0; i<myleads.length; i++ ){
        ulel.innerHTML += (`
            <li>
            <a target="blank" href="${myleads[i]}">${myleads[i]}</a>
            </li>`)
    }
}

tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url);
        localStorage.setItem("myleads",JSON.stringify(myleads));
        renderleads();  
    })
})

deleteel.addEventListener("dblclick", function deleteall(){
    localStorage.clear();
    myleads= [];
    renderleads();
})