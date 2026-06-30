import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector:"contact-page",
  templateUrl: "./contact-page.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPage implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle("Contact Page");
    this.meta.updateTag({name: "description", content: "meta-description contact page"});
  }
}
