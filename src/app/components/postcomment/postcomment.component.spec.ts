import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcommentComponent } from './postcomment.component';

describe('PostcommentComponent', () => {
  let component: PostcommentComponent;
  let fixture: ComponentFixture<PostcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
