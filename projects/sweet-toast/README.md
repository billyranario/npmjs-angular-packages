# SweetToast

Sweet Toast is a package for toast notifications using SweetAlert2 for Angular. This package is build using typescript.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.


## Installation

You can install Sweet Toast using npm:

```shell
npm i @bjranario/sweet-toast sweetalert2
```

## Usage

import scss file in your main scss file
```scss
@import "node_modules/@bjranario/sweet-toast/src/lib/styles/sweet-toast.scss";
```

include `SweetToastModule` in your app.module.ts
```typescript
import { SweetToastModule } from "@bjranario/sweet-toast";

@NgModule({
  declarations: [],
  imports: [SweetToastModule], // <-- here
  bootstrap: [],
})
export class AppModule {}
```

to use the method, import `SweetToastService` to your component

```typescript
import { SweetToastService } from "@bjranario/sweet-toast";

const sweetToastService = new SweetToastService();

// Show a toast notification
SweetToastService.show({
  title: "Hello world!",
  text: "This is a toast notification",
  icon: "success",
});
```


## Options

The `SweetToastService` allows you to display toast notifications using SweetAlert2 with customizable options. Below are the available parameters you can pass to the `show` method of the `SweetToastService`:

- **title** (optional): The title of the toast notification, as HTML. (Default: `''`)

- **text** (optional): A description for the toast notification. (Default: `''`)

- **icon** (optional): The icon of the toast notification. Can be one of 'warning', 'error', 'success', 'info', 'question', or custom HTML content. (Default: `undefined`)

- **position** (optional): The position of the toast notification. (Default: 'top-end')

- **timer** (optional): Auto-close timer for the toast notification in milliseconds. (Default: `undefined`)

- **showConfirmButton** (optional): Whether to show the confirmation button. (Default: `true`)

- **showCloseButton** (optional): Whether to show the close button. (Default: `false`)

- **width** (optional): Popup width, including paddings. (Default: `undefined`)

- **customClass** (optional): A custom CSS class for the toast notification. (Default: `undefined`)

- **iconColor** (optional): Use this to change the color of the icon. (Default: `undefined`)

- **iconHtml** (optional): The custom HTML content for an icon. (Default: `undefined`)

- **footer** (optional): The footer of the toast notification, as HTML. (Default: `''`)

- **template** (optional): Declarative template for the toast notification. (Default: `undefined`)

- **backdrop** (optional): Whether to show a backdrop behind the toast notification. (Default: `true`)

- **toast** (optional): Whether the toast notification should be treated as a toast. (Default: `false`)

- **target** (optional): The container element for adding the toast notification. (Default: 'body')

- **input** (optional): Input field type, e.g., 'text', 'email', 'password', etc. (Default: `undefined`)

- **inputLabel** (optional): Input field label. (Default: `''`)

- **inputPlaceholder** (optional): Input field placeholder. (Default: `''`)

- **inputValue** (optional): Input field initial value. (Default: `undefined`)

- **inputOptions** (optional): Options for select or radio input types. (Default: `{}`)

- **inputAutoFocus** (optional): Whether to automatically focus the input field. (Default: `true`)

- **inputAutoTrim** (optional): Whether to automatically trim the input value. (Default: `true`)

- **inputAttributes** (optional): HTML input attributes. (Default: `{}`)

- **inputValidator** (optional): Validator function for the input field. (Default: `undefined`)

- **returnInputValueOnDeny** (optional): Whether to return the input value when denying. (Default: `false`)

- **validationMessage** (optional): A custom validation message for default validators. (Default: `undefined`)

- **showDenyButton** (optional): Whether to show the deny button. (Default: `false`)

- **denyButtonText** (optional): Text for the deny button. (Default: `'No'`)

- **denyButtonColor** (optional): Background color of the deny button. (Default: `undefined`)

- **denyButtonAriaLabel** (optional): Aria-label for the deny button. (Default: `''`)

- **heightAuto** (optional): Whether to adjust the body padding for scrollbars. (Default: `true`)

- **allowOutsideClick** (optional): Whether to allow dismissing by clicking outside. (Default: `true`)

- **allowEscapeKey** (optional): Whether to allow dismissing by pressing the Escape key. (Default: `true`)

- **allowEnterKey** (optional): Whether to allow confirming by pressing Enter or Space. (Default: `true`)

- **stopKeydownPropagation** (optional): Whether to stop keydown events propagation. (Default: `true`)

- **keydownListenerCapture** (optional): Whether to capture keydown events. (Default: `false`)

- **buttonsStyling** (optional): Whether to apply default button styling. (Default: `true`)

- **reverseButtons** (optional): Whether to invert default buttons' positions. (Default: `false`)

- **focusConfirm** (optional): Whether to focus the Confirm button by default. (Default: `true`)

- **focusDeny** (optional): Whether to focus the Deny button by default. (Default: `false`)

- **focusCancel** (optional): Whether to focus the Cancel button by default. (Default: `false`)

- **returnFocus** (optional): Whether to return focus to the invoking element after closing. (Default: `true`)

- **showCloseButton** (optional): Whether to show the close button. (Default: `false`)

- **closeButtonHtml** (optional): HTML content of the close button. (Default: `&times;`)

- **closeButtonAriaLabel** (optional): Aria-label for the close button. (Default: `'Close this dialog'`)

- **loaderHtml** (optional): HTML content for the loader. (Default: `''`)

- **showLoaderOnConfirm** (optional): Whether to show the loader on Confirm button click. (Default: `false`)

- **showLoaderOnDeny** (optional): Whether to show the loader on Deny button click. (Default: `false`)

- **preConfirm** (optional): Function to execute before confirming. (Default: `undefined`)

- **preDeny** (optional): Function to execute before denying. (Default: `undefined`)

- **imageUrl** (optional): URL or path to an image to display in the toast. (Default: `undefined`)

- **imageWidth** (optional): Width of the image. (Default: `undefined`)

- **imageHeight** (optional): Height of the image. (Default: `undefined`)

- **imageAlt** (optional): Alternative text for the custom image icon. (Default: `''`)

- **progressSteps** (optional): Progress steps for popup queues. (Default: `[]`)

- **currentProgressStep** (optional): Current active progress step. (Default: `undefined`)

- **progressStepsDistance** (optional): Distance between progress steps. (Default: `undefined`)

- **willOpen** (optional): Callback function to run before showing the popup. (Default: `undefined`)

- **didOpen** (optional): Callback function to run after showing the popup. (Default: `undefined`)

- **didRender** (optional): Callback function to run after updating the popup DOM. (Default: `undefined`)

- **willClose** (optional): Callback function to run before closing the popup. (Default: `undefined`)

- **didClose** (optional): Callback function to run after closing the popup. (Default: `undefined`)

- **didDestroy** (optional): Callback function to run after destroying the popup. (Default: `undefined`)

- **scrollbarPadding** (optional): Whether to adjust body padding when scrollbar is present. (Default: `true`)

For more details on each parameter and its usage, please refer to the SweetAlert2 documentation for `SweetAlertOptions` [here](https://sweetalert2.github.io/#sweetalertoptions).

## Contributing

Contributions are welcome. Please submit a PR or open an issue.

## License

This package is open-source and licensed under the MIT License.