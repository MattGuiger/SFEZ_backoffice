import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  title:string = "Step #3 Tags";

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    this.router.navigateByUrl('/forms/ngx/description', { relativeTo: this.route.parent, skipLocationChange: true });
}

cancel() {
    this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
}

}
