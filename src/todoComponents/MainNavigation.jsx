import { Link } from "react-router-dom";
import "./MainNavigation.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
