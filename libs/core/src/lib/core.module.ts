import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherOptions } from '../../../another/src';

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {}

@Injectable()
export class SomeService {
  text = 'abc';
  constructor(public options: AnotherOptions) {}
}
