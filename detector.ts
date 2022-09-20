import { ParentWindowName } from "./adapter";

export const detectEmbeddedInSquadsIframe = (): boolean => {
  return (
    typeof window !== "undefined" &&
    window.parent !== window &&
    window.parent.name === ParentWindowName
  );
};
