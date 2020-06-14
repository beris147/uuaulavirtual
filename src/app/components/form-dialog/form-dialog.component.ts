import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SithecConfig } from 'src/app/components/form-dialog/sithec.config.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
    selector: 'app-form-dialog',
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

    settings: any;
    tool: string;

    fnOnClickButton = (event) => {};
    fnOnOpenTableChange = (event) => {};
    fnOnClickInitFilter = (event) => {};
    fnOnClickFormButton = (event) => {};

    fnOnKeyup = (event) => {};
    fnOnSubmit = (event, ref) => {};
    fnOnChange = (event, settings) => {};

    fnOnClickSavebutton = (event) => {};

    title : string = null;
    message : string = null;

    constructor(
        @Inject(MAT_DIALOG_DATA)  public data : SithecConfig,
        public dialogRef: MatDialogRef<FormDialogComponent>
    ) { 
        //Disable close on click outside of the dialog
        this.dialogRef.disableClose = true;
        Object.keys(data).map(k => {
            this[k] = data[k];
        })
    }

    ngOnInit(): void { 
    }

    closeDialog(state? : number) { this.dialogRef.close(state) };
}
