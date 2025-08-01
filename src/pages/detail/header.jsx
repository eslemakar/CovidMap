import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft as Arrow } from "react-icons/md";
import HeaderLoader from "../../components/loader/header-loader";

const Header = () => {
  const { isLoading, data } = useSelector((store) => store);
  console.log("data:", data);
  return (
    <div className="flex justify-between iems-center">
      <Link className="bg-gray-400 py-2 px-2 pe-3 rounded-md hover:bg-gray-500 flex gap-2 items-center shadow">
        <Arrow />
        Geri
      </Link>

      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4 ">
            <h1>{data.country} </h1>
            <img src={data.flag?.png} alt={data.flag?.alt || "Bayrak"} />
          

          </div>
        )
      )}
    </div>
  );
};

export default Header;
