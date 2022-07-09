
let myLeads = [];
let oldLeads = [];
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.yahoo.com");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");


// localStorage.setItem("myLeads", "www.examplelead.com");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();

// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// const tabs = [
//     {url: "https://linkedin.com/in/per-herald-borgen/"}
// ];

tabBtn.addEventListener("click", function(){
    // chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
    //     let activeTab = tabs[0];
    //     let activeTabId = activeTab.id;
    // });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });

    
    
});



function render(leads) {
    let listItems = '';
    for (let i = 0; i < leads.length; i++) {
        // listItems += '<li><a href="' + myLeads[i] + '" target="_blank">' + myLeads[i] + '</a></li>';
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
            `;
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;

}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
    // ulEl.innerHTML = '';
});

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);
    // console.log(localStorage.getItem("myLeads"));
});



// const containerEl = document.getElementById("container");

// containerEl.innerHTML = "<button onclick='buy()'>BUY!</button>";

// function buy() {
//     containerEl.innerHTML += "<p>Thank you for buying!</p>";
// }

// template string / literals

// const recipient = "James";
// const sender = "Sean"

// const email = 
//             `
//             Hey ${recipient}! 
//             How is it going?
//             Cheers, ${sender}
//             `; 

// console.log(email);
// function add(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }

// add(9,102);

// let school = ["UPHSD", "SNS", "TRADE"];

// function getFrist(arr) {
//     console.log(arr[0]);
// }

// getFrist(school);