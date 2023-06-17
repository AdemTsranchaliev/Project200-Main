import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, ReplaySubject, forkJoin } from 'rxjs';
import { FileEntry } from 'src/app/shared/components/file-upload/file-upload.component';
import { Studio } from 'src/app/shared/models/studio/studio.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  private readonly MAX_UPLOAD_SIZE = 10485760;

  @Input() model: Studio = new Studio();
  @Output() nextPageEvent = new EventEmitter<string>();
  @Output() previousPageEvent = new EventEmitter<string>();
  @Output() finishEvent = new EventEmitter();

  public errorMessage: string = '';

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  public nextPage() {
    this.nextPageEvent.next('');
  }

  public previousPage() {
    this.previousPageEvent.next('');
  }

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

  public send() {
    this.finishEvent.next();
  }

  public uploadFile = async (files: any) => {
    if (files.length === 0) {
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

    forkJoin(allObs).subscribe((base64Array: FileEntry[]) => {
      base64Array.forEach((x) => {
        if (!x.content.includes('.jpg')) this.model.images.push(x.content);
      });
      console.log(this.model.images);
    });
  };
}

export interface FileT {
  name: string;
  size: number;
  type: string;
  extension: string;
  content: ArrayBuffer;
}
