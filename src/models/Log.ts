export class Log {
    logId:string;
    date:string;
    detail:string;
    image:string;
    StaffValuesList:any;
    fieldValuesList:any;
    constructor(logId:string, date:string, detail:string, image:string, StaffValuesList:any, fieldValuesList:any) {
        this.logId = logId;
        this.date = date;
        this.detail = detail;
        this.image = image;
        this.StaffValuesList = StaffValuesList;
        this.fieldValuesList = fieldValuesList;
    }
}