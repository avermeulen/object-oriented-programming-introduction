import { PlazaKiosk } from "./PlazaKiosk";

class HuguenotePlazaKiosk extends PlazaKioskBase {
    
    charge(category: string): void {
        if (category === "one"){
            this.chargeVehicle(18);
        }
        else if (category === "two"){
            this.chargeVehicle(47);
            
        }
        else if (category === "three"){
            this.chargeVehicle(73);
        }
        else if (category === "four"){
            this.chargeVehicle(118);
        }
    }
    
}