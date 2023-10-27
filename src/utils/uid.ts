import { Guid } from "@microsoft/sp-core-library";

const uid = (): string => {
  return Guid.newGuid().toString();
};

export { uid };

