import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./MyComponents/BookList";
import MyFooter from "./MyComponents/MyFooter";
import MyNavbar from "./MyComponents/MyNav";
import Welcome from "./MyComponents/Welcome";
import books1 from "./books/fantasy.json";
import books2 from "./books/history.json";
import books3 from "./books/horror.json";
import books4 from "./books/romance.json";
import books5 from "./books/scifi.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <Container className="pb-5">
        <h2 className="sectionTitle pt-5">Sezione Fantasy:</h2>
        <BookList books={books1} />
        <h2 className="sectionTitle pt-5">Sezione History:</h2>
        <BookList books={books2} />
        <h2 className="sectionTitle pt-5">Sezione Horror:</h2>
        <BookList books={books3} />
        <h2 className="sectionTitle pt-5">Sezione Romance:</h2>
        <BookList books={books4} />
        <h2 className="sectionTitle pt-5">Sezione Shi-fi:</h2>
        <BookList books={books5} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
