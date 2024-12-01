import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  private apiKey = '66aad5737316c5cfabd8c7c6ada40b5b';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`; // Langue : français
    return this.http.get<any>(url);
  }
}
