const img = document.getElementById("sliderImg");
const timer = document.querySelector(".timer");
const arrowText = document.querySelector(".buy-zone__text");
const arrow = document.querySelector(".buy-zone__arrow1");
const hiddenZone = document.querySelector(".buy-zone-hidden");
const menu = document.querySelector(".header__menu");

menu.addEventListener("click", function () {
  menu.style.transform = "scale(50%) translateY(-70px) translateX(250px)";
  setTimeout(() => {
    menu.style.transform = "";

    const modalMenu = document.createElement("div");
    modalMenu.classList.add("modal-menu");

    const modalMenuHeader = document.createElement("div");
    modalMenuHeader.classList.add("modal-menu__header");

    const headerLogo = document.createElement("img");
    headerLogo.classList.add("modal-menu__header-logo");
    headerLogo.src = "./images/logo-dark.png";

    const headerClose = document.createElement("img");
    headerClose.classList.add("modal-menu__header-close");
    headerClose.src = "./images/close-menu.png";
    headerClose.addEventListener("click", function () {
      modalMenu.remove();
    });
    headerClose.addEventListener("mouseover", function () {
      headerClose.style.transform = "scale(130%)";
    });
    headerClose.addEventListener("mouseleave", function () {
      setTimeout(() => {
        headerClose.style.transform = "";
      }, 300);
    });

    modalMenuHeader.append(headerLogo, headerClose);

    const modalMenuMain = document.createElement("ul");
    modalMenuMain.classList.add("modal-menu__main");

    function createItem(data) {
      const linkItem = document.createElement("a");
      linkItem.href = "./index.html";

      const item = document.createElement("li");
      item.classList.add("modal-menu__main-item");

      const nameItem = document.createElement("p");
      nameItem.classList.add("modal-menu__main-item-name");
      nameItem.textContent = data;

      const imgItem = document.createElement("img");
      imgItem.classList.add("modal-menu__main-item-img");
      imgItem.src = "./images/arrow.png";

      item.append(nameItem, imgItem);
      linkItem.append(item);

      modalMenuMain.append(linkItem);
    }
    createItem("Go to product page");
    createItem("Track your order");
    createItem("Contact us");
    createItem("FAQ");

    modalMenu.append(modalMenuHeader, modalMenuMain);
    document.querySelector(".container").append(modalMenu);
  }, 300);
});

menu.addEventListener("mouseover", function () {
  menu.style.transform = "scale(130%)";
});

menu.addEventListener("mouseleave", function () {
  setTimeout(() => {
    menu.style.transform = "";
  }, 300);
});

arrowText.addEventListener("click", function () {
  arrow.classList.toggle("buy-zone__arrow2");
  hiddenZone.classList.toggle("none");
});

function readText(data) {
  const hiddenZoneFooter = document.querySelector(".footer__hidden-text");
  const footerButton = document.querySelector(".footer__button-read");
  hiddenZoneFooter.classList.toggle("none");
  console.log(data);
  if (data.trim() == "Read less") {
    footerButton.textContent = "Read more";
  } else {
    footerButton.textContent = "Read less";
  }
}

function changeRange(data) {
  const result = `./images/slider-${data}.jpg`;
  img.src = result;
}

function changeImage(data) {
  if (data === "+") {
    if (document.querySelector(".range").value < 4) {
      const range = +document.querySelector(".range").value + 1;
      document.querySelector(".range").value = range;
      const result = `./images/slider-${range}.jpg`;
      img.src = result;
    } else {
      return;
    }
  } else if (data === "-") {
    if (document.querySelector(".range").value > 1) {
      const range = +document.querySelector(".range").value - 1;
      document.querySelector(".range").value = range;
      const result = `./images/slider-${range}.jpg`;
      img.src = result;
    } else {
      return;
    }
  }
}

const hours = document.createElement("p");
hours.classList.add("timer-hours");
hours.textContent = 17;

const spase1 = document.createElement("p");
spase1.classList.add("timer-spase");
spase1.textContent = " : ";

const minutes = document.createElement("p");
minutes.classList.add("timer-minutes");
minutes.textContent = 34;

