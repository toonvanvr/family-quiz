import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  public readonly apiUrl = `http://localhost:4000/trpc`;
}
