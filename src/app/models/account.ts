import { Status } from './status';
export class AccountDto{
    public transactionId: number;
    public amount: number;
    public dateTime:Date;
    public rollNo: number;
    public name: string;
    public fatherName: string;
    public paymentMethod: string;
    public address: string;
    public classs: string;
    public batch: string;
    public academicYear: string;
    public remarks:string;
}

export class AccountDtoStatus extends Status{
    public accountDto: AccountDto
}

export class AccountListStatus extends Status{
    public accountDtos: AccountDto[]
}
