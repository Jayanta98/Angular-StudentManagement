import { Status } from './status';

export class EmployeeLogin{
    public employeeId: number;
    public password: string;
}

export class EmployeeLoginStatus extends Status{
    public employeeId: number;
    public name: string;
    public password: string;
}

export class EmployeeStatus extends Status{
    public employeeId: number
    public name: string
    public emailId: string
    public mobileNo: string
}