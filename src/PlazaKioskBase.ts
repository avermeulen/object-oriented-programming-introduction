abstract class PlazaKioskBase{
    private total:number = 0;
    private vehicleCount:number = 0;

    protected chargeVehicle(price : number){
        this.total += price;
        this.vehicleCount++;
    }
    
    get dailyTotal(): number{
        return this.total;
    };

    get dailyVehicleCount(): number{
        return this.vehicleCount;
    };

    abstract charge(category: string): void
}