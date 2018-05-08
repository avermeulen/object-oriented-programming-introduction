class Car {
  private started: boolean = false;
  private _currentSpeed: number = 0;

  start(){
      this.started = true;
  }

  stop(){
      this.started = false;
      this._currentSpeed = 0;
  }

  accelerateBy(increase : number) : void{
    if (this.started){
      this._currentSpeed += increase;
    }
  }

  get currentSpeed () : number{
    return this._currentSpeed;
  }
}
