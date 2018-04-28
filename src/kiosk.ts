
interface PlazaKiosk{
    charge(category : string) : number;
    dailyTotal : number;
    dailyVehicleCount : number;
}

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

    abstract charge(category: string): number
}

class GrasmerePlazaKiosk extends PlazaKioskBase {
    
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

class HuguenotePlazaKiosk extends PlazaKioskBase {
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

class KioskConsole{
    private _kiosk: PlazaKiosk;
    
    private chargeBtn: any;
    private amountDueElem : any;
    private dailyTotalElem: any;

    constructor(kiosk : PlazaKiosk){
        this._kiosk = kiosk;
        this.chargeBtn = document.querySelector(".chargeBtn");
        this.amountDueElem = document.querySelector(".amountDue");
        this.dailyTotalElem = document.querySelector(".dailyTotal");

        if (this.chargeBtn){
            this.chargeBtn.addEventListener('click', this.chargeVehicle);
        }
    }

    chargeVehicle = () => {
        if (this.amountDueElem && this.dailyTotalElem){
            this.amountDueElem.innerHTML = this._kiosk.charge(this.category()).toString();
            this.dailyTotalElem.innerHTML = this._kiosk.dailyTotal;
        }
    }

    category() : string {
        var checkedRadioBtn = document.querySelector("input[name='category']:checked");
        if (checkedRadioBtn){
            if (checkedRadioBtn.value){
                return checkedRadioBtn.value;
            }
        }
        return "";
    }
}

let huguenotePlaza = new HuguenotePlazaKiosk();
let grasmerePlaza = new GrasmerePlazaKiosk();

new KioskConsole(huguenotePlaza)