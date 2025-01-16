export class Field {
    fieldName: string;
    extentSize: string;
    image1: string;
    image2: string;
    location: string;
    constructor(fieldName: string, extentSize: string, image1: string, image2: string, location: string) {
        this.fieldName = fieldName;
        this.extentSize = extentSize;
        this.image1 = image1;
        this.image2 = image2;
        this.location = location;
    }
}