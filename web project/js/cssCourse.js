///////////////////////////////////////////////////

document.getElementById("fa-bars").addEventListener("click", () => {
  if (document.getElementById("fa-bars").className == "fas fa-bars") {
    document.getElementById("fa-bars").classList.add("fa-times");
    document.getElementById("sidebar").className = "sidebar-hidden";
    document.getElementById("nav").classList.add("nav-toggle");
  } else {
    document.getElementById("fa-bars").className = "fas fa-bars";
    document.getElementById("nav").className = "navbar";
    document.getElementById("sidebar").className = "sidebar";
  }
});

//console.log("window: ", window.innerHeight);
///////////////////////////////////////////////////////////////////////////////
const tab = [
  "introduction",
  "historique",
  "syntaxe",
  "style",
  "format",
  "props",
  "mode",
];

const btnPrevious = document.getElementById("previous");
const btnNext = document.getElementById("next");
const defaultSrc =
  "http://127.0.0.1:5500/web%20project/html/cssCourse/introduction.html";
///////////////////////////////////////////////////
btnPrevious.addEventListener("click", () => {
  var iframe = document.querySelector("iframe");
  var index = 0;
  const srcIframe = iframe.src;
  const src = srcIframe.substring(
    srcIframe.lastIndexOf("/") + 1,
    srcIframe.length
  );
  const url = srcIframe.substring(0, srcIframe.lastIndexOf("/") + 1);

  for (i = 0; i < tab.length; i++) {
    if (tab[i] + ".html" == src) index = i;
  }

  if (index > 0) {
    changeSrc(tab[index - 1]);

    changeStyle(tab[index - 1]);

    setSRC(tab[index - 1]);
  }
});
//////////////////////////////////////////////////////////////////////////
btnNext.addEventListener("click", () => {
  var iframe = document.querySelector("iframe");
  var index = 0;
  const srcIframe = iframe.src;
  const src = srcIframe.substring(
    srcIframe.lastIndexOf("/") + 1,
    srcIframe.length
  );
  const url = srcIframe.substring(0, srcIframe.lastIndexOf("/") + 1);
  for (i = 0; i < tab.length; i++) {
    if (tab[i] + ".html" == src) index = i;
  }

  if (index < tab.length - 1) {
    changeSrc(tab[index + 1]);

    changeStyle(tab[index + 1]);
    setSRC(tab[index + 1]);
    console.log(iframe.src);
  }
});
/////////////////////////////////////////////////////////////////
function changeStyle(link) {
  var links = document.querySelectorAll(".container .sidebar a");
  var linkssArray = [...links];
  linkssArray.forEach((element) => {
    if (element) element.classList.remove("active");
  });
  var activeLink = document.querySelector(".container .sidebar #" + link);
  if (activeLink) activeLink.classList.add("active");

  var links2 = document.querySelectorAll("header .navbar ul li a");
  var linkssArray2 = [...links2];
  linkssArray2.forEach((element) => {
    if (element) element.classList.remove("itemActive");
  });
}

function changeStyle2(link) {
  var links = document.querySelectorAll(".container .sidebar a");
  var linkssArray = [...links];
  linkssArray.forEach((element) => {
    if (element) element.classList.remove("active");
  });

  var links2 = document.querySelectorAll("header .navbar ul li a");
  var linkssArray2 = [...links2];
  if (link != "w3shoolHTML") {
    linkssArray2.forEach((element) => {
      if (element) element.classList.remove("itemActive");
    });
    var activeLink2 = document.querySelector("header .navbar ul #" + link);
    if (activeLink2) activeLink2.classList.add("itemActive");
  }
}

/////////////////////////////////////////////////////////////////
function changeSrc(src) {
  if (src == "w3shoolHTML") return;
  var iframe = document.querySelector("iframe");
  const srcIframe = iframe.src;

  const url = srcIframe.substring(0, srcIframe.lastIndexOf("/") + 1);
  iframe.src = url + src + ".html";
  // console.log("src: ", iframe.src);
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "frame");
  ifr.setAttribute("name", "frame");
  ifr.setAttribute("src", iframe.src);

  document.getElementById("frameDiv").innerHTML = "";
  document.getElementById("frameDiv").appendChild(ifr);
}
function setSRC(src) {
  if (src != "w3shoolHTML") {
    localStorage.setItem("src1", getURL() + src + ".html");
  }
}
function getURL() {
  var iframe = document.querySelector("iframe");
  const srcIframe = iframe.src;
  return srcIframe.substring(0, srcIframe.lastIndexOf("/") + 1);
}

function getSRC() {
  var iframe = document.querySelector("iframe");
  const src = localStorage.getItem("src1");
  const move = localStorage.getItem("move1");
  if (move) document.getElementById("move").className = move;
  else document.getElementById("move").className = "move";
  if (src) {
    iframe.src = src;
  } else {
    iframe.src = defaultSrc;
  }
  const SRC = iframe.src.substring(
    iframe.src.lastIndexOf("/") + 1,
    iframe.src.length - 5
  );
  if (SRC != "exercices" && SRC != "quiz" && SRC != "w3shoolHTML")
    changeStyle(SRC);
  else changeStyle2(SRC);
}

function actions(index, src) {
  changeSrc(src);
  var move = document.getElementById("move");
  if (index == 1) {
    changeStyle(src);
    if (move && move.className == "moveHidden") {
      move.className = "move";
      localStorage.setItem("move1", "move");
    }
  } else {
    changeStyle2(src);
    if (move && move.className == "move") {
      move.className = "moveHidden";
      localStorage.setItem("move1", "moveHidden");
    }
  }

  setSRC(src);
}

var move = () => {
  document
    .querySelector("iframe")
    .contentDocument.addEventListener("scroll", () => {
      var top = document.getElementById("frame").contentWindow.pageYOffset;
      if (top > 50) document.getElementById("move").style.marginTop = "-67rem";
      else document.getElementById("move").style.marginTop = "-10rem";
    });
};

move();
