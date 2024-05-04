import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import Header from './components/Header';
import Login from "../src/components/Login";
// import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard";
import Customerdetails from "./components/Incustomer";
import OrderPage from "./components/OrderPage";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./utils/userContext";
import OrderDetails from './components/orderdummy';
import AdminProfileForm from './components/sidebarcomponent/adminform';
import CustomerPage from "./components/CustomerPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/customer",
    element: <CustomerPage />,
  },
  {
    path: "/orderPage",
    element: <OrderPage />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
  {
    path: "/orders/:orderId",
    element: <OrderDetails />,
  },
  {
    path: "/adminregistrationform",
    element: <AdminProfileForm />,
  },
  {
    path: "/customerdetails",
    element: <OrderDetails />,
  },
]);

function App() {
  return (
      <UserContext>
      <div className="bg-blue-100 bg-opacity-60">
         {/* <Header />  */}
          {/* <Sidebar /> */}
          <RouterProvider router={appRouter} />
        </div>
    </UserContext>
  );
}

export default App;
