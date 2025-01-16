export class Equipment {
    equipmentName: string;
    type: string;
    status: string;
    staffName: string;
    fieldName: string;

    constructor(equipmentName: string, type: string, status: string, staffName: string, fieldName: string) {
        this.equipmentName = equipmentName;
        this.type = type;
        this.status = status;
        this.staffName = staffName;
        this.fieldName = fieldName;
    }
}