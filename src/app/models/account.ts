import { Status } from './status';
export class AccountDto{
    public transactionId: number;
    public amount: number;
    public dateTime:Date;
    public rollNo: number;
    public name: string;
}

export class AccountDtoStatus extends Status{
    public accountDto: AccountDto
}

export class AccountListStatus extends Status{
    public accountDtos: AccountDto[]
}