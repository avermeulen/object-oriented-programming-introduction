class GrasmerePlazaKiosk extends PlazaKioskBase {

    get description(): string{
        return "Grasmere Toll Plaza";
    };

    charge(category: string): number {
        let valueToCharge = 0;
        if (category === "one"){
            valueToCharge = 9;
        }
        else if (category === "two"){
            valueToCharge = 24;
        }
        else if (category === "three"){
            valueToCharge = 28;
        }
        else if (category === "four"){
            valueToCharge = 36;
        }
        this.chargeVehicle(valueToCharge);
        return valueToCharge;
    }
}
