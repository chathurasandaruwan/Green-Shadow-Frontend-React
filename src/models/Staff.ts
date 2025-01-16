export class Staff {
    firstName: string;
    lastName: string;
    email: string;
    contactNo: string;
    DOB: string;
    dateOfJoining: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    address5: string;
    gender: string;
    designation: string;
    role: string;

    constructor(firstName:string,lastName:string,email:string,contactNo:string,DOB:string,dateOfJoining:string,address1:string,address2:string,address3:string,address4:string,address5:string,gender:string,designation:string,role:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNo = contactNo;
        this.DOB = DOB;
        this.dateOfJoining = dateOfJoining;
        this.address1 = address1;
        this.address2 = address2;
        this.address3 = address3;
        this.address4 = address4;
        this.address5 = address5;
        this.gender = gender;
        this.designation = designation;
        this.role = role;
    }
}