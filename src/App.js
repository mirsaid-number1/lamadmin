import React,{useContext} from "react";
import Home from "./pages/home/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {QueryClient,QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools';
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { productInputs, userInputs } from "./formSource";
import './style/dark.scss';
import {useProvider} from "./context/context";
import { ShowDb } from "./context/second_context";
import SignUp from "./pages/signup/SignUp";
import CheckOut from "./hooks/firebase";
function App() {
  // const {darkMode} = useProvider();
  const {state} = ShowDb();
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <div className={state.darkmode ?  'app dark' : 'app'}>
      <Routes>
        <Route path="/">
          <Route index element={<CheckOut>
            <Home />
            </CheckOut>} />
          <Route path="login" element={<Login />}/> 
          <Route path="signup" element={<SignUp />} />
          <Route path="users">
            <Route index element={<CheckOut><List addWhat={'Add New User'}/></CheckOut>} />
            <Route path="new" element={<CheckOut><New inputs={userInputs} title="Add New User"/></CheckOut>}/> 
            <Route path=":userId" element={<CheckOut><Single /></CheckOut>}/>
          </Route> 
          <Route path="products">
            <Route index element={<CheckOut><List addWhat={'Add New Product'}/></CheckOut>} />
            <Route path="new" element={<CheckOut><New inputs={productInputs} title="Add New Product"/></CheckOut>}/> 
            <Route path=":productId" element={<CheckOut><Single /></CheckOut>}/>
          </Route>
        </Route>  
      </Routes>
    </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
