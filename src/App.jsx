import {Routes,Route} from 'react-router'
import NavBar from './components/NavBar/NavBar'
import SignUpForm from './components/SignUpForm/SignUpForm';
import './app.css'

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
      <h1>Hello, friend!</h1>
    </>
  );
};

export default App;

