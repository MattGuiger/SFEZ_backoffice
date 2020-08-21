import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../app.config';
import { AuthInterceptor } from "../AuthInterceptor";
import { Observable } from 'rxjs';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ErrorMessageService {

  private errors = new Subject<object[]>();

    constructor() { }

    public addErrors = (errors: object[]): void =>
        this.errors.next(errors);

    public getErrors = () =>
        this.errors.asObservable();
}

