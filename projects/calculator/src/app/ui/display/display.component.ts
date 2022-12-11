import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent {
  operations$;
  results$;

  constructor(private core: CoreService) {
    this.results$ = this.core.result.pipe(
      map((rs) => this.core.formatOperations(rs))
    );
    this.operations$ = this.core.operations;
  }
}
