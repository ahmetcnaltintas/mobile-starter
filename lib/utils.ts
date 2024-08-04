import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Token = SecureStore.getItem('my-jwt');

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${Token}`,
  }
});




