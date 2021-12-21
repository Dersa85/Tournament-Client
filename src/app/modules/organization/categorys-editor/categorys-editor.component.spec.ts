import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysEditorComponent } from './categorys-editor.component';

describe('CategorysEditorComponent', () => {
  let component: CategorysEditorComponent;
  let fixture: ComponentFixture<CategorysEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
