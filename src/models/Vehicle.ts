export class Vehicle {
    licensePlateNum : string;
    remarks : string;
    category : string;
    fuelTypedName : string;
    status : string;
    staffName : string;

    constructor(licensePlateNum: string, remarks: string, category: string, fuelTypedName: string, status: string, staffName: string) {
        this.licensePlateNum = licensePlateNum;
        this.remarks = remarks;
        this.category = category;
        this.fuelTypedName = fuelTypedName;
        this.status = status;
        this.staffName = staffName;
    }
}