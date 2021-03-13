import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mt-wizard-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
})

export class DescriptionComponent implements OnInit {
    title = 'STEP #4 Tell Us What Makes You Unique';
    description: string;
    form: any;
    companyId: any;
    descriptionFormData = new FormGroup({
        description: new FormControl('', Validators.required)
    });

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        let vendroData = JSON.parse(localStorage.getItem('vendroData'));
        if (vendroData && vendroData.description) {
            this.descriptionFormData.patchValue({ "description": vendroData.description });
        }
        this.route.params.subscribe(params => {
            this.companyId = +params['id'];
        });
    }

    onSubmit() {
        let vendroData = JSON.parse(localStorage.getItem('vendroData'));
        vendroData.description = this.descriptionFormData.value.description;
        localStorage.setItem('vendroData', JSON.stringify(vendroData));

        localStorage.setItem('descriptionFormData', JSON.stringify(this.descriptionFormData.value));
        this.router.navigateByUrl('/forms/ngx/schedule', { relativeTo: this.route.parent, skipLocationChange: true });
    }

    cancel() {
        this.router.navigateByUrl('/forms/ngx/tags', { relativeTo: this.route.parent, skipLocationChange: true });
    }
}