import { IronMan } from "./lronMan";

export class HulkBuster extends IronMan {
  constructor(name: string) {
    super(name);
    this.m_Name = "Dr." + name;
  }

  sayHi(): string {
    return "Hello " + this.m_Name;
  }
}
