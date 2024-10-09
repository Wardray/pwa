import { ClassConstructor } from "class-transformer";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// export interface LifeCycleStore {
// }
export class LifeCycleStore {
  init?(navigate?: NavigateFunction | undefined): void;
  dispose?: () => void;
}
export const useStore = <S extends LifeCycleStore>(
  storeConstructor: ClassConstructor<S>
) => {
  const [store] = React.useState(new storeConstructor());
  const navigate = useNavigate();
  React.useEffect(() => {
    store?.init?.(navigate);
    return () => {
      store?.dispose?.();
    };
  }, []);
  return store;
};
