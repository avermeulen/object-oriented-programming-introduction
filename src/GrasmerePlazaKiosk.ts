import { PlazaKiosk } from "./PlazaKiosk";

class GrasmerePlazaKiosk extends PlazaKioskBase {
    
    charge(category: string): void {
        if (category === "one"){
            this.chargeVehicle(9);
        }
        else if (category === "two"){
            this.chargeVehicle(24);
            
        }
        else if (category === "three"){
            this.chargeVehicle(28);
        }
        else if (category === "four"){
            this.chargeVehicle(36);
        }
    }

}