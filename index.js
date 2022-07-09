
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
});


function renderLeads() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += '<li><a href="' + myLeads[i] + '" target="_blank">' + myLeads[i] + '</a></li>';
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
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