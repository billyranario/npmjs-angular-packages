import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from "sweetalert2";
import { ToastOptions } from "./sweet-toast.config";

@Injectable({
  providedIn: 'root',
})

export class SweetToastService {
  show(params: SweetAlertOptions): void {
    Swal.fire({
      title: params.title,
      text: params.text,
      icon: params.icon || ToastOptions.icon,
      position: params.position || ToastOptions.position,
      timer: params.timer || ToastOptions.timer,
      showConfirmButton:
        params.showConfirmButton || ToastOptions.showConfirmButton,
      showCloseButton: params.showCloseButton || ToastOptions.showCloseButton,
      width: params.width || ToastOptions.width,
      customClass: params.customClass || ToastOptions.customClass,
      footer: params.footer || undefined,
      template: params.template || undefined,
      backdrop: params.backdrop || undefined,
      toast: params.toast || undefined,
      target: params.target || undefined,
      input: params.input || undefined,
      inputLabel: params.inputLabel || undefined,
      inputPlaceholder: params.inputPlaceholder || undefined,
      inputValue: params.inputValue || undefined,
      inputOptions: params.inputOptions || undefined,
      inputAutoFocus: params.inputAutoFocus || undefined,
      inputAutoTrim: params.inputAutoTrim || undefined,
      inputAttributes: params.inputAttributes || undefined,
      inputValidator: params.inputValidator || undefined,
      returnInputValueOnDeny: params.returnInputValueOnDeny || undefined,
      validationMessage: params.validationMessage || undefined,
      showDenyButton: params.showDenyButton || undefined,
      denyButtonText: params.denyButtonText || undefined,
      denyButtonColor: params.denyButtonColor || undefined,
      denyButtonAriaLabel: params.denyButtonAriaLabel || undefined,
      heightAuto: params.heightAuto || undefined,
      allowOutsideClick: params.allowOutsideClick || undefined,
      allowEscapeKey: params.allowEscapeKey || undefined,
      allowEnterKey: params.allowEnterKey || undefined,
      stopKeydownPropagation: params.stopKeydownPropagation || undefined,
      keydownListenerCapture: params.keydownListenerCapture || undefined,
      buttonsStyling: params.buttonsStyling || undefined,
      reverseButtons: params.reverseButtons || undefined,
      focusConfirm: params.focusConfirm || undefined,
      focusDeny: params.focusDeny || undefined,
      focusCancel: params.focusCancel || undefined,
      returnFocus: params.returnFocus || undefined,
      closeButtonHtml: params.closeButtonHtml || undefined,
      closeButtonAriaLabel: params.closeButtonAriaLabel || undefined,
      loaderHtml: params.loaderHtml || undefined,
      showLoaderOnConfirm: params.showLoaderOnConfirm || undefined,
      showLoaderOnDeny: params.showLoaderOnDeny || undefined,
      preConfirm: params.preConfirm || undefined,
      preDeny: params.preDeny || undefined,
      imageUrl: params.imageUrl || undefined,
      imageWidth: params.imageWidth || undefined,
      imageHeight: params.imageHeight || undefined,
      imageAlt: params.imageAlt || undefined,
      progressSteps: params.progressSteps || undefined,
      currentProgressStep: params.currentProgressStep || undefined,
      progressStepsDistance: params.progressStepsDistance || undefined,
      willOpen: params.willOpen || undefined,
      didOpen: params.didOpen || undefined,
      didRender: params.didRender || undefined,
      willClose: params.willClose || undefined,
      didClose: params.didClose || undefined,
      didDestroy: params.didDestroy || undefined,
      scrollbarPadding: params.scrollbarPadding || undefined,
    });
  }

  close() {
    Swal.close();
  }
}
