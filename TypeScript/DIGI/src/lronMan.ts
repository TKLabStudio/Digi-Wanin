import { FlyingObject } from "./FlyingObject";

export class IronMan implements FlyingObject {
  m_Name: string = null;

  constructor(name: string) {
    this.m_Name = name;
  }

  // sayHi(): void {
  //   console.log(this.m_Name);
  //   return;
  // }
  get name(): string {
    //
    return this.m_Name;
  }
  set name(name: string) {
    //修改
    this.m_Name = name;
  }

  sayHi(): string {
    return "Name:" + this.m_Name;
  }
  static isIronMan(hero: any): boolean {
    return hero instanceof IronMan;
  }

  fly(): string {
    return "B";
  }
}
