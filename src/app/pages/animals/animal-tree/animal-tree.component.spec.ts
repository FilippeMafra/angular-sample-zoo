import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTreeComponent } from './animal-tree.component';

describe('AnimalTreeComponent', () => {
  let component: AnimalTreeComponent;
  let fixture: ComponentFixture<AnimalTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
