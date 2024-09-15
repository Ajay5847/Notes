import Trix from "trix";
import "@rails/actiontext";

Trix.config.toolbar.getDefaultHTML = toolbarDefaultContent;

// Set the default toolbar content when trix editor is embedded in a lzy loaded turbo frame.
// Ref: https://dev.to/konnorrogers/modifying-the-default-toolbar-in-trix-411b
//
// document.addEventListener('trix-initialize', updateToolbars, { once: true });

// function updateToolbars(event) {
//   const toolbars = document.querySelectorAll("trix-toolbar");
//   const html = Trix.config.toolbar.getDefaultHTML();
//   toolbars.forEach((toolbar) => {
//     toolbar.innerHTML = html;
//   }
// }

// Trix.config.textAttributes.inlineCode = {
//   tagName: "code",
//   inheritable: true,
// };

// Trix.trixAttributes.underline = {
//   styleProperty: "text-decoration",
// }

class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}

function innerHTML(alignment) {
  return `
    <slot></slot>
  `;
}

export class AlignLeftElement extends BaseElement {
  constructor() {
    super();

    this.shadowRoot.innerHTML = innerHTML("left");
  }
}

export class AlignCenterElement extends BaseElement {
  constructor() {
    super();

    this.shadowRoot.innerHTML = innerHTML("center");
  }
}

window.customElements.define("align-left", AlignLeftElement);
window.customElements.define("align-center", AlignCenterElement);

Trix.config.blockAttributes.alignLeft = {
  tagName: "align-left",
  parse: true,
  nestable: false,
  exclusive: false,
};

Trix.config.blockAttributes.alignCenter = {
  tagName: "align-center",
  parse: true,
  nestable: false,
  exclusive: false,
};

Trix.config.blockAttributes.hTwo = {
  tagName: "h2",
  parse: true,
  nestable: false,
  exclusive: true,
};

Trix.config.blockAttributes.hThree = {
  tagName: "h3",
  parse: true,
  nestable: false,
  exclusive: true,
};

Trix.config.blockAttributes.hFour = {
  tagName: "h4",
  parse: true,
  nestable: false,
  exclusive: true,
};

