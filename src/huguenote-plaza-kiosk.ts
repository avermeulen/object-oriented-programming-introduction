class HuguenotePlazaKiosk extends PlazaKioskBase {

    get description(): string{
        return "Huguenote Toll Plaza";
    };

    charge(category: string): number {
        let valueToCharge = 0;
        if (category === "one"){
            valueToCharge = 18;
        }
        else if (category === "two"){
            valueToCharge = 47;
        }
        else if (category === "three"){
            valueToCharge = 73;
        }
        else if (category === "four"){
            valueToCharge = 118;
        }
        this.chargeVehicle(valueToCharge);
        return valueToCharge;
    }    
}