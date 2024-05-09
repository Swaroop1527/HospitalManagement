import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonService } from 'src/app/services/common.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-head-office',
  templateUrl: './head-office.component.html',
  styleUrls: ['./head-office.component.less']
})
export class HeadOfficeComponent {

  selectedValue = null;
  isVisible: boolean = false;
  showDeleteConfirmationModal = false;
  selectedDataIndex: number | null = null;
  deleteIndex: number | null = null;

  headOfficeForm: FormGroup;
  constructor(private fb: FormBuilder,
    public _commonService: CommonService, private communicationService: CommunicationService, private nzMessageService: NzMessageService) {
    this.headOfficeForm = this.fb.group({
      headOfficeName: ['', [Validators.required]],
      pinCode: [, [Validators.required, Validators.pattern('^\\d{6}$')]],
      // mobileNo: [, [Validators.required, Validators.pattern('^\\d{10}$')]],
      address: ['', [Validators.required]],
      website: ['', [Validators.required, Validators.pattern('^(http(s)?:\/\/)?([\\w-]+\\.)+[\\w-]+(\/[\\w- .\/?%&=]*)?$')]],
      email: ['', [Validators.email, Validators.required]],
    });
    console.log("window.location", window.location)
  };

  ngOnInit(): void {
    this.getProductList();
    this.getAllHeadOffices();

  };

  submitForm(): void {
    if (this.headOfficeForm.valid) {
      const headOfficeFormList = {
        headOfficeName: this.headOfficeForm.value.headOfficeName,
        pincode: this.headOfficeForm.value.pinCode,
        // mobileNo: this.headOfficeForm.value.mobileNo,
        address: this.headOfficeForm.value.address,
        website: this.headOfficeForm.value.website,
        email: this.headOfficeForm.value.email,
        // id: '1134EB06-A112-4D85-441C-08DC6E9580DB'
      };

      if (this.selectedDataIndex !== undefined && this.selectedDataIndex !== null) {
        this.communicationService.UpdateHeadOffice(headOfficeFormList).subscribe((data: any) => {
          if (data) {
            this.getAllHeadOffices();
          }

          console.log('returnned data', data);
        })
        this._commonService.headOfficeFormData[this.selectedDataIndex] = headOfficeFormList;
      } else {
        this._commonService.headOfficeFormData.push(headOfficeFormList);
      }

      this.headOfficeForm.reset();
      this.selectedDataIndex = null;
      this.isVisible = false;
    } else {
      console.log("Error occurred")
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.headOfficeForm.reset();
  }

  // deleteData(index: number) {
  //   console.log("delete", index)
  //   this._commonService.headOfficeFormData.splice(index, 1);
  // }

  getProductList() {
    this.communicationService.getHeadOfficeData().subscribe((data: any) => {
      this._commonService.headOfficeFormData = data;
      console.log(this._commonService.headOfficeFormData = data)
    })
  };

  showEditModel(index: number): void {

    const selectedData = this.getAllheadOfficeList[index];
    this.headOfficeForm.patchValue(selectedData);
    this.selectedDataIndex = index;
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.headOfficeForm.reset();
  }


  //using api

  getAllheadOfficeList: any;
  public getAllHeadOffices() {
    this.communicationService.getAllHeadOffices().subscribe((data: any) => {
      this.getAllheadOfficeList = data.result;
    })
  }


  public addHeadOffice(headOfficeData: any) {
    this.headOfficeForm.reset();
    this.communicationService.addHeadOffice(headOfficeData).subscribe((data: any) => {
      this.getAllHeadOffices();
    });
  }

  public deleteHeadOffice(index: number) {
    const headOfficeIdToDelete = this.getAllheadOfficeList[index].id;
    this.communicationService.deleteHeadOffice(headOfficeIdToDelete).subscribe(() => {
      this.getAllHeadOffices();
    });
  }






}

