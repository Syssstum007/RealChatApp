// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/home/Home";


function App() {
 

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
			{/* <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster /> */}
      <Home />
		</div>
  )
}

export default App
