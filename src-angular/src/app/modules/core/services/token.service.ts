import {Injectable} from '@angular/core';
import {jwtDecode} from "jwt-decode";
import {EncryptionService} from "./encryption.service";
import {ConstantsService} from "./constants.service";


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN_KEY = 'auth_token';

  constructor(private encryptionService: EncryptionService,
              private constantsService: ConstantsService) {
  }

  async encrypt(data: string): Promise<string> {
    // await this.encryptionService.fetchEncryptionKey();

    const key = await this.getKey(this.constantsService.getCryptoKey());
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv
      },
      key,
      encodedData
    );
    const combined = new Uint8Array(iv.length + encryptedData.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(encryptedData), iv.length);
    return this.arrayBufferToBase64(combined.buffer);
  }

  private async getKey(key: string): Promise<CryptoKey> {
    const rawKey = Uint8Array.from(atob(key), c => c.charCodeAt(0));
    return window.crypto.subtle.importKey(
      'raw',
      rawKey,
      {name: 'AES-GCM'},
      false,
      ['encrypt', 'decrypt']
    );
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRolesFromToken(token: string): string[] {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.roles || [];
    } catch (error) {
      console.error('Failed to decode token and extract roles', error);
      return [];
    }
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      const now = Date.now() / 1000;
      console.log('Token expiration:', decoded.exp, 'Current time:', now);
      return decoded.exp < now;
    } catch (error) {
      console.error('Failed to decode token', error);
      return true;
    }
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getUsernameFromToken(token: string): string | null {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.sub || null;
    } catch (error) {
      console.error('Failed to decode token and extract username', error);
      return null;
    }
  }

}
