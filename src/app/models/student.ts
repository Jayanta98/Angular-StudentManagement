import { Status } from './status';
export class StudentRegister {
  //when student data to be register
  public referenceNo: number
  public name: string;
  public fatherName: string;
  public motherName: string;

  public domicileState: string;
  public picture: any;
  public aadhaarNo: string;

  public dateOfBirth: Date;
  public category: string;
  public pwd: CharacterData;

  public permanentAddress: string;
  public parentsOccupation: string;


  public mobileNoSms: string;
  public mobileNoFather: string;
  public mobileNoMother: string;

  public mobileNoStudent: string;
  public emailId: string;
  public localAddress: string;

  public localAddressGuardian: string;
  public mobileNoLocalGuardian: string;

  public passingOutYear10: number;
  public passingOutYear11: number;
  public passingOutYear12: number;

  public school10: string;
  public school11: string;
  public school12: string;

  public schoolAddress10: string;
  public schoolAddress11: string;
  public schoolAddress12: string;

  public gradePer10: number;
  public gradePer11: number;
  public gradePer12: number;

  public pastNeetMarks: number;
  public pastNeetAir: number;
  public pastNeetAsr: number;


  public pastNeetAttempts: number;
  public pastNeetRemarks: string;


  public medium: string;
  public demoCard: string;
  public counsellor: string;
  public counsellorName: string;
  public date: Date;
}

export class StudentsCount extends Status {
  public studentsCount: number;
}

export class StudentListDto extends Status {
  //when student data to be fetched
  public studentList: StudentRegister[];
}

export class StudentDto extends Status {
  public student: StudentRegister
}
