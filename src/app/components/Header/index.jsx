import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-800">
        <div className="border-b border-gray-600">
          <div className="mx-[175px] flex flex-col md:flex-row items-start md:items-center justify-between py-2 px-4">
            <div className="flex items-start justify-center">
              <p className="text-gray-300 text-sm leading-9 md:leading-10">World Wide Completely Free Returns and Shipping</p>
            </div>
            <nav className="flex items-end flex-col">
              <ul className="flex items-end">
                <li className="mr-4 pr-4 border-r border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FontAwesomeIcon icon={faPhone} className="mr-1 w-4 h-4" />
                    +012 3456 789
                  </a>
                </li>
                <li className="mr-4 pr-4 border-r border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FontAwesomeIcon icon={faPhone} className="mr-1 w-4 h-4" />
                    demo@example.com
                  </a>
                </li>
                <li className="mr-4 pr-4 border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FontAwesomeIcon icon={faPhone} className="mr-1 w-4 h-4" />
                 Account
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      
      </header>
    </div>
  );
};

export default Header;
