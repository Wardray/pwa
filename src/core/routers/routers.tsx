import { createBrowserRouter } from "react-router-dom";
import {
  AddContactsScreen,
  AddContactsScreenPath,
} from "../../features/add_contacts/add_contacts_screen";
import {
  ContactListPagePath,
  ContactListPageScreen,
} from "../../features/contact_list_page/contact_list_page_screen";
import {
  DetailPagePath,
  DetailPageScreen,
} from "../../features/detail_page/detail_page_screen";
import {
  LoginPagesPath,
  LoginPagesScreen,
} from "../../features/login_pages/login_pages_screen";
import {
  LoginVerificationPath,
  LoginVerificationScreen,
} from "../../features/login_verification/login_verification_screen";
import {
  SignInPagesPath,
  SignInPagesScreen,
} from "../../features/signIn_pages/signIn_pages_screen";
import {
  SignInVerificationPath,
  SignInVerificationScreen,
} from "../../features/signIn_verification/signIn_verification_screen";
import {
  SplashPath,
  SplashScreen,
} from "../../features/splash_screen/splash_screen";
export const router = createBrowserRouter([
  {
    path: AddContactsScreenPath,
    element: <AddContactsScreen />,
  },
  {
    path: ContactListPagePath,
    element: <ContactListPageScreen />,
  },
  {
    path: DetailPagePath,
    element: <DetailPageScreen />,
  },
  {
    path: LoginPagesPath,
    element: <LoginPagesScreen />,
  },
  {
    path: LoginVerificationPath,
    element: <LoginVerificationScreen />,
  },
  {
    path: SignInPagesPath,
    element: <SignInPagesScreen />,
  },
  {
    path: SignInVerificationPath,
    element: <SignInVerificationScreen />,
  },
  {
    path: SplashPath,
    element: <SplashScreen />,
  },
]);
