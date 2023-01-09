import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InlineImageComponent } from "./inline-image.component";

describe("InlineImageComponent", () => {
  let component: InlineImageComponent;
  let fixture: ComponentFixture<InlineImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineImageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InlineImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
