function handleToggle(button, dropdown, items, openClass) {
  button.addEventListener("click", function () {
    let isExpanded = button.getAttribute("aria-expanded") === "true";


    dropdown.classList.toggle(openClass);

    if (isExpanded) {
      button.setAttribute("aria-expanded", "false");
      button.focus();
    } else {
      button.setAttribute("aria-expanded", "true");
      items[0].focus();
    }
  });

  // Add event listener for the Escape key
  document.addEventListener("keydown", function (event) {
    if (dropdown.classList.contains(openClass)) {
      if (event.key === "Escape") {
        button.setAttribute("aria-expanded", "false");
        button.focus();
        dropdown.classList.remove(openClass);
      } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        focusNextItem(items);
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        focusPreviousItem(items);
      }
    }
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      button.setAttribute("aria-expanded", "false");
      dropdown.classList.remove(openClass);
    }
  });

  function focusNextItem(items) {
    const focusedItem = document.activeElement;
    const index = Array.from(items).indexOf(focusedItem);

    if (index < items.length - 1) {
      items[index + 1].focus();
    } else {
      items[0].focus();
    }
  }

  function focusPreviousItem(items) {
    const focusedItem = document.activeElement;
    const index = Array.from(items).indexOf(focusedItem);

    if (index > 0) {
      items[index - 1].focus();
    } else {
      items[items.length - 1].focus();
    }
  }
}

// Usage for the bell element
let bell = document.querySelector(".notifyButton");
let bellDrop = document.querySelector(".drop");
const bellItems = bellDrop.querySelectorAll('[role="menuitem"]');
handleToggle(bell, bellDrop, bellItems, "dropOpen");

// Usage for the info element
let info = document.querySelector(".storename");
let infoTab = document.querySelector(".storeTab");
const infoItems = infoTab.querySelectorAll('[role="menuitem"]');
handleToggle(info, infoTab, infoItems, "tabOpen");


// // Usage for the Setup element


let setupButton = document.getElementById('setupButton');
let setupStep = document.getElementById('setupStep');



setupButton.addEventListener('click', function () {
    let isShown = setupButton.getAttribute("aria-expanded") === "true";
    
    const stepItems = setupStep.querySelectorAll('[role="menuitem"]');

    setupStep.classList.toggle('show');

    if (isShown) {
        setupButton.setAttribute("aria-expanded", "false");
        setupButton.focus();
      } else {
        setupButton.setAttribute("aria-expanded", "true");
        stepItems[0].focus();
        // console.log(stepItems[0].focus())
      }
    // Toggle rotation class for the SVG inside setupButton
    let arrowIcon = setupButton.querySelector('svg');
    arrowIcon.classList.toggle('rotate180');

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && setupStep.classList.contains('show')) {
          setupButton.setAttribute('aria-expanded', 'false');
          setupButton.focus();
          setupStep.classList.remove('show');
        }

        // Handle arrow key navigation
        if (setupStep.classList.contains('show')) {
            const stepItems = setupStep.querySelectorAll('[role="menuitem"]');
            let focusedIndex = Array.from(stepItems).indexOf(document.activeElement);
      
            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
              event.preventDefault(); // Prevent scrolling on ArrowDown
              let nextIndex = (focusedIndex + 1) % stepItems.length;
              stepItems[nextIndex].focus();
            } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
              event.preventDefault(); // Prevent scrolling on ArrowUp
              let prevIndex = (focusedIndex - 1 + stepItems.length) % stepItems.length;
              stepItems[prevIndex].focus();
            }
          }


      });

  
});