function toolbarDefaultContent() {
  const lang = Trix.config.lang;

  return `
    <div class="mb-6 flex justify-between gap-x-6 items-start">
      <div class="flex gap-x-2 md:gap-x-3 gap-y-2 flex-wrap">
        <div class="hidden isolate inline-flex rounded-md shadow-sm z-20">
          <div class="relative" x-data="{open: false}">
            <button
              x-on:click="open = !open"
              title="Heading"
              type="button"
              class="h-10 gap-x-2 relative inline-flex items-center rounded-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            >
              <span class="sr-only">Heading</span>
              <i class="ph-bold ph-text-h-one"></i>
              <span class="text-base">Heading</span>
              <i class="ph-bold ph-caret-down text-sm"></i>
            </button>
            <div
              x-show="open"
              x-transition.origin.top.left=""
              x-on:click.outside="open = !open"
              style="display: none"
              class="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-lg border border-gray-500 overflow-hidden z-20"
            >
              <button
                class="w-full h-10 gap-x-2 relative flex items-center bg-white px-2.5 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-lg md:text-2xl"
              >
                <i class="ph-bold ph-text-h-one w-6"></i>
                <span class="text-lg font-bold">Heading</span>
              </button>
              <button
                class="w-full h-10 gap-x-2 relative flex items-center bg-white px-2.5 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
              >
                <i class="ph-bold ph-text-h-two w-6"></i>
                <span class="text-base font-medium">Subheading</span>
              </button>
              <button
                class="w-full h-10 gap-x-2 relative flex items-center bg-white px-2.5 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-base"
              >
                <i class="ph-bold ph-text-t w-6"></i>
                <span class="text-base">Normal text</span>
              </button>
            </div>
          </div>
        </div>
        <div class="isolate inline-flex rounded-md shadow-sm">
          <button
            title="Heading 1"
            type="button"
            class="h-10 gap-x-2 relative inline-flex items-center rounded-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="hTwo"
          >
            <span class="sr-only">Heading 1</span>
            <i class="fa-solid fa-heading"></i>
          </button>
        </div>
        <div class="hidden isolate inline-flex rounded-md shadow-sm">
          <!-- Active state -->
          <button
            title="Align Left"
            type="button"
            class="h-10 gap-x-2 relative inline-flex items-center rounded-l-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="alignLeft"
          >
            <span class="sr-only">Align Left</span>
            <i class="fa-solid fa-align-left"></i>
          </button>
          <button
            title="Align Center"
            type="button"
            class="h-10 gap-x-2 relative -ml-px inline-flex items-center rounded-r-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="alignCenter"
          >
            <span class="sr-only">Align Center</span>
            <i class="fa-solid fa-align-center"></i>
          </button>
        </div>
        <div class="isolate inline-flex rounded-md shadow-sm">
          <button
            title="Bold"
            type="button"
            class="h-10 gap-x-2 relative inline-flex items-center rounded-l-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="bold"
            data-trix-key="b"
          >
            <span class="sr-only">Bold</span>
            <i class="fas fa-bold"></i>
          </button>
          <button
            title="Italic"
            type="button"
            class="h-10 gap-x-2 relative -ml-px inline-flex items-center bg-white rounded-r-md px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="italic"
            data-trix-key="i"
          >
            <span class="sr-only">Italic</span>
            <i class="fas fa-italic"></i>
          </button>
          <button
            title="Underline"
            type="button"
            class="hidden h-10 gap-x-2 relative -ml-px inline-flex items-center bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
          >
            <span class="sr-only">Underline</span>
            <i class="fas fa-strikethrough"></i>
          </button>
          <button
            title="Link"
            type="button"
            class="hidden h-10 gap-x-2 relative -ml-px inline-flex items-center rounded-r-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="href"
            data-trix-action="link"
            data-trix-key="k"
          >
            <span class="sr-only">Link</span>
            <i class="fas fa-link"></i>
          </button>
        </div>
        <div class="isolate inline-flex rounded-md shadow-sm">
          <button
            title="Numbered List"
            type="button"
            class="h-10 gap-x-2 relative inline-flex items-center rounded-l-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="number"
          >
            <span class="sr-only">Numbered List</span>
            <i class="fa-solid fa-list-ol"></i>
          </button>
          <button
            title="Bulleted List"
            type="button"
            class="h-10 gap-x-2 relative -ml-px inline-flex items-center rounded-r-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-attribute="bullet"
          >
            <span class="sr-only">Bulleted List</span>
            <i class="fa-solid fa-list"></i>
          </button>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="isolate inline-flex rounded-md shadow-sm">
          <!-- Disabled state -->
          <button
            disabled=""
            title="Undo"
            type="button"
            class="h-10 gap-x-2 relative inline-flex items-center rounded-l-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-action="undo"
            data-trix-key="z"
          >
            <span class="sr-only">Undo</span>
            <i class="fas fa-undo"></i>
          </button>
          <button
            title="Redo"
            type="button"
            class="h-10 gap-x-2 relative -ml-px inline-flex items-center rounded-r-md bg-white px-2.5 py-2.5 text-gray-800 ring-1 ring-inset ring-gray-500 hover:bg-gray-50 hover:text-gray-900 transition focus:z-10 text-base md:text-lg"
            data-trix-action="redo"
            data-trix-key="shift+z"
          >
            <span class="sr-only">Redo</span>
            <i class="fas fa-redo"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="trix-dialogs" data-trix-dialogs>
      <div
        class="trix-dialog trix-dialog--link -mt-4"
        data-trix-dialog="href"
        data-trix-dialog-attribute="href"
      >
        <div class="trix-dialog__link-fields">
          <input
            type="url"
            name="href"
            class="trix-input trix-input--dialog"
            placeholder="${lang.urlPlaceholder}"
            aria-label="${lang.url}"
            required
            data-trix-input
          />
          <div class="flex">
            <input
              type="button"
              class="rounded bg-graytw-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-graytw-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graytw-600"
              value="${lang.link}"
              data-trix-method="setAttribute"
            />
            <input
              type="button"
              class="ml-2 text-xs font-semibold text-graytw-900"
              value="${lang.unlink}"
              data-trix-method="removeAttribute"
            />
          </div>
        </div>
      </div>
    </div>
  `;
}
