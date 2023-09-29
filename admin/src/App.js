import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import List1 from "./pages/list/List1";
import List2 from "./pages/list/List2";

import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import Single2 from "./pages/single/Single2";
import Single1 from "./pages/single/Single1";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List1 columns={userColumns} />
                  </ProtectedRoute>
                }
              />
             
            
          
           </Route>
           <Route
                path="/users/new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="اضافة مستخدم جديد"  />
                  </ProtectedRoute>
                }
              />
            <Route
                path="/users/:id"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
          
            
            </Route>
            <Route
                path="/hotels/:id"
                element={
                  <ProtectedRoute>
                    <Single2 />
                  </ProtectedRoute>
                }
              />
            <Route
                path="/hotels/new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />


            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List2 columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              
             
            </Route>
            <Route
                path="/rooms/:id"
                element={
                  <ProtectedRoute>
                    <Single1 />
                  </ProtectedRoute>
                }
              />
            <Route
                path="/rooms/new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
