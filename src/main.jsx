import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <App />
      </BrowserRouter>
  
)
