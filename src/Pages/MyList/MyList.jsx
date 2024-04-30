import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [mylists, setMylists] = useState([]);

  useEffect(() => {
    fetch(`https://trip-trackers-server.vercel.app/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMylists(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://trip-trackers-server.vercel.app/mylist/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Tourist spot has been deleted.",
                icon: "success",
              });
              const remaining = mylists.filter((mylist) => mylist._id == id);
              setMylists(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="lg:mx-10 min-h-[calc(100vh-338px)]">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="hidden md:block">No.</th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>Average</th>
              <th className="hidden md:block">Seasonality</th>
              <th className="px-2 md:px-4">Update</th>
              <th className="px-2 md:px-4">Delete</th>
            </tr>
          </thead>
          {mylists.map((mylist, idx) => (
            <tbody key={mylist._id}>
              <tr>
                <th className="hidden md:block">{idx}</th>
                <td>{mylist.touristsSpotName}</td>
                <td>{mylist.countryName}</td>
                <td>{mylist.averageCost}</td>
                <td className="hidden md:block mt-3">{mylist.seasonality}</td>
                <td className="px-2 md:px-4">
                  <Link to={`/updatetouristspot/${mylist._id}`}
                    className="btn bg-[#43BA7F]"
                  >
                    <MdEdit color="white" />
                  </Link>
                </td>
                <td className="px-2 md:px-4">
                  <button
                    onClick={() => handleDelete(mylist._id)}
                    className="btn bg-red-600"
                  >
                    <MdDeleteForever color="white" />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyList;
