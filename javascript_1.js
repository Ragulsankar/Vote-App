const panels = document.querySelectorAll(".vote-1");
var B = 0;
// console.log(B);
panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener("click", () => {
    removeACtiveclasses();
    let allChildren = panel.querySelector("i");
    allChildren.classList.add("active");
    B = 1;
    localStorage.setItem("validation_2", B);
    B = 0;

    // console.log(B);
    var picture = panel.getElementsByClassName("img-vote");
    src_1 = "";
    src_1 = src_1 + picture[0].src;
    localStorage.setItem("textValue_2", src_1);
    var name_1 = panel.getElementsByClassName("name-app")[0].innerHTML;
    localStorage.setItem("textValue_2_name", name_1);

    // console.log("write");
    // console.log(src_1);
    // console.log(name_1);

    return false;
  });
});

function removeACtiveclasses() {
  panels.forEach((panel) => {
    let allChildren = panel.querySelector("i");
    allChildren.classList.remove("active");
  });
}
