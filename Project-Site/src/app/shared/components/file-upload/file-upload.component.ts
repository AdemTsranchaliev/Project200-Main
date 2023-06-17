import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, ReplaySubject, forkJoin } from 'rxjs';

export interface FileEntry {
  name: string;
  extension: string;
  content: string;
  size: number;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  public progress: number;
  public message: string;
  public errorMessage: string;

  private readonly MAX_UPLOAD_SIZE = 10485760;

  @Input() isInternal: boolean;
  @Input() year: number;
  @Input() uploadedFilesCount: number = 0;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) {}

  private convertFile(file: File): Observable<FileEntry> {
    const result = new ReplaySubject<FileEntry>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => {
      var res: any = {
        name: file.name,
        size: file.size,
        extension: file.name.split('.').pop(),
        content: btoa(event.target.result.toString()),
      };
      result.next(res);
      result.complete();
    };
    return result;
  }

  public uploadFile = async (files: any) => {
    this.message = '';
    this.errorMessage = '';

    if (files.length === 0) {
      return;
    }

    if (files.length + this.uploadedFilesCount > 10) {
      this.errorMessage =
        'Максималния брой файлове, които може да добавите е 10.';
      return;
    }

    let filesToUpload: File[] = [].slice.call(files);

    let fileUploadSizeError: boolean = false;
    filesToUpload.forEach((file) => {
      if (file.size > this.MAX_UPLOAD_SIZE) {
        fileUploadSizeError = true;
      }
    });

    if (fileUploadSizeError) {
      this.errorMessage =
        'Размерът на всеки един файл не трябва да надвишава 10 MB';
      return;
    }

    var allObs = filesToUpload.map((f) => this.convertFile(f));
    forkJoin(allObs).subscribe((base64Array) => {
      let year = this.year;
      if (!this.isInternal) {
        year = 0;
      }

      this.http
        .post(
          '' + '/file',
          { files: base64Array, year: year, isInternal: this.isInternal },
          { reportProgress: true, observe: 'events', withCredentials: true }
        )
        .subscribe((event: any) => {
          if (event.type === HttpEventType.UploadProgress)
            this.progress = Math.round((100 * event.loaded) / event.total);
          else if (event.type === HttpEventType.Response) {
            this.message = 'Файловете бяха добавени успешно.';
            this.onUploadFinished.emit(event.body);
          }
        });
    });
  };
}
