import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  title: string = "Step #3 Tags";
  tagsFormData = new FormGroup({
    tags: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let vendroData = JSON.parse(localStorage.getItem('vendroData'));
    if(vendroData && vendroData.tags){
      this.tagsFormData.patchValue({"tags":vendroData.tags});
    }
  }

  onSubmit() {
    localStorage.setItem('tagsFormData', JSON.stringify(this.tagsFormData.value));
    this.router.navigateByUrl('/forms/ngx/description', { relativeTo: this.route.parent, skipLocationChange: true });
  }

  cancel() {
    this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
  }

}
