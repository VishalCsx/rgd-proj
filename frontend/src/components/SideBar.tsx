import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div>
      <nav>
        <div className="m-1 bg-black">
          <div>RGD modern Acadamy</div>
          <div>
            <ul>
              <li>
                <Link to="/">DashBoard</Link>
              </li>
              <li>
                <Link to="/students">Student</Link>
              </li>
              <li>
                <Link to="/fee-management">Fee Management</Link>
              </li>
              <li>
                <Link to="/staff-management">Staff</Link>
              </li>

              <li>
                <Link to="/expense-management">Expenses</Link>
              </li>
              <li>
                <Link to="/result">Result</Link>
              </li>
              <li>
                <Link to="/sign-out">Sign out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
