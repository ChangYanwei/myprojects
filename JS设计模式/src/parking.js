class Car {
  constructor(number) {
    this.number = number;
  }
}

class Park {
  constructor(floors) {
    this.floors = floors;
    this.camera = new Camera();
    this.screen = new Screen();

    this.carList = {}
  }

  in(car) {
    //通过摄像头获取信息
    let info = this.camera.shot(car);
    //停到某个停车位
    let i = parseInt(Math.random() * 100 + 1);
    let place = this.floors[0].places[i];
    
  }

  out(car) {

  }

  emptyNum() { //得出每层的空余车位
    return this.floors.map(floor => {
      return `${floor.index}层还有${floor.emptyPlaceNum()}个空余车位`
    }).join('\n')
  }
}

class Floor {
  constructor(index, places) {
    this.index = index;
    this.places = places || []; //该层总共有多少个停车位
  }

  emptyPlaceNum() { //该层的空余车位
    let num = 0;
    this.places.forEach(p => {
      if (p.isEmpty) {
        num++;
      }
    })
    return num;
  }
}

//车位
class ParkLot {
  constructor() {
    this.isEmpty = true;
  }

  in() {
    this.isEmpty = false;
  }

  out() {
    this.isEmpty = true;
  }

}

//摄像头
class Camera {
  shot(car) {
    return {
      num:car.num,
      inTime: Date.now()
    }
  }

}

//出口显示屏
class Screen {
  show(car,inTime) {
    console.log('车牌号',car.number);
    console.log('停留时间',Date.now() - inTime);
  }
}
