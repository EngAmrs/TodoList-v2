import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteTodosComponent } from './favourite-todos.component';

describe('FavouriteTodosComponent', () => {
  let component: FavouriteTodosComponent;
  let fixture: ComponentFixture<FavouriteTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
