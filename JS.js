
// Side Menu Display

let menu = document.querySelector("#Menucontainer");
let menubox = document.querySelector("#DropMenu");
let crs = document.querySelector("#cross");
menubox.style.transition = "0.5s";

menu.addEventListener("click", function () {
    menu.style.display = "none";
    menubox.style.display = "block";

    setTimeout(function () {
        menubox.style.transform = "translateX(0%)";

    }, 0);



});

crs.addEventListener("click", function () {
    menu.style.display = "block";
    menubox.style.transform = "translateX(-100%)";


});

// Oho!!! Theme Change

let themedata = {};
let bg = document.querySelector("body");

let thm = document.getElementById("ThemeBtn");
let thmbox = document.getElementById("Theme");

let defaultbg = "light bg.jpg";
let defaultnoteimg = "pexels-milo-textures-2768398.jpg";
let tempnoteimg = defaultnoteimg;

document.querySelector("body").style.backgroundImage = `url('${defaultbg}')`;

if (localStorage.getItem("NOTE2") == null) {

    themedata["defaultbg"] = `${defaultbg}`;
    themedata["defaultnoteimg"] = `${defaultnoteimg}`;
    localStorage.setItem("NOTE2", JSON.stringify(themedata));

}

else {
    themedata = JSON.parse(localStorage.getItem("NOTE2"));


    defaultbg = themedata["defaultbg"];
    defaultnoteimg = themedata["defaultnoteimg"];

    document.querySelectorAll("#notearea > div").forEach(element => {
        element.style.backgroundImage = `url('${defaultnoteimg}')`;

    });

    bg.style.backgroundImage = `url('${defaultbg}')`;

}



