declare module "autosize-input" {
  type AutosizeInputOptions = { minWidth?: boolean | string };
  type AutosizeInputCleanup = () => void;

  function autosizeInput(
    element: HTMLInputElement,
    options?: AutosizeInputOptions
  ): AutosizeInputCleanup;

  export = autosizeInput;
}
