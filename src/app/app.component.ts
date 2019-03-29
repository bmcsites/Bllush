import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { StoryData } from '../shared/modules/stories.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  data: StoryData[];
  shownData: StoryData[];
  currentIndex: number;
  isMobile: boolean;
  lastClickDirection: string;
  @ViewChild('sWidContainer') elementView: ElementRef;
  @HostListener('window:resize')
  onResize() {
    // check view size on resize.
    const tempState = this.isMobile;
    this.isMobile = this.elementView.nativeElement.offsetWidth < 720;
    if (tempState !== this.isMobile) {
      this.changeData('next');
    }
  }

  constructor(private appService: AppService) {
    // reset parameters
    this.isMobile = false;
    this.currentIndex = -1;
    this.lastClickDirection = 'next';
  }

  ngAfterViewInit() {
    // check if width is under 720
    this.isMobile = this.elementView.nativeElement.offsetWidth < 720 ;
    // call load data.
    this.loadData();
  }

  // load data
  loadData() {
    // load data from service that handel's http calls.
    this.appService.getSuggestions().subscribe((data: StoryData[]) => {
        if (data) {
          // load specific data.
          this.data = data;
          // load items to the shownData;
          this.changeData('next');
        }
      },
      err => {
        console.log('err:::', err);
      });
  }

  // changing the data when event invoked
  changeData(dir: string) {
    // check if there's data
    if (this.data.length > 0) {
      // reset data in the shownData variable
      this.shownData = [];
      // check how many items will be added to the shownData
      const shownItemsAmount = this.isMobile ? 1 : 2;
      // loop and call the getItem to add the items to the list
      for (let i = 0; i < shownItemsAmount; i++) {
        this.getItem(dir);
      }
    } else {
      console.log('no data');
    }
  }

  // push next or previous item to the shownData by the currentIndex variable and the direction parameter.
  getItem(dir: string) {
    // check for direction change to update index when not in mobile
    if (!this.isMobile && this.lastClickDirection !== dir) {
      this.currentIndex = dir === 'next' ? ++this.currentIndex : --this.currentIndex;
    }

    // check direction and act accordingly
    if (dir === 'next') {
      // check the index and update it according to data list
      this.currentIndex = (this.currentIndex < this.data.length - 1 && this.currentIndex !== -1) ? this.currentIndex + 1 : 0;
      this.lastClickDirection = 'next';
    } else {
      // check the index and update it according to data list
      this.currentIndex = this.currentIndex - 1 >= 0 ? this.currentIndex - 1 : this.data.length - 1;
      this.lastClickDirection = 'pre';
    }

    // push selected data item to shownData;
    this.shownData.push(this.data[this.currentIndex]);
  }

  navigateTo(url: string) {
    window.location.href = url;
  }
}
