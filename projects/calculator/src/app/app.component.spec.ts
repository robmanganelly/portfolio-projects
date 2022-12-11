import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NumbersComponent } from './ui/buttons/numbers/numbers.component';
import { SymbolsComponent } from './ui/buttons/symbols/symbols.component';
import { KeyboardComponent } from './ui/keyboard/keyboard.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NumbersComponent,
        SymbolsComponent,
        KeyboardComponent,
      ],
      imports: [BrowserModule, MaterialModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain(
  //     'calculator app is running!'
  //   );
  // });
});
