import ReactDOM from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router';
import { AddProjectPage } from './pages/AddProjectPage';
import { StartPage } from './pages/StartPage';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={<StartPage />}
        ></Route>
        <Route
          path="/addproject"
          element={<AddProjectPage />}
        ></Route>
      </Routes>
    </MemoryRouter>
  </>
);
