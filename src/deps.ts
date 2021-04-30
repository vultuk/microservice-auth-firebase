import admin from 'firebase/app';
import * as authAdmin from 'firebase-admin';

import 'firebase/auth';

export type Auth = admin.auth.Auth;
export type AuthAdministration = authAdmin.auth.Auth;
export const Admin = admin;
export const AuthAdmin = authAdmin;
