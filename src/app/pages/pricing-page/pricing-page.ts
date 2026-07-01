import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector:"pricing-page",
  imports: [],
  templateUrl: "./pricing-page.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if(isPlatformBrowser(this.platform))
    // {
    //   document.title="Pricing Page browser";

    // }
    // else{
    //   this.title.setTitle("Pricing Page server");
    //   this.meta.updateTag({name: "description", content: "meta-description pricing page"});
    // }
    this.title.setTitle("Pricing Page server");
      this.meta.updateTag({name: "description", content: "meta-description pricing page"});
  }
}
