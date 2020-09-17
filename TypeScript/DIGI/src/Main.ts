import GameConfig from "./GameConfig";
import { IronMan } from "./lronMan";
import { HulkBuster } from "./HulkBuster";
import { FlyingObject } from "./FlyingObject";
import { Thor } from "./Thor";

class Main {
  constructor() {
    //根据IDE设置初始化引擎
    if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
    else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
    Laya["Physics"] && Laya["Physics"].enable();
    Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    Laya.stage.scaleMode = GameConfig.scaleMode;
    Laya.stage.screenMode = GameConfig.screenMode;
    Laya.stage.alignV = GameConfig.alignV;
    Laya.stage.alignH = GameConfig.alignH;
    //兼容微信不支持加载scene后缀场景
    Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

    //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
      Laya.enableDebugPanel();
    if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
      Laya["PhysicsDebugDraw"].enable();
    if (GameConfig.stat) Laya.Stat.show();
    Laya.alertGlobalError(true);

    //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    Laya.ResourceVersion.enable(
      "version.json",
      Laya.Handler.create(this, this.onVersionLoaded),
      Laya.ResourceVersion.FILENAME_VERSION
    );
  }

  onVersionLoaded(): void {
    //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    Laya.AtlasInfoManager.enable(
      "fileconfig.json",
      Laya.Handler.create(this, this.onConfigLoaded)
    );
  }

  onConfigLoaded(): void {
    //加载IDE指定的场景
    GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);

    let isDownload: boolean = this.isDownload();
    let u: undefined = undefined;
    //let u;
    let n: null = null;

    let anArray: any[] = ["a", 1];
    let aStringArray: string[] = ["a", "c", "s", "f", "g"];
    let aNumberArray: number[] = [1, 2, 3, 4, 5];
    let aNumber: number = aNumberArray[0];
    //foreach
    aNumberArray.forEach((aNumber: number) => {
      console.log(aNumber);
    });
    //for...of
    for (let aNumber of aNumberArray) {
      console.log(aNumber);
    }
    for (let i = 0; i < aNumberArray.length; i++) {
      console.log("index:" + i + " ,number:" + aNumberArray[i]);
    }
    for (let i = aNumberArray.length - 1; i > -1; i--) {
      console.log("index:" + i + " ,number:" + aNumberArray[i]);
    }

    aNumberArray.push(500);
    console.log(aNumberArray);

    aNumberArray.pop();
    console.log(aNumberArray);

    aNumberArray.unshift();
    console.log(aNumberArray);

    aStringArray.indexOf("c");
    console.log(aStringArray);

    aNumberArray.splice(1, 2);
    console.log(aNumberArray);

    aNumberArray.splice(1, 0, 400);
    console.log(aNumberArray);

    let a: number[][] = [];
    let row = 9;
    let col = 9;

    for (let i = 1; i <= row; i++) {
      a.push([]);
      for (let j = 1; j <= col; j++) {
        a[i - 1][j - 1] = i * j;
        console.log(a);
      }
    }

    let aNewArray: number[] = aNumberArray.splice(1, 3);
    console.log(aNewArray);

    console.log(aNumber);
    console.log("typeof u:" + typeof u);
    console.log("typeof n:" + typeof n);

    let ans: number = this.sum(2, 4);
    console.log(ans);

    this.printName("mosca");
    this.printName("hi", "mr.");

    // let ironman: IronMan = new IronMan("Me");
    // console.log(ironman.sayHi());

    let Hulk: HulkBuster = new HulkBuster("TK");
    console.log(Hulk.sayHi());

    let name: string = Hulk.name;
    Hulk.name = "Prnnar";
    console.log(Hulk.name);

    console.log(IronMan.isIronMan(Hulk));

    let air: FlyingObject[] = [];
    air.push(new Thor());
    air.push(new IronMan("TK"));

    air.forEach((air: FlyingObject) => {
      console.log(air.fly);
    });
  }
  public isDownload(): boolean {
    return true;
  }
  sum(x: number, y: number): number {
    return x + y;
  }
  //   printName(surname: string, title?: string): void {
  // 	  console.log("hi" + (title? title: "")+surname)
  //   }

  printName(surname: string, title: string = "Mr."): void {
    console.log("hi" + title + surname);
  }

  printFamily(father: string, mother: string, ...chilren: string[]): void {
    console.log(father);
    console.log(mother);
    if (chilren) {
      chilren.forEach((child: string) => {
        console.log(child);
      });
    }
    if (chilren.length === 0) {
      console.log("No Child");
    }
  }
}

let hello: string = "hi";
console.log(hello);

//激活启动类
new Main();
