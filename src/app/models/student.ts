export class StudentRegister{
    //when student data to be register
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public fatherName: string;
    public motherName: string;
    public mobileNo: string;
    public emailId: string;
    public aadhaarNo: string;
    public dateOfBirth: Date;
    public resAddress: string;
    public classNo: number;
    public scholarship: number;
    public bag: string;
    public module: string;
    public idCard: string;
    public medium: string;
    public lastSchool: string;
    public category: string;
}

export class StudentsCount{
    public studentsCount:number;
    public statusCode:string;
    public statusMessage:string;
}
export class StudentSaved{
    //when fetching student
    public registrationNo: number;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public fatherName: string;
    public motherName: string;
    public mobileNo: string;
    public emailId: string;
    public aadhaarNo: string;
    public dateOfBirth: Date;
    public resAddress: string;
    public classNo: number;
    public scholarship: number;
    public bag: string;
    public module: string;
    public idCard: string;
    public medium: string;
    public lastSchool: string;
    public registrationDate: Date;
    public rollNo: number;
    public category: string;
    public amountPaid: number;
}

export class StudentList{
    //when student data to be fetched
    public studentList: StudentSaved[];
    public statusCode:string;
    public statusMessage:string;
}
