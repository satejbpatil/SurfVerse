let a = document.getElementById("Customize-Dashboard");
a.style.display = "none";

let leftsection1 = document.getElementById("right-section");
let leftsection2 = document.getElementById("brave-stats_section");
let leftsection3 = document.getElementById("top_sites_section");
let leftsection5 = document.getElementById("clock_section");
leftsection2.style.display = "none";
leftsection3.style.display = "none";
leftsection5.style.display = "none";
function defaultcss() {
  let element = document.getElementById("items-name1");
  element.style.color = "#fb542b";
  let element2 = document.getElementById("items-name2");
  let element3 = document.getElementById("items-name3");
  let element4 = document.getElementById("items-name4");
  let element5 = document.getElementById("items-name5");
  let element6 = document.getElementById("items-name6");
  element2.style.color = "#fcfbfb";
  element3.style.color = "#fcfbfb";
  element4.style.color = "#fcfbfb";
  element5.style.color = "#fcfbfb";
  element6.style.color = "#fcfbfb";

  let colorsection1 = document.getElementById("color-section1");
  colorsection1.style.backgroundColor = "#fb542b";

  let colorsection2 = document.getElementById("color-section2");
  let colorsection3 = document.getElementById("color-section3");
  let colorsection4 = document.getElementById("color-section4");
  let colorsection5 = document.getElementById("color-section5");
  let colorsection6 = document.getElementById("color-section6");
  colorsection2.style.backgroundColor = "black";
  colorsection3.style.backgroundColor = "black";
  colorsection4.style.backgroundColor = "black";
  colorsection5.style.backgroundColor = "black";
  colorsection6.style.backgroundColor = "black";
}
function defaultdata() {
  leftsection1.style.display = "Block";
  leftsection2.style.display = "none";
  leftsection3.style.display = "none";
  leftsection5.style.display = "none";
}
function customButtonFunction() {
  let a = document.getElementById("Customize-Dashboard");
  if (a.style.display != "none") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }

  defaultcss();
  defaultdata();
}
function closeCustomizeDashboard() {
  let a = document.getElementById("Customize-Dashboard");
  a.style.display = "none";
  // let element = document.getElementById("items-name1");
  // element.style.color = "#fb542b";
  defaultcss();
  defaultdata();
}
function leftSectionItem1() {
  let element = document.getElementById("items-name1");
  element.style.color = "#fb542b";
  let colorsection = document.getElementById("color-section1");
  colorsection.style.backgroundColor = "#fb542b";

  let element2 = document.getElementById("items-name2");
  let element3 = document.getElementById("items-name3");
  let element4 = document.getElementById("items-name4");
  let element5 = document.getElementById("items-name5");
  let element6 = document.getElementById("items-name6");
  element2.style.color = "#fcfbfb";
  element3.style.color = "#fcfbfb";
  element4.style.color = "#fcfbfb";
  element5.style.color = "#fcfbfb";
  element6.style.color = "#fcfbfb";

  let colorsection2 = document.getElementById("color-section2");
  let colorsection3 = document.getElementById("color-section3");
  let colorsection4 = document.getElementById("color-section4");
  let colorsection5 = document.getElementById("color-section5");
  let colorsection6 = document.getElementById("color-section6");
  colorsection2.style.backgroundColor = "black";
  colorsection3.style.backgroundColor = "black";
  colorsection4.style.backgroundColor = "black";
  colorsection5.style.backgroundColor = "black";
  colorsection6.style.backgroundColor = "black";

  leftsection1.style.display = "block";
  leftsection2.style.display = "none";
  leftsection3.style.display = "none";
  leftsection5.style.display = "none";
}

