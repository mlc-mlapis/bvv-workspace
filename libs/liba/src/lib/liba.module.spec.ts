import { async, TestBed } from '@angular/core/testing';
import { LibaModule } from './liba.module';

describe('LibaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibaModule).toBeDefined();
  });
});
