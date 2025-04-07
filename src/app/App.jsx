
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/CourseList/Header';
import { Body } from '../components/CourseList/Body';
import './App.css';
import { Footer } from '../components/CourseList/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="rtl">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;