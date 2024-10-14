import { ClassConstructor } from "class-transformer";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Result } from "./result";
export class LifeCycleStore {
  navigate!: NavigateFunction;
  init = (navigate: NavigateFunction) => {
    this.navigate = navigate;
    this.initDependency?.();
  };
  dispose?: () => void;
  initDependency?(): any;
  mapOk = async (query: Promise<Result<any, any>>, property: string) => {
    //@ts-expect-error
    (await query).map((el) => (this[property] = el));
  };
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
export abstract class LifeCycleStoreFormState<V> extends LifeCycleStore {
  abstract viewModel: V;
  updateForm = (model: Partial<V>) => {
    //@ts-expect-error
    this.viewModel = Object.assign(this.viewModel, model);
  };
}