function leftSectionItem2() {
  let element = document.getElementById("items-name2");
  element.style.color = "#fb542b";
  let colorsection = document.getElementById("color-section2");
  colorsection.style.backgroundColor = "#fb542b";

  let element1 = document.getElementById("items-name1");
  let element3 = document.getElementById("items-name3");
  let element4 = document.getElementById("items-name4");
  let element5 = document.getElementById("items-name5");
  let element6 = document.getElementById("items-name6");
  element1.style.color = "#fcfbfb";
  element3.style.color = "#fcfbfb";
  element4.style.color = "#fcfbfb";
  element5.style.color = "#fcfbfb";
  element6.style.color = "#fcfbfb";

  let colorsection1 = document.getElementById("color-section1");
  let colorsection3 = document.getElementById("color-section3");
  let colorsection4 = document.getElementById("color-section4");
  let colorsection5 = document.getElementById("color-section5");
  let colorsection6 = document.getElementById("color-section6");
  colorsection1.style.backgroundColor = "black";
  colorsection3.style.backgroundColor = "black";
  colorsection4.style.backgroundColor = "black";
  colorsection5.style.backgroundColor = "black";
  colorsection6.style.backgroundColor = "black";

  leftsection1.style.display = "none";
  leftsection2.style.display = "block";
  leftsection5.style.display = "none";
  leftsection3.style.display = "none";
}

function leftSectionItem3() {
  let element = document.getElementById("items-name3");
  element.style.color = "#fb542b";
  let colorsection = document.getElementById("color-section3");
  colorsection.style.backgroundColor = "#fb542b";
  let element1 = document.getElementById("items-name1");
  let element2 = document.getElementById("items-name2");
  let element4 = document.getElementById("items-name4");
  let element5 = document.getElementById("items-name5");
  let element6 = document.getElementById("items-name6");
  element1.style.color = "#fcfbfb";
  element2.style.color = "#fcfbfb";
  element4.style.color = "#fcfbfb";
  element5.style.color = "#fcfbfb";
  element6.style.color = "#fcfbfb";

  let colorsection1 = document.getElementById("color-section1");
  let colorsection2 = document.getElementById("color-section2");
  let colorsection4 = document.getElementById("color-section4");
  let colorsection5 = document.getElementById("color-section5");
  let colorsection6 = document.getElementById("color-section6");
  colorsection1.style.backgroundColor = "black";
  colorsection2.style.backgroundColor = "black";
  colorsection4.style.backgroundColor = "black";
  colorsection5.style.backgroundColor = "black";
  colorsection6.style.backgroundColor = "black";

  leftsection1.style.display = "none";
  leftsection2.style.display = "none";
  leftsection3.style.display = "block";
  leftsection5.style.display = "none";
}

function leftSectionItem4() {
  let element = document.getElementById("items-name4");
  element.style.color = "#fb542b";
  let colorsection = document.getElementById("color-section4");
  colorsection.style.backgroundColor = "#fb542b";

  let element1 = document.getElementById("items-name1");
  let element3 = document.getElementById("items-name3");
  let element2 = document.getElementById("items-name2");
  let element5 = document.getElementById("items-name5");
  let element6 = document.getElementById("items-name6");
  element1.style.color = "#fcfbfb";
  element3.style.color = "#fcfbfb";
  element2.style.color = "#fcfbfb";
  element5.style.color = "#fcfbfb";
  element6.style.color = "#fcfbfb";

  let colorsection1 = document.getElementById("color-section1");
  let colorsection3 = document.getElementById("color-section3");
  let colorsection2 = document.getElementById("color-section2");
  let colorsection5 = document.getElementById("color-section5");
  let colorsection6 = document.getElementById("color-section6");
  colorsection1.style.backgroundColor = "black";
  colorsection3.style.backgroundColor = "black";
  colorsection2.style.backgroundColor = "black";
  colorsection5.style.backgroundColor = "black";
  colorsection6.style.backgroundColor = "black";

  leftsection1.style.display = "none";
  leftsection2.style.display = "none";
  leftsection3.style.display = "none";
  leftsection5.style.display = "none";
}

function leftSectionItem5() {
  let element = document.getElementById("items-name5");
  element.style.color = "#fb542b";
  let colorsection = document.getElementById("color-section5");
  colorsection.style.backgroundColor = "#fb542b";

  let element1 = document.getElementById("items-name1");
  let element3 = document.getElementById("items-name3");
  let element4 = document.getElementById("items-name4");
  let element2 = document.getElementById("items-name2");
  let element6 = document.getElementById("items-name6");
  element1.style.color = "#fcfbfb";
  element3.style.color = "#fcfbfb";
  element4.style.color = "#fcfbfb";
  element2.style.color = "#fcfbfb";
  element6.style.color = "#fcfbfb";

  let colorsection1 = document.getElementById("color-section1");
  let colorsection3 = document.getElementById("color-section3");
  let colorsection4 = document.getElementById("color-section4");
  let colorsection2 = document.getElementById("color-section2");
  let colorsection6 = document.getElementById("color-section6");
  colorsection1.style.backgroundColor = "black";
  colorsection3.style.backgroundColor = "black";
  colorsection4.style.backgroundColor = "black";
  colorsection2.style.backgroundColor = "black";
  colorsection6.style.backgroundColor = "black";

  leftsection1.style.display = "none";
  leftsection2.style.display = "none";
  leftsection3.style.display = "none";
  leftsection5.style.display = "block";
}