const spase2 = document.createElement("p");
spase2.classList.add("timer-spase");
spase2.textContent = " : ";

const seconds = document.createElement("p");
seconds.classList.add("timer-seconds");
seconds.textContent = 53;

timer.append(hours, spase1, minutes, spase2, seconds);

setInterval(function () {
  seconds.classList.remove("timer-active");
  setTimeout(() => {
    seconds.classList.add("timer-active");
  }, 100);
  const second = +seconds.textContent;
  if (second > 1) {
    if (second < 11) {
      seconds.textContent = `0${second - 1}`;
    } else {
      seconds.textContent = second - 1;
    }
  } else if (second == 1) {
    seconds.textContent = 59;
    const minute = +minutes.textContent;
    if (minute > 1) {
      if (minute < 11) {
        minutes.textContent = `0${minute - 1}`;
      } else {
        minutes.textContent = minute - 1;
      }
    } else if (minute == 1) {
      minutes.textContent = 59;
      const hour = +hours.textContent;
      if (hour > 1) {
        if (hour < 11) {
          hours.textContent = `0${hour - 1}`;
        } else {
          hours.textContent = hour - 1;
        }
      }
    }
  }
}, 1000);

function modalWindow() {
  const container = document.createElement("div");
  container.classList.add("window-container");

  const modalWindow = document.createElement("div");
  modalWindow.classList.add("modal-window");
  modalWindow.classList.add("modal-window-animate1");
  modalWindow.classList.add("modal-window-animate2");

  setTimeout(() => {
    modalWindow.classList.remove("modal-window-animate1");
  }, 10);
  setTimeout(() => {
    modalWindow.classList.remove("modal-window-animate2");
  }, 510);

  const headerContent = document.createElement("div");
  headerContent.classList.add("modal__header");

  const headerImages = document.createElement("div");
  headerImages.classList.add("modal__header-images");

  const modalLogo = document.createElement("img");
  modalLogo.classList.add("modal__header-logo");
  modalLogo.src = "./images/afterpay-logo.svg";

  const modalClose = document.createElement("img");
  modalClose.classList.add("modal__header-close");
  modalClose.src = "./images/close.png";
  modalClose.addEventListener("click", function () {
    container.remove();
  });

  headerImages.append(modalLogo, modalClose);

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal__header-title");
  modalTitle.textContent = "Make easy monthly payments";

  headerContent.append(headerImages, modalTitle);

  const mainContent = document.createElement("div");
  mainContent.classList.add("modal__main");

  const costs = document.createElement("div");
  costs.classList.add("modal__main-costs");

  const costs1 = document.createElement("p");
  costs1.classList.add("modal__main-costs1");
  costs1.textContent = "£9.99/mo.";

  const costs2 = document.createElement("p");
  costs2.classList.add("modal__main-costs2");
  costs2.textContent = "10 months";

  costs.append(costs1, costs2);

  const infoCosts = document.createElement("ul");
  infoCosts.classList.add("modal__main-list");

  function createItem(name, text) {
    const item = document.createElement("li");
    item.classList.add("modal__main-item");

    const itemName = document.createElement("p");
    itemName.classList.add("modal__main-item-name");
    itemName.textContent = name;

    const itemText = document.createElement("p");
    itemText.classList.add("modal__main-item-text");
    itemText.textContent = text;

    item.append(itemName, itemText);

    infoCosts.append(item);
  }
  createItem("APR", "0%");
  createItem("Interest", "£0");
  createItem("Total", "£89.00");

  mainContent.append(costs, infoCosts);

  const footerContent = document.createElement("div");
  footerContent.classList.add("modal__footer");

  const hr1 = document.createElement("hr");
  hr1.classList.add("modal__footer-hr1");

  const modalButton = document.createElement("button");
  modalButton.classList.add("modal__footer-button");
  modalButton.textContent = "Confirm to checkout";
  modalButton.addEventListener("click", function () {
    container.remove();
  });

  footerContent.append(hr1, modalButton);

  modalWindow.append(headerContent, mainContent, footerContent);

  container.append(modalWindow);
  document.querySelector("body").append(container);
}
