import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubServiceComponent } from './github-service.component';

describe('GithubServiceComponent', () => {
  let component: GithubServiceComponent;
  let fixture: ComponentFixture<GithubServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
