import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterLayout from './Pages/RegisterLayout';
import routes from './routes';

function App() {
  return (
    <Suspense>
      <Routes>

        <Route element={<RegisterLayout />}>
          {
            routes.map((item, index) => (
              <Route
                path={item.path}
                key={index}
                exact={`${item.exact}`}
                strict={item.strict}
                name={item.name}
                element={item.component}
              />
            ))
          }

        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
