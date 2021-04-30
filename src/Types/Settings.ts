import { AppOptions } from 'firebase-admin';

type AuthSettings = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

export type Settings = AuthSettings & AppOptions;
