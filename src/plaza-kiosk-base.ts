abstract class PlazaKioskBase implements PlazaKiosk{
    private _dailyTotal:number = 0;

    private _dailyVehicleCount:number = 0;

    protected chargeVehicle(price : number){
        this._dailyTotal += price;
        this._dailyVehicleCount++;
    }
    
    get dailyTotal(): number{
        return this._dailyTotal;
    };

    get dailyVehicleCount(): number{
        return this._dailyVehicleCount;
    };

    abstract description : string;
    abstract charge(category: string): number

}