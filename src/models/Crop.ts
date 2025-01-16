export class Crop {
    commonName : string
    scientificName : string
    category : string
    fieldName : string
    season : string
    image : string

    constructor(commonName: string, scientificName: string, category: string, fieldName: string, season: string, image: string) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.category = category;
        this.fieldName = fieldName;
        this.season = season;
        this.image = image
    }
}