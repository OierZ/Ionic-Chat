import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { ChatsPage } from '../pages/chats/chats';
import { AccountPage } from '../pages/account/account';
import { ChatViewPage } from '../pages/chat-view/chat-view';

import { AuthProvider } from '../providers/auth-provider/auth-provider';
import { ChatsProvider } from '../providers/chats-provider/chats-provider';
import { UserProvider } from '../providers/user-provider/user-provider';
import { UtilProvider } from '../providers/utils';

export const firebaseConfig = {
  apiKey: "AIzaSyDwiNheARSamE4B4N-YnFc6zLLZ7xKJgjk",
  authDomain: "ionichat-914ca.firebaseapp.com",
  databaseURL: "https://ionichat-914ca.firebaseio.com",
  projectId: "ionichat-914ca",
  storageBucket: "ionichat-914ca.appspot.com",
  messagingSenderId: "315290250758"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    ChatViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    UsersPage,
    ChatsPage,
    AccountPage,
    ChatViewPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider, ChatsProvider, UserProvider, UtilProvider, Storage]
})
export class AppModule { }
