import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Vinyl Collector</h1>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
