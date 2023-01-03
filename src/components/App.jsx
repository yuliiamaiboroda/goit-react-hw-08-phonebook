import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import Loyaut from "./Loyaut/Loyaut";
import ContactPage from "pages/ContactPage/ContactPage";
import LoginPage from "pages/LoginPage/LoginPage";
import RegistrationPage from "pages/RegistrationPage/PegistrationPage";
import UserInfoPage from "pages/UserInfoPage/UserInfoPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import authOperations from "redux/auth/auth-operations";
import { selectisFetchingCurrent } from "redux/auth/auth-selectors";
import { RingLoader } from "react-spinners";
import { override } from "constantes/constantes";
import PageNotFound from "pages/NotFoundPage/NotFoundPage";


export function  App (){
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(authOperations.current())},[dispatch]);
  const isFetchingCurrent = useSelector(selectisFetchingCurrent); 

return(
  <> {isFetchingCurrent ? (<RingLoader
  color="#C0B1EC"
  cssOverride={override}
  />):(<Routes>
    <Route path="/" element={<Loyaut/>}>
      <Route path="/" element={<HomePage/>}/>
      <Route path="contacts" element={
        <PrivateRoute>
          <ContactPage/>
        </PrivateRoute>
        }/>
      <Route path="userInfo"  element={
        <PrivateRoute>
          <UserInfoPage/>
        </PrivateRoute>
          }/>
      <Route path="login" element={
        <PublicRoute>
          <LoginPage/>
        </PublicRoute>
          }/>
      <Route path="registration" element={
        <PublicRoute>
          <RegistrationPage/>
        </PublicRoute>
          }/>
        <Route path='404' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/404' />} />
        </Route>
      </Routes>)}
      </>
)
};
