function handleToggle(button, dropdown, items, openClass) {
    button.addEventListener("click", toggleDropdown);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", closeDropdownOutside);
  
    function toggleDropdown() {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      dropdown.classList.toggle(openClass);
  
      if (isExpanded) {
        closeDropdown();
        button.focus();
      } else {
        button.setAttribute("aria-expanded", "true");
        focusFirstItem();
      }
    }
  
    function handleKeydown(event) {
      if (dropdown.classList.contains(openClass)) {
        switch (event.key) {
          case "Escape":
            closeDropdown();
            button.focus();
            break;
          case "ArrowDown":
          case "ArrowRight":
            focusNextItem(items);
            break;
          case "ArrowUp":
          case "ArrowLeft":
            focusPreviousItem(items);
            break;
        }
      }
    }
  
    function closeDropdownOutside(event) {
      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        closeDropdown();
      }
    }
  
    function closeDropdown() {
      button.setAttribute("aria-expanded", "false");
      dropdown.classList.remove(openClass);
    }
  
    function focusNextItem(items) {
      const index = getNextIndex(items);
      items[index].focus();
    }
  
    function focusPreviousItem(items) {
      const index = getPreviousIndex(items);
      items[index].focus();
    }
  
    function getNextIndex(items) {
      const focusedItem = document.activeElement;
      const index = Array.from(items).indexOf(focusedItem);
      return index < items.length - 1 ? index + 1 : 0;
    }
  
    function getPreviousIndex(items) {
      const focusedItem = document.activeElement;
      const index = Array.from(items).indexOf(focusedItem);
      return index > 0 ? index - 1 : items.length - 1;
    }
  
    function focusFirstItem() {
      items[0].focus();
    }
  }
  
  // Usage for the bell element
  const bell = document.querySelector(".notifyButton");
  const bellDrop = document.querySelector(".drop");
  const bellItems = bellDrop.querySelectorAll('[role="menuitem"]');
  handleToggle(bell, bellDrop, bellItems, "dropOpen");
  
  // Usage for the info element
  const info = document.querySelector(".storename");
  const infoTab = document.querySelector(".storeTab");
  const infoItems = infoTab.querySelectorAll('[role="menuitem"]');
  handleToggle(info, infoTab, infoItems, "tabOpen");
  
  // Usage for the Setup element
  const setupButton = document.getElementById('setupButton');
  const setupStep = document.getElementById('setupStep');
  const setupStepItems = setupStep.querySelectorAll('[role="menuitem"]');
  handleToggle(setupButton, setupStep, setupStepItems, "show");
  