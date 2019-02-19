import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighLight]'
})
export class BasicHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'darkred';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
