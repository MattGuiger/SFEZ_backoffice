import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  title:string = "Step #3 Tags";
  tagsFormData = new FormGroup({
    tags: new FormControl('', Validators.required),
    // tags: new FormControl()        
    });

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("work"+ JSON.stringify(this.tagsFormData.value));
  const data = localStorage.setItem('tagsFormData', JSON.stringify(this.tagsFormData.value));
    this.router.navigateByUrl('/forms/ngx/description', { relativeTo: this.route.parent, skipLocationChange: true });
}

cancel() {
  this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
}

}
