import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeletedTodosComponent } from './compeleted-todos.component';

describe('CompeletedTodosComponent', () => {
  let component: CompeletedTodosComponent;
  let fixture: ComponentFixture<CompeletedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompeletedTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompeletedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
