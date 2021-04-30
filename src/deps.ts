import 'firebase/auth';

import * as authAdmin from 'firebase-admin';
import admin from 'firebase/app';

export type Auth = admin.auth.Auth;
export type AuthAdministration = authAdmin.auth.Auth;
export const Admin = admin;
export const AuthAdmin = authAdmin;
