export class StudentRegister {
  //when student data to be register
  public name: string;
  public fatherName: string;
  public motherName: string;

  public domicileState: String;
  public picture: File;
  public aadhaarNo: String;

  public dateOfBirth: Date;
  public category: String;
  public pwd: CharacterData;

  public permanentAddress: String;
  public parentsOccupation: String;


  public mobileNoSms: String;
  public mobileNoFather: String;
  public mobileNoMother: String;

  public mobileNoStudent: String;
  public emailId: String;
  public localAddress: String;

  public localAddressGuardian: String;
  public mobileNoLocalGuardian: String;

  public passingOutYear10: Number;
  public passingOutYear11: Number;
  public passingOutYear12: Number;

  public school10: String;
  public school11: String;
  public school12: String;

  public schoolAddress10: String;
  public schoolAddress11: String;
  public schoolAddress12: String;

  public gradePer10: Number;
  public gradePer11: Number;
  public gradePer12: Number;

  public pastNeetMarks: Number;
  public pastNeetAir: Number;
  public pastNeetAsr: Number;


  public pastNeetAttempts: Number;
  public pastNeetRemarks: String;


  public medium: String;
  public demoCard: String;
}

export class StudentsCount {
  public studentsCount: number;
  public statusCode: string;
  public statusMessage: string;
}
export class StudentSaved {
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

export class StudentList {
  //when student data to be fetched
  public studentList: StudentSaved[];
  public statusCode: string;
  public statusMessage: string;
}
