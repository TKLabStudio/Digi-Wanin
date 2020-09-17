import { FlyingObject } from "./FlyingObject";

export class Thor implements FlyingObject {
  fly(): string {
    return "T";
  }
}
