import SignUp from "./components/SignUp";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Route, Routes,Navigate } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Toaster />

      </div>
    </>
  );
}
export default App;
