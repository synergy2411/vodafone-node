import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  exportToExcel(jsonData : any[], fileName : string){
    // WorkSheet
    const workSheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    // WorkBook
    const workBook : XLSX.WorkBook = { Sheets :{ 'users' : workSheet }, SheetNames : ["users"] }
    // Write
    const exlbuffer : any = XLSX.write(workBook, { type : "array", bookType : "xlsx"})

    this.saveFile(exlbuffer, fileName)
  }

  private saveFile(buffer : any, fileName : string){
    const blob : Blob = new Blob([buffer])
    FileSaver.saveAs(blob, fileName+".xlsx")
  }

}
