import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrrol-view',
  templateUrl: './scrrol-view.component.html',
  styleUrls: ['./scrrol-view.component.scss']
})
export class ScrrolViewComponent  {
  items: string[] = ['more', 'better', 'stronger','faster', 'safer'];
  visibleIndex: number = 0;

  constructor() { }

  @HostListener('wheel', ['$event'])
  onWheelScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      // Mouse tekerleği aşağı doğru hareket ettiğinde bir sonraki öğeyi görüntüle
      this.visibleIndex = (this.visibleIndex + 1) % this.items.length;
    } else {
      // Mouse tekerleği yukarı doğru hareket ettiğinde bir önceki öğeyi görüntüle
      this.visibleIndex = (this.visibleIndex - 1 + this.items.length) % this.items.length;
    }
  }
}
