import "../css/index.css";
import "../css/component.less";
import img02 from "../img/02.png";

function component() {
  const element = document.createElement("div");
  element.innerHTML = ["hello", "webpack"].join(" ");
  element.className = "content";

  const imgEl = new Image();
  imgEl.src = img02;
  element.appendChild(imgEl);

  const bgDivEl = document.createElement("div");
  bgDivEl.style.width = `200px`;
  bgDivEl.style.height = `200px`;
  bgDivEl.className = "bg-img";
  element.appendChild(bgDivEl);

  //创建一个i元素
  const iEl = document.createElement("i");
  iEl.className = "iconfont icon-diannaoguan wang_icon";
  element.appendChild(iEl);

  return element;
}
document.body.appendChild(component());
