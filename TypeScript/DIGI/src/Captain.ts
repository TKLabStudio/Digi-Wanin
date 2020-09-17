import { FlyingSuit } from "./FlyingSuit";

export class Captain extends FlyingSuit {
  fly(): string {
    return "Caps" + this.useWing();
  }
}
