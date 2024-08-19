import { RoomPluralPipe } from './room-plural.pipe';
import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';

describe('RoomPluralPipe', () => {
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useValue: {
            currentLang: 'en'
          }
        }
      ]
    });

    translateService = TestBed.inject(TranslateService);
  });

  it('create an instance', () => {
    const pipe = new RoomPluralPipe(translateService);
    expect(pipe).toBeTruthy();
  });

  it('should return "Room" for 1 room in English', () => {
    const pipe = new RoomPluralPipe(translateService);
    translateService.currentLang = 'en';
    expect(pipe.transform(1)).toBe('Room');
  });

  it('should return "Rooms" for multiple rooms in English', () => {
    const pipe = new RoomPluralPipe(translateService);
    translateService.currentLang = 'en';
    expect(pipe.transform(2)).toBe('Rooms');
  });

  it('should return "Pokój" for 1 room in Polish', () => {
    const pipe = new RoomPluralPipe(translateService);
    translateService.currentLang = 'pl';
    expect(pipe.transform(1)).toBe('Pokój');
  });

  it('should return "Pokoje" for multiple rooms in Polish', () => {
    const pipe = new RoomPluralPipe(translateService);
    translateService.currentLang = 'pl';
    expect(pipe.transform(2)).toBe('Pokoje');
  });
});
