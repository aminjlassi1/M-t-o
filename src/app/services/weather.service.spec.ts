import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch weather data', () => {
    const dummyData = {
      main: {
        temp: 25,
        humidity: 50,
      },
      weather: [
        {
          description: 'clear sky',
        },
      ],
    };

    service.getWeather(36.8065, 10.1815).subscribe((data) => {
      expect(data.main.temp).toBe(25);
      expect(data.weather[0].description).toBe('clear sky');
    });

    const req = httpMock.expectOne(
      'https://api.openweathermap.org/data/2.5/weather?lat=36.8065&lon=10.1815&appid=YOUR_API_KEY&units=metric'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
