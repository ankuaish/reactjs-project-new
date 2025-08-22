import Navbar from "./Navbar";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import PageNotFound from "./PageNotFound";
import UserList from "./UserList";
import "./header.css";
import UserDetail from "./UserDetail";

function App() {
  return (
    <>
      <Routes>
        {/* 1. Basic Routing  */}

        {/* 2. LayOut routing  */}

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 3. Optional Segment */}

          <Route path="/users/list?" element={<UserList />} />

          {/* 4. Dynamic Routing  */}

          <Route path="/users/:id/:name?" element={<UserDetail />} />

          {/* 5. Route Prefix  */}

          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/login" element={<Login />} />
              {/* <Route path="/in/user/signup" element={<Signup />} />
              <Route path="/in/user/password" element={<ForgotPassword />} /> */}
            </Route>
          </Route>
        </Route>

        {/* 6. Nested Routing  */}

        <Route path="/college" element={<College />}>
          {/* 7. Index Routing */}
          <Route index element={<Student />} />

          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Details />} />
        </Route>

        {/* 8. Page Not Found 404 & Redirecting  */}

        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
}

export default App;
