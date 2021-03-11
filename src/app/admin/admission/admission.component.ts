import { DialogService } from './../../services/dialog.service';
import { AdmissionDto } from './../../models/admission';
import { Component, OnInit } from '@angular/core';
import { StudentRegister } from 'src/app/models/student';
import { AccountService } from 'src/app/services/account.service';
import { AdmissionService } from 'src/app/services/admission.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  fileBlob: any;
  constructor(private studentService: StudentService,
    private admissionService: AdmissionService,
    private dialogService: DialogService) { }
  ngOnInit(): void {
  }


  imageSrc;
  sellersPermitFile: any;
  //base64s
  imageBase64String: string;
  //json
  finalJson = {};

  currentId: number = 0;
  public picked(event, field) {
    this.currentId = field;
    let file: File = event.target.files[0];
    this.sellersPermitFile = file;
    this.handleInputChange(file); //turn into base64
  }


  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    switch (id) {
      case 1:
        this.imageBase64String = base64result;
        break;
    }

    this.log();
  }

  log() {
    // for debug
    console.log(this.imageBase64String);
  }




  studentModel: StudentRegister = new StudentRegister();
  studentAdmission: StudentRegister = new StudentRegister();
  refRollNo: number;
  percentageScholarship: number;
  actualCourseFees: number;
  imageBlobUrl: string | ArrayBuffer

  offfer: number;
  finalFessPay: number;
  scholarshipFeesCal() {
    // alert(this.actualCourseFees + this.percentageScholarship);
    this.offfer = this.actualCourseFees * this.percentageScholarship / 100;
    this.finalFessPay = this.actualCourseFees - this.offfer;
    // alert("offer" + this.offfer);
    // alert("Pay" + this.finalFessPay);
  }
  selectionn: string;

  refSubmit() {
    alert("Submitted:  " + this.selectionn + " " + this.refRollNo)
    if (this.selectionn === "ref") {
      this.studentService.fetchStudent(this.refRollNo).subscribe(data => {
        if (data.statusCode === "SUCCESS") {
          this.studentModel = data.student
          //this.createImageFromBlob(this.studentModel.picture)
          alert(JSON.stringify(data.student))
        }
        else {
          alert(data.statusMessage)
        }

      })

    }
    else {
      this.studentService.getStudentByRollNo(this.refRollNo).subscribe(data => {
        if (data.statusCode === "SUCCESS") {
          this.studentModel = data.student
          this.dialogService.notify("Student Details", JSON.stringify(data.student))

        }
        else {
          this.dialogService.notify("Student Fetch Failed", data.statusMessage)
        }
      })
    }

  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var arrayBuffer = new ArrayBuffer(byteString.length);
    var _ia = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteString.length; i++) {
      _ia[i] = byteString.charCodeAt(i);
    }

    var dataView = new DataView(arrayBuffer);
    var blob = new Blob([dataView], { type: mimeString });
    console.log("blobb")
    return blob;
  }
  image: File;
  onFileSelected(event) {
    this.image = event.target.files[0]
    //this.studentModel.picture = event.target.files[0]
    /*let reader = new FileReader();
    let me = this
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
      //me.imageBlobUrl= reader.result.toString().split(',')[1];
      me.imageBlobUrl= reader.result
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    console.log(me.imageBlobUrl)
    this.studentModel.picture = this.dataURItoBlob(me.imageBlobUrl)
    alert(this.studentModel.picture)*/
    /*this.handleInputChange(event.target.files[0]);
    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: contentType });
      return blob;
    }
    console.log(this.studentModel.picture)
    if (event.target.value) {
      const file = event.target.files[0];
      const type = file.type;
      this.fileBlob = b64toBlob(this.imageBase64String);
      console.log(this.fileBlob)
      this.changeFile(file).then((base64: string): any => {
        console.log(base64);
        this.fileBlob = b64toBlob([base64], type);
        console.log(this.fileBlob)
      });
    } else alert('Nothing')*/
  }
  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  onSubmit() {
    alert(JSON.stringify(this.studentModel))

    let formData: FormData = new FormData();
    formData.append('image', this.image);
    formData.append('referenceNo', this.studentModel.referenceNo.toString());
    this.studentService.updateStudent(this.studentModel).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert(data.statusCode + " Note the Reference No: " + data.referenceNo)
      }
      else {
        alert(data.statusMessage)
      }
    })
    this.studentService.updateStudentPic(formData).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert(data.statusCode + " Note the Reference No: " + data.referenceNo)
      }
      else {
        alert(data.statusMessage)
      }
    })

    /*this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.studentService.updateStudent(this.studentModel).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert(data.statusCode + " Note the Reference No: " + data.referenceNo)
            }
            else {
              alert(data.statusMessage)
            }
          })

        }
      });*/

  }



  //AdmissionDTO acivites
  admissionDto: AdmissionDto = new AdmissionDto();

  refForAdmission: number;
  refAdmissionSubmit() {
    alert(this.refForAdmission);
    alert("admission called" + JSON.stringify(this.admissionDto));
    this.studentService.fetchStudent(this.refForAdmission).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.studentAdmission = data.student
        this.admissionDto.name = this.studentAdmission.name
        this.admissionDto.referenceNo = this.studentAdmission.referenceNo
        alert(JSON.stringify(data.student))
      }
      else {
        alert(data.statusMessage)
      }
    })
  }

  onAdmissionSubmit() {
    alert("admission called" + JSON.stringify(this.admissionDto));
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.admissionService.admission(this.admissionDto).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert("Roll No of Student : " + data.rollNo)
            }
            else {
              alert(data.statusMessage)
            }
          })

        }
      });

  }

  deleteAdmission(delRollNo: number) {
    alert("Admission Deletion " + delRollNo)
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.admissionService.deleteAdmission(delRollNo).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert("Deletion Succesful")
            }
            else {
              alert("Deletion Failed")
            }
          })

        }
      });

  }


  getRollNo: number
  updateAdmissionDto: AdmissionDto
  getAdmission() {
    this.admissionService.getAdmission(this.getRollNo).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        alert("Fetch Success"+JSON.stringify(data.admissionDto))
        this.updateAdmissionDto = data.admissionDto
      }
      else {
        alert("Fetch Failed")
      }
    })
  }

  updateAdmission() {
    alert("Confirm Admission Update for " + this.updateAdmissionDto.rollNo)
    this.dialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        if (confirmed) {
          this.admissionService.updateAdmission(this.updateAdmissionDto).subscribe(data => {
            if (data.statusCode === "SUCCESS") {
              alert("Update Success for student with roll number : " + data.rollNo)
            }
            else {
              alert("Updation Failed")
            }
          })
        }
      });

  }

  studentRollNo: number
  getStudentByRollNo() {
    this.studentService.getStudentByRollNo(this.studentRollNo).subscribe(data => {
      if (data.statusCode === "SUCCESS") {
        this.studentModel = data.student
        alert(JSON.stringify(data.student))
      }
      else {
        alert(data.statusMessage)
      }
    })
  }



}
