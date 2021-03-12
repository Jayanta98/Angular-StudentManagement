import { Status } from './status';
export class AdmissionDto{
    public referenceNo: number
    public academicYear: string
    public batch: string
    public classs: string
    public idCard: string
    public name: string
    public bag: string
    public module: string
    public scholarship: number
    public installments: number
    public amountPaid: number
    public rollNo: number
    public date: Date
}

export class AdmissionStatus extends Status{
    public rollNo: number
}

export class AdmissionDtoStatus extends Status{
    public admissionDto: AdmissionDto
}

export class IdDto extends Status{
    public academicYear: string
    public batch: string
    public classs: string
    public name: string
    public rollNo: number
    public picture: any
    public fatherName: string
    public mobileNo: string
    public address: string
}