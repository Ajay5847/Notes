import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="trix"
export default class TrixController extends Controller {
  static UNUSED_TOOLBAR_CLASSES = [
    ".trix-button--icon-quote",
    ".trix-button--icon-code",
    ".trix-button--icon-decrease-nesting-level",
    ".trix-button--icon-increase-nesting-level",
    ".trix-button-group--file-tools"
  ];

  static TOOLBAR_BUTTON_ICONS = [
    { identifier: ".trix-button--icon-bold", icon: '<i class="fas fa-bold"></i>' },
    { identifier: ".trix-button--icon-italic", icon: '<i class="fas fa-italic"></i>' },
    { identifier: ".trix-button--icon-link", icon: '<i class="fas fa-link"></i>' },
    { identifier: ".trix-button--icon-strike", icon: '<i class="fas fa-strikethrough"></i>' },
    { identifier: ".trix-button--icon-heading-1", icon: '<i class="fa-solid fa-heading"></i>' },
    { identifier: ".trix-button--icon-bullet-list", icon: '<i class="fa-solid fa-list"></i>' },
    { identifier: ".trix-button--icon-number-list", icon: '<i class="fa-solid fa-list-ol"></i>' },
    { identifier: ".trix-button--icon-undo", icon: '<i class="fas fa-undo"></i>' },
    { identifier: ".trix-button--icon-redo", icon: '<i class="fas fa-redo"></i>' }
  ];

  connect() {
    addEventListener("trix-initialize", () => {
      // Rempve unused toolbar buttons
      TrixController.UNUSED_TOOLBAR_CLASSES.forEach((cls) => {
        const button = document.querySelector(cls);
        if (button) {
          button.remove();
        }
      });

      // Replace toolbar buttons with FontAwesome icons
      TrixController.TOOLBAR_BUTTON_ICONS.forEach((group) => {
        const button = document.querySelector(group.identifier);
        if (button) {
          button.innerHTML = group.icon;
        }
      });
    }, true);

    // Prevent file attachments
    addEventListener("trix-file-accept", function (e) {
      e.preventDefault();
    }, true);
  }
}