thm.addEventListener("click", function () {
    thmbox.style.display = "block";
    menubox.style.display = "none";

    if (document.querySelector(".notepg") == null) {
        let dumydiv = document.createElement("div");
        dumydiv.className = "notepg";
        dumydiv.id = "dumy";
        let dumyp = document.createElement("p");
        dumyp.innerText = "NOTES";
        dumyp.style.marginTop = "15px";
        dumydiv.appendChild(dumyp);

        document.querySelector("#notearea").appendChild(dumydiv);

        dumydiv.style.backgroundImage = `url('${defaultnoteimg}')`;
    }


    let thmdiv = document.querySelector("#notearea > div");


    if (thmdiv.style.backgroundImage.slice(4, -1).replace(/"/g, "") == 'pexels-fwstudio-129731.jpg') {
        childcnt[0].className = "item2";
        childcnt[1].className = "item1";
        childcnt[2].className = "item1";

    }
    else if (thmdiv.style.backgroundImage.slice(4, -1).replace(/"/g, "") == "pexels-milo-textures-2768398.jpg") {
        childcnt[0].className = "item1";
        childcnt[1].className = "item2";
        childcnt[2].className = "item1";

    }
    else {
        childcnt[0].className = "item1";
        childcnt[1].className = "item1";
        childcnt[2].className = "item2";

    }



});

Themecrs.addEventListener("click", function () {

    thmbox.style.display = "none";
    menubox.style.display = "block";


    document.querySelectorAll("#notearea > div").forEach(element => {
        element.style.backgroundImage = `url('${defaultnoteimg}')`;

    });

    bg.style.backgroundImage = `url('${defaultbg}')`;

    if (document.querySelector("#dumy") != null) {
        document.querySelector("#dumy").remove();
    }

});

let aplybtn = document.querySelector("#applybtn  span");

aplybtn.addEventListener("click", function () {
    thmbox.style.display = "none";
    menubox.style.display = "block";




    document.querySelectorAll("#notearea > div").forEach(element => {
        defaultnoteimg = element.style.backgroundImage.slice(4, -1).replace(/"/g, "");
        element.style.backgroundImage = `url('${defaultnoteimg}')`;

    });
    defaultbg = bg.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    bg.style.backgroundImage = `url('${defaultbg}')`;

    if (document.querySelector("#dumy") != null) {
        document.querySelector("#dumy").remove();
    }

    themedata["defaultbg"] = `${defaultbg}`;
    themedata["defaultnoteimg"] = `${defaultnoteimg}`;
    localStorage.setItem("NOTE2", JSON.stringify(themedata));

});



let lgt = document.getElementById("1");
let drk = document.getElementById("2");
let cnt = 0;

let contactpg = document.querySelector("#Contact");
let abtpg = document.querySelector("#about");
let htpg = document.querySelector("#HowTo");

if (bg.style.backgroundImage.slice(4, -1).replace(/"/g, "") == 'dark bg 1.jpg') {
    contactpg.className = "Popup_pg1";
    htpg.className = "Popup_pg1";
    abtpg.className = "Popup_pg1";

}
else {
    contactpg.className = "Popup_pg";
    htpg.className = "Popup_pg";
    abtpg.className = "Popup_pg";

}


drk.addEventListener("click", function () {

    bg.style.backgroundImage = "url('dark bg 1.jpg')";
    lgt.className = "item1";
    drk.className = "item2";

    contactpg.className = "Popup_pg1";
    htpg.className = "Popup_pg1";
    abtpg.className = "Popup_pg1";



});

lgt.addEventListener("click", function () {

    bg.style.backgroundImage = "url('light bg.jpg')";

    lgt.className = "item2";
    drk.className = "item1";


    contactpg.className = "Popup_pg";
    htpg.className = "Popup_pg";
    abtpg.className = "Popup_pg";



});

if (bg.style.backgroundImage.slice(4, -1).replace(/"/g, "") == 'light bg.jpg') {
    lgt.className = "item2";
    drk.className = "item1";

}
else {
    lgt.className = "item1";
    drk.className = "item2";

}



let noteprnt = document.querySelector("#noteimg > ul");
let childcnt = noteprnt.children;




childcnt[0].addEventListener("click", function () {

    let allnotesprnt = document.querySelectorAll("#notearea > div");
    allnotesprnt.forEach(element => {
        element.style.backgroundImage = "url('pexels-fwstudio-129731.jpg')";

    });

    childcnt[0].className = "item2";
    childcnt[1].className = "item1";
    childcnt[2].className = "item1";



});

childcnt[1].addEventListener("click", function () {

    let allnotesprnt = document.querySelectorAll("#notearea > div");
    allnotesprnt.forEach(element => {
        element.style.backgroundImage = "url('pexels-milo-textures-2768398.jpg')";

    });
    childcnt[0].className = "item1";
    childcnt[1].className = "item2";
    childcnt[2].className = "item1";



});

childcnt[2].addEventListener("click", function () {
    let allnotesprnt = document.querySelectorAll("#notearea > div");
    allnotesprnt.forEach(element => {
        element.style.backgroundImage = "url('pexels-scott-webb-3255761.jpg')";

    });
    childcnt[0].className = "item1";
    childcnt[1].className = "item1";
    childcnt[2].className = "item2";


});





// About Page and Button

let abt_btn = document.querySelector("#AboutBtn");

let abt_crs = document.querySelector("#aboutcross");

abt_btn.addEventListener("click", function () {

    abtpg.style.display = "flex";
    document.querySelector("#navbar").style.display = "none";
    document.querySelector("#DropMenu").style.display = "none";
    document.querySelector("#TextArea").style.display = "none";
    document.querySelector("#notearea").style.display = "none";
});

abt_crs.addEventListener("click", function () {

    abtpg.style.display = "none";
    document.querySelector("#navbar").style.display = "flex";
    document.querySelector("#DropMenu").style.display = "block";
    document.querySelector("#TextArea").style.display = "flex";
    document.querySelector("#notearea").style.display = "block";

});

// How To PAge

let htbtn = document.querySelector("#HowToBtn");

let htcrs = document.querySelector("#HowTocross");

htbtn.addEventListener("click", function () {

    htpg.style.display = "flex";
    document.querySelector("#navbar").style.display = "none";
    document.querySelector("#DropMenu").style.display = "none";
    document.querySelector("#TextArea").style.display = "none";
    document.querySelector("#notearea").style.display = "none";
});

htcrs.addEventListener("click", function () {

    htpg.style.display = "none";
    document.querySelector("#navbar").style.display = "flex";
    document.querySelector("#DropMenu").style.display = "block";
    document.querySelector("#TextArea").style.display = "flex";
    document.querySelector("#notearea").style.display = "block";
});

// Cross Button Fix

let gencrs1 = document.querySelector("#HowTocross");

gencrs1.addEventListener("mouseover", function () {

    document.querySelector("#Imgcrs1").style.border = "2px solid black ";

});

gencrs1.addEventListener("mouseout", function () {

    document.querySelector("#Imgcrs1").style.border = "none";

});



let gencrs2 = document.querySelector("#Contactcrs");

gencrs2.addEventListener("mouseover", function () {

    document.querySelector("#Imgcrs2").style.border = "2px solid black ";

});

gencrs2.addEventListener("mouseout", function () {

    document.querySelector("#Imgcrs2").style.border = "none";

});


let gencrs3 = document.querySelector("#aboutcross");

gencrs3.addEventListener("mouseover", function () {

    document.querySelector("#Imgcrs3").style.border = "2px solid black ";

});

gencrs3.addEventListener("mouseout", function () {

    document.querySelector("#Imgcrs3").style.border = "none";

});


// Contact Us

let contactbtn = document.querySelector("#ContactBtn");

let contactcrs = document.querySelector("#Contactcrs");

contactbtn.addEventListener("click", function () {

    contactpg.style.display = "flex";
    document.querySelector("#navbar").style.display = "none";
    document.querySelector("#DropMenu").style.display = "none";
    document.querySelector("#TextArea").style.display = "none";
    document.querySelector("#notearea").style.display = "none";
});

contactcrs.addEventListener("click", function () {

    contactpg.style.display = "none";
    document.querySelector("#navbar").style.display = "flex";
    document.querySelector("#DropMenu").style.display = "block";
    document.querySelector("#TextArea").style.display = "flex";
    document.querySelector("#notearea").style.display = "block";
});



// Local Storage Reading
let notedata = {};

if (localStorage.getItem("NOTE1") != null) {
    let divid, ptxt, ary;
    notedata = JSON.parse(localStorage.getItem("NOTE1"));


    for (let key in notedata) {


        divid = key;
        ary = notedata[key];
        ptxt = notedata[key][0];



        let notebox = document.createElement("div");
        notebox.id = divid;
        notebox.className = "notepg";
        notebox.style.backgroundImage = `url('${defaultnoteimg}')`;
        notebox.setAttribute("onmouseenter", "diventer(this.id)");
        notebox.setAttribute("onmouseleave", "divout(this.id)");

        document.querySelector("#notearea").appendChild(notebox);

        let crscont = document.createElement('div');
        crscont.className = "crscontainer";
        document.getElementById(`${divid}`).appendChild(crscont);

        let elmnt = document.createElement("p");
        elmnt.className = "notetxt";
        elmnt.innerText = ptxt;
        if (ary.length == 2) {
            elmnt.style.textDecorationLine = notedata[key][1];
        }

        document.getElementById(`${divid}`).appendChild(elmnt);

        let chkcont = document.createElement('div');
        chkcont.className = "checkcontainer";
        document.getElementById(`${divid}`).appendChild(chkcont);


    };

}



// Main Content - Adding Notes

let txtarea = document.querySelector("#ta");


txtarea.addEventListener("blur", function () {

    let val = txtarea.value;
    let notebox = document.createElement("div");



    if (thmbox.style.display == "block") {
        tempnoteimg = document.querySelector("#notearea > div").style.backgroundImage.slice(4, -1).replace(/"/g, "");
    }
    else {
        tempnoteimg = defaultnoteimg;
    }

    notebox.className = "notepg";
    notebox.style.backgroundImage = `url('${tempnoteimg}')`;
    notebox.setAttribute("onmouseenter", "diventer(this.id)");
    notebox.setAttribute("onmouseleave", "divout(this.id)");

    let randIdstr = "A" + (Math.floor(Math.random() * 100) + 1).toString();
    notebox.id = randIdstr;
    raid = randIdstr;
    document.querySelector("#notearea").appendChild(notebox);

    let crscont = document.createElement('div');
    crscont.className = "crscontainer";
    document.getElementById(`${randIdstr}`).appendChild(crscont);

    let elmnt = document.createElement("p");
    elmnt.className = "notetxt";
    elmnt.innerText = val;

    document.getElementById(`${randIdstr}`).appendChild(elmnt);

    let chkcont = document.createElement('div');
    chkcont.className = "checkcontainer";
    document.getElementById(`${randIdstr}`).appendChild(chkcont);


    txtarea.value = "";

    if (document.querySelector("#dumy") != null) {
        document.querySelector("#dumy").remove();
    }


    if (JSON.parse(localStorage.getItem("NOTE1")) == null) {
        notedata[`${randIdstr}`] = [`${val}`];
        localStorage.setItem("NOTE1", JSON.stringify(notedata));
    }
    else {

        notedata = JSON.parse(localStorage.getItem("NOTE1"));
        notedata[`${randIdstr}`] = [`${val}`];
        localStorage.setItem("NOTE1", JSON.stringify(notedata));

    }

});


let notecrs, notecheck, parent;

function diventer(ee) {
    notecrs = document.createElement("span");
    notecheck = document.createElement("span");
    let crsimg = document.createElement("img");

    crsimg.setAttribute("src", "iconfinder_cross-24_103181.png");

    notecrs.id = "notecrs";
    notecheck.id = "check";
    notecrs.appendChild(crsimg);

    parent = document.getElementById(`${ee}`);

    notecheck.innerText = "Check";

    if (parent.querySelector("p").style.textDecorationLine == "line-through") {
        notecheck.innerText = "Uncheck";

    }


    parent.firstElementChild.appendChild(notecrs);
    parent.lastElementChild.appendChild(notecheck);


    notecrs.addEventListener("click", function () {
        tempnoteimg = parent.style.backgroundImage;
        parent.remove();

        if (thmbox.style.display == "block" && document.querySelector(".notepg") == null) {
            let dumydiv = document.createElement("div");
            dumydiv.className = "notepg";
            dumydiv.id = "dumy";
            let dumyp = document.createElement("p");
            dumyp.innerText = "NOTES";
            dumyp.style.marginTop = "15px";
            dumydiv.appendChild(dumyp);
            dumydiv.style.backgroundImage = tempnoteimg;
            document.querySelector("#notearea").appendChild(dumydiv);


        }

        delete notedata[`${ee}`];
        localStorage.setItem("NOTE1", JSON.stringify(notedata));
        if (localStorage.getItem("NOTE1") == "{}") {
            localStorage.removeItem("NOTE1");
        }

    });

    notecheck.addEventListener("click", function () {

        if (parent.querySelector("p").style.textDecorationLine != "line-through") {
            parent.querySelector("p").style.textDecorationLine = "line-through";
            parent.lastElementChild.firstElementChild.innerText = "Uncheck";

            updateddata = parent.querySelector("p").innerText;
            notedata[`${ee}`] = [updateddata, "line-through"];
            localStorage.setItem("NOTE1", JSON.stringify(notedata));


        }
        else {
            parent.querySelector("p").style.textDecorationLine = "none";
            parent.lastElementChild.firstElementChild.innerText = "Check";
            notedata[`${ee}`] = [updateddata];
            localStorage.setItem("NOTE1", JSON.stringify(notedata));
        }
    });


}

function divout(ee) {
    parent = document.getElementById(`${ee}`);
    parent.firstElementChild.firstElementChild.remove();
    parent.lastElementChild.firstElementChild.remove();


}


// Filter Notes

let search = document.querySelector("#Search");
let searchbtn = document.querySelector("#SearchIcon");
let searchval;

searchbtn.addEventListener("click", function (e) {


    searchval = document.querySelector("#Search").value;
    let filter = document.querySelectorAll("#notearea > div");

    if (searchval != "") {

        filter.forEach(element => {
            searchval = searchval.toLowerCase();
            let elmntid = element.getAttribute("id");
            if (element.querySelector("p").innerText.toLowerCase().split(" ").includes(searchval)) {
                element.style.display = "flex";
            }
            else {
                element.style.display = "none";

            }
        });
    }
    else {

        filter.forEach(element => {

            element.style.display = "flex";

        });
    }

});

search.addEventListener("keyup", function (e) {

    if (e.keyCode == 13) {
        searchval = document.querySelector("#Search").value;
        let filter = document.querySelectorAll("#notearea > div");

        if (searchval != "") {

            filter.forEach(element => {
                searchval = searchval.toLowerCase();
                let elmntid = element.getAttribute("id");
                if (element.querySelector("p").innerText.toLowerCase().split(" ").includes(searchval)) {
                    element.style.display = "flex";
                }
                else {
                    element.style.display = "none";

                }
            });
        }
        else {

            filter.forEach(element => {

                element.style.display = "flex";

            });
        }
    }
});



















