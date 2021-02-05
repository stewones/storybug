import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherOptions } from '@org/another';

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {}

@Injectable()
export class SomeService {
  text = 'abc';
  constructor(public options: AnotherOptions) {}
}
