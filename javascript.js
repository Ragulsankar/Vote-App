const panels = document.querySelectorAll(".vote-1");
var A = 0;
// console.log(A);

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    removeACtiveclasses();
    let allChildren = panel.querySelector("i");
    allChildren.classList.add("active");
    A = 1;
    localStorage.setItem("validation_1", A);
    A = 0;
    // console.log(A);
    var picture = panel.getElementsByClassName("img-vote");
    src_1 = "";
    src_1 = src_1 + picture[0].src;
    localStorage.setItem("textValue_1", src_1);
    // console.log("write");
    // console.log(src_1);

    var name = panel.getElementsByClassName("name-app")[0].innerHTML;
    localStorage.setItem("textValue_1_name", name);
    return false;
    // console.log("write");
    // console.log(src_1);
    // console.log(name);
  });
});

function removeACtiveclasses() {
  panels.forEach((panel) => {
    let allChildren = panel.querySelector("i");
    allChildren.classList.remove("active");
  });
}
