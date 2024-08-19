import {Injectable} from '@angular/core';
import {ConstantsService} from "./constants.service";
import { HttpClient } from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private encryptionKey!: string;

  constructor(private constantsService: ConstantsService, private http: HttpClient) {}

  async fetchEncryptionKey(): Promise<void> {
    try {
      this.encryptionKey = await firstValueFrom(this.http.get(
          this.constantsService.getApiEncryptionKeyEndpoint(), {responseType: 'text'}
        )
      );
      this.validateBase64(this.encryptionKey);
    } catch (error) {
      console.error('Failed to fetch encryption key', error);
      throw new Error('Failed to fetch encryption key');
    }
  }

  getEncryptionKey(): string {
    if (!this.encryptionKey) {
      throw new Error('Encryption key not fetched');
    }
    return this.encryptionKey;
  }

  private validateBase64(key: string): void {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    if (!base64Regex.test(key)) {
      throw new Error('Invalid Base64 string');
    }
  }

}
