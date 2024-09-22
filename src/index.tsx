import "reflect-metadata";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routers/routers";
import { extensions } from "./core/extensions/extensions";
import { plainToClass, plainToInstance, Type } from "class-transformer";
import { IsString, validate } from "class-validator";
export enum SceneInstanceType {
  Solid = "Solid",
  Surfaces = "Surfaces",
}
export abstract class SceneInstance {
  abstract id: string;
  abstract type: SceneInstanceType;
}
export class SolidModel implements SceneInstance {
  type = SceneInstanceType.Solid;
  id: string = "";
}
export class SurfaceModel implements SceneInstance {
  type = SceneInstanceType.Surfaces;
  id: string = "";
}
export class SceneModel {
  @IsString()
  message!: string;
  @Type(() => SceneInstance, {
    discriminator: {
      property: "type",
      subTypes: [
        { value: SolidModel, name: SceneInstanceType.Solid },
        { value: SurfaceModel, name: SceneInstanceType.Surfaces },
      ],
    },
  })
  children: SceneInstance[] = [];
}
const model = plainToInstance(SceneModel, {
  message: "123",
  children: [
    { id: 0, type: "Solid" },
    { id: 1, type: "Surfaces" },
  ],
});
console.log(model);
validate(model).then((e) => console.log(e));

extensions();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
