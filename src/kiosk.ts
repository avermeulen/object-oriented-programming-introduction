class KioskConsole{
    private _kiosk: PlazaKiosk;
    
    private chargeBtn: any;
    private amountDueElem : any;
    private dailyTotalElem: any;
    private plazaDescriptionElem: any;

    constructor(kiosk : PlazaKiosk){
        this._kiosk = kiosk;
        this.chargeBtn = document.querySelector(".chargeBtn");
        this.amountDueElem = document.querySelector(".amountDue");
        this.dailyTotalElem = document.querySelector(".dailyTotal");
        this.plazaDescriptionElem = document.querySelector(".plazaDescription");
        this.plazaDescriptionElem.innerHTML = this._kiosk.description;
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

new KioskConsole(grasmerePlaza)