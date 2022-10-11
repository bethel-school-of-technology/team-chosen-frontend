import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import BookDetail from './components/BookDetail';
import BookList from './components/BookList';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import { UserProvider } from './contexts/UserProvider';
import { BooksProvider } from './contexts/BooksProvider';
import { ReviewProvider } from './contexts/ReviewsProvider';
import EditReview from './components/EditReview';
import FeaturedBooks from './components/FeaturedBooks';

function App() {
  return (
    <BrowserRouter>
      
      <UserProvider>
      <ReviewProvider>
      <BooksProvider>
        
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={ <FeaturedBooks /> } />
              <Route path='/booklist' element={<BookList />}/>
              <Route path="/register" element={ <SignUp /> } />
              <Route path="/login" element={ <SignIn /> } />
              <Route path="/book/detail" element={<BookDetail />} />
              <Route path="/edit/:id" element={ <EditReview /> } />
              <Route path='/about' element={<About />} />
              <Route path="/profile/:id" element={ <UserProfile /> } />
            </Route>
          </Routes>

      </BooksProvider>
      </ReviewProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
