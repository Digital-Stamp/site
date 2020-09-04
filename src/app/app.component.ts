import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  public dotList = [
    {
      size: 'xl',
      color: 'red'
    },
    {
      size: 'xl',
      color: 'pink'
    },
    {
      size: 'lg',
      color: 'orange'
    },
    {
      size: 'lg',
      color: 'pink'
    },
    {
      size: 'lg',
      color: 'purple'
    },
    {
      size: 'md',
      color: 'purple'
    },
    {
      size: 'md',
      color: 'green'
    },
    {
      size: 'sm',
      color: 'pink'
    },
    {
      size: 'sm',
      color: 'green'
    },
    {
      size: 'sm',
      color: 'orange'
    },
    {
      size: 'sm',
      color: 'red'
    },
    {
      size: 'sm',
      color: 'green'
    },
    {
      size: 'sm',
      color: 'orange'
    },
    {
      size: 'sm',
      color: 'pink'
    },
    {
      size: 'xs',
      color: 'purple'
    },
    {
      size: 'xs',
      color: 'green'
    },
    {
      size: 'xs',
      color: 'purple'
    },
    {
      size: 'xs',
      color: 'red'
    },
    {
      size: 'xs',
      color: 'pink'
    },
    {
      size: 'xs',
      color: 'purple'
    },
    {
      size: 'xs',
      color: 'green'
    },
    {
      size: 'xs',
      color: 'purple'
    },
    {
      size: 'xs',
      color: 'red'
    },
    {
      size: 'xs',
      color: 'pink'
    }
  ];

  public getPosition(): object {
    const height = window.innerHeight;
    const width = window.innerWidth;

    return {
      top: `${this.randomNumber(0, height)}px`,
      left: `${this.randomNumber(0, width)}px`
    };
  }

  private randomNumber(
    min: number,
    max: number
  ): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
