declare module "autosize-input" {
  function autosizeInput(
    element: HTMLInputElement,
    options?: { minWidth?: boolean | string }
  ): void;
  export = autosizeInput;
}
