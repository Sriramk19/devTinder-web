import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addconnections } from "../utils/connectionSlice";
const Connections = () => {
  // /user/connections
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fechConnection = async () => {
    try {
      console.log("Enterd");
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addconnections(res.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fechConnection();
  }, []);

  if (!connections) return;
  if (connections.length === 0)
    return <h1 className=" text-center my-10 text-lg">No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-xl  text-white">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, age, photoUrl, about, gender } =
          connection;
        return (
          <div
            key={_id}
            className=" flex m-4 p-4 rounded-lg  bg-primary-content w-1/2 mx-auto "
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl ">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
