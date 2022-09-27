import { ParentWindowName } from "./adapter";

export const detectEmbeddedInSquadsIframe = (): boolean => {
  return (
    typeof window !== "undefined" &&
    window.parent !== window &&
    self !== top
  );
};
