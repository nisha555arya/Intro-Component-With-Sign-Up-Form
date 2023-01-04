document.querySelectorAll("input").forEach((item) => {
    item.addEventListener("invalid", function (e) {
      const errorMsg = document.createElement("div");
      if (item.value === "" || item.value === null) {
        if (!item.nextElementSibling.classList.contains("error-msg"))
        item.insertAdjacentElement("afterend", errorMsg);
        errorMsg.innerHTML = `<img src="./images/icon-error.svg"/><em>${item.name} wrong</em>`;
        errorMsg.classList.add("error-msg");
      }
    });
    item.addEventListener("blur", function () {
      item.checkValidity();
    });
    item.addEventListener("focus", function (e) {
      if (item.nextElementSibling.classList.contains("error-msg"))
        item.nextElementSibling.remove();
    });
  });
  
  
  