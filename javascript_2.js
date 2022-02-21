const panels = document.querySelectorAll(".vote-1");
var C = 0;
// console.log(C);
panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener("click", () => {
    removeACtiveclasses();
    let allChildren = panel.querySelector("i");
    allChildren.classList.add("active");
    C = 1;
    localStorage.setItem("validation_3", C);
    C = 0;
    // return false;
    // console.log(C);
    var picture = panel.getElementsByClassName("img-vote");
    src_1 = "";
    src_1 = src_1 + picture[0].src;
    localStorage.setItem("textValue_3", src_1);
    var name_2 = panel.getElementsByClassName("name-app")[0].innerHTML;
    localStorage.setItem("textValue_3_name", name_2);
    return false;

    // console.log("write");
    // console.log(src_1);
    // console.log(name_2);
  });
});

function removeACtiveclasses() {
  panels.forEach((panel) => {
    let allChildren = panel.querySelector("i");
    allChildren.classList.remove("active");
  });
}