function leftSectionItem6() {
  let element = document.getElementById("items-name6");
  element.style.color = "#fb542b";
  let colorsection = document.getElementById("color-section6");
  colorsection.style.backgroundColor = "#fb542b";

  let element1 = document.getElementById("items-name1");
  let element3 = document.getElementById("items-name3");
  let element4 = document.getElementById("items-name4");
  let element5 = document.getElementById("items-name5");
  let element2 = document.getElementById("items-name2");
  element1.style.color = "#fcfbfb";
  element3.style.color = "#fcfbfb";
  element4.style.color = "#fcfbfb";
  element5.style.color = "#fcfbfb";
  element2.style.color = "#fcfbfb";

  let colorsection1 = document.getElementById("color-section1");
  let colorsection3 = document.getElementById("color-section3");
  let colorsection4 = document.getElementById("color-section4");
  let colorsection5 = document.getElementById("color-section5");
  let colorsection2 = document.getElementById("color-section2");
  colorsection1.style.backgroundColor = "black";
  colorsection3.style.backgroundColor = "black";
  colorsection4.style.backgroundColor = "black";
  colorsection5.style.backgroundColor = "black";
  colorsection2.style.backgroundColor = "black";

  leftsection1.style.display = "none";
  leftsection2.style.display = "none";
  leftsection3.style.display = "none";
  leftsection5.style.display = "none";
}

function brave_background() {
  var images = [
    "./All_Images/background_image1.jpg",
    "./All_Images/background_image2.jpg",
    "./All_Images/background_image3.jpg",
    "./All_Images/background_image4.jpg",
    "./All_Images/background_image5.jpg",
    "./All_Images/background_image6.jpg",
    "./All_Images/background_image7.jpg",
    "./All_Images/background_image8.jpg",
    "./All_Images/background_image9.jpg",
    "./All_Images/background_image10.jpg",
    "./All_Images/background_image11.jpg",
    "./All_Images/background_image12.jpg",
  ];
  var randomIndex = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = "url(" + images[randomIndex] + ")";
}
function setBackgroundFromFile(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    document.body.style.backgroundImage = "url(" + event.target.result + ")";
  };

  reader.readAsDataURL(file);
}

function useYourOwn() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  fileInput.onchange = setBackgroundFromFile;

  document.body.appendChild(fileInput);
  fileInput.click();
}

function show_background_image_switch() {
  let a = document.getElementById("four-blocks");
  if (a.style.display != "none") {
    a.style.display = "none";
  } else {
    a.style.display = "flex";
  }
  var body = document.querySelector("body");
  var switchInput = document.querySelector(".switch input");

  if (!switchInput.checked) {
    body.style.backgroundImage = "url(./All_Images/gradant_color.jpg)";
  } else {
    body.style.backgroundImage = "url(./All_Images/background_image1.jpg)";
  }
}
function brave_stats_switch() {
  let a = document.getElementById("right_info");
  var switchInput = document.querySelector(".switch1 input");
  if (!switchInput.checked) {
    a.style.display = "none";
  } else {
    a.style.display = "flex";
  }
}

function top_sites_switch() {
  let a = document.getElementById("threedots");
  var switchInput = document.querySelector(".switch2 input");
  if (!switchInput.checked) {
    a.style.display = "none";
  } else {
    a.style.display = "flex";
  }
}

function clock_switch() {
  let a = document.getElementById("clock");
  var switchInput = document.querySelector(".switch4 input");
  if (!switchInput.checked) {
    a.style.display = "none";
  } else {
    a.style.display = "flex";
  }
}

// const btn1 = document.getElementById("my-button");
// const linkURL = "https://www.youtube.com";
// myButton.addEventListener("click", function () {
//   window.location.href = linkURL;
// });
