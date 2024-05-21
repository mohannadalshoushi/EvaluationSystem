let services = [
    ["Manage Audit criteria ", "return-to-finland.html"],
    ["Manage Aduit member", "#"],
    ["Manage Auditee", "#"],
    ["Assign audit member to Auditee", "#"],
    ["Mangae Audit Reports ", "#"],
//     ["Services for small entrepreneurship", "#"],
//     ["Services for expatriate organisations", "#"],
//     ["Services for expatriate initiatives", "#"]
 ];

function createServicesList() {
    let container = document.getElementById("content-services");
    let servicesList = document.createElement("ul");
    servicesList.setAttribute("class", "content-list");
    for (let i=0; i<services.length; i++){
        let servicesItemWrapper = document.createElement("li");
        servicesItemWrapper.setAttribute("class", "service-link");
        let servicesItem = document.createElement("a");
        servicesItem.innerText = services[i][0];
        servicesItem.setAttribute("href", services[i][1]);
        servicesItemWrapper.appendChild(servicesItem);
        servicesList.appendChild(servicesItemWrapper);
    }
    container.appendChild(servicesList);
}

// Accordion Functions
function manageAccordions() {
    let accordions = document.getElementsByClassName("accordion-tab");

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].onclick = function() {
            let panel = this.nextElementSibling;
            let accordionPanel = document.getElementsByClassName("accordion-panel");
            let accordion = document.getElementsByClassName("accordion-tab");
            let accordionActive = document.getElementsByClassName("accordion-tab active");

            // If pannel is already open - minimize
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                this.classList.remove("active");
            } else { 
                // Go through the tabs and removes the 'active' css (+ and -)
                for (let stepper = 0; stepper < accordionActive.length; stepper++) {
                    accordionActive[stepper].classList.remove("active");
                }
                // Go through and removes 'active' from the css, also minifies any 'panels' that might be open
                for (let stepper = 0; stepper < accordionPanel.length; stepper++) {
                    this.classList.remove("active");
                    accordionPanel[stepper].style.maxHeight = null;
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
            } 
        }
    }
}

function openSearch() {
    document.getElementById("overlay-search").style.display = "flex";
}
function closeSearch() {
    document.getElementById("overlay-search").style.display = "none";
}

let results = [
    ["Return to Finland",
     "For job seekers", 
     "International work experience is valuable. Suomi-Seura aims to elevate the appreciation of expatriate professionals, help match them with suitable opportunities, and further develope their career...", 
     "job-seekers"],
    ["Return to Finland", 
    "Finance your living", 
    "If you are moving for work, when applying for residence permit, you will need to prove your income is enough to support your stay Finland...", 
    "finance"],
];

// Pseudo Search Functions
function displayResults() {
    let resultsList = document.getElementById("search-results");

    while (resultsList.firstChild) {
        resultsList.removeChild(resultsList.firstChild);
    }

    for (let i=0; i<results.length; i++){
        let searchResultWrapper = document.createElement("li");
        searchResultWrapper.setAttribute("class", "result-item");
        let resultItem = document.createElement("a");
        resultItem.setAttribute("class", "result-link");
        let itemTag = document.createElement("span");
        itemTag.setAttribute("class", "result-tag highlight");
        itemTag.innerText = results[i][0];
        resultItem.appendChild(itemTag);
        let itemTitle = document.createElement("h3");
        itemTitle.innerText = results[i][1];
        resultItem.appendChild(itemTitle);
        let itemContent = document.createElement("span");
        itemContent.innerText = results[i][2];
        resultItem.appendChild(itemContent);
        resultItem.setAttribute("href", "return-to-finland.html#"+results[i][3]);
        resultItem.setAttribute("onclick","directToAnchor('"+results[i][3]+"');");
        searchResultWrapper.appendChild(resultItem);
        resultsList.appendChild(searchResultWrapper);
    }
}

// Direct to the accordion anchor
function directToAnchor(anchor) {
    document.getElementById("overlay-search").style.display = "none";

    let accordionTab = document.getElementsByName(anchor);
    console.log(accordionTab);
    let panel = accordionTab[0].nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.classList.add("active");
}