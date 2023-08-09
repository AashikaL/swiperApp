import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1661676172038-377ab3d82a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1599194921977-f89d8bd0eefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  ];

  constructor() { }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }


}
