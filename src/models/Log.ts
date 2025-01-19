export class Log {
    logId:string;
    date:string;
    detail:string;
    image:string;
    StaffValuesList:any;
    fieldValuesList:any;
    cropValuesList:any;
    constructor(logId:string, date:string, detail:string, image:string, StaffValuesList:any, fieldValuesList:any ,cropValueList:any) {
        this.logId = logId;
        this.date = date;
        this.detail = detail;
        this.image = image;
        this.StaffValuesList = StaffValuesList;
        this.fieldValuesList = fieldValuesList;
        this.cropValuesList = cropValueList;
    }
}