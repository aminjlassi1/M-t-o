// src/app/weather/weather.component.ts
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city: string = 'Tunis'; // Valeur par défaut
  weatherData: any;
  cities: string[] = [
    'Tunis',
    'Paris',
    'New York',
    'London',
    'Tokyo',
    'Berlin',
  ]; // Liste de villes

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  // Fonction pour obtenir la météo pour la ville sélectionnée
  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Weather data:', data);
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      },
    });
  }

  // Fonction pour gérer le changement de ville
  onCityChange(): void {
    this.getWeather(this.city);
  }
}
