import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnDestroy{

  operations = "";
  results = "";

  destroy: Subject<void>  = new Subject<void>();



  constructor(private core: CoreService){}

  ngOnInit(): void {
    this.core.operations.pipe(takeUntil(this.destroy)).subscribe(ops=>this.operations = ops);
    this.core.result.pipe(takeUntil(this.destroy)).subscribe(rs=>this.results = this.core.formatOperations(rs));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
