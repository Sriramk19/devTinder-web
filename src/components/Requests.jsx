import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  console.log("Redux requests state:", requests);
  console.log("working");
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {}
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  console.log(requests);
  if (!requests) return;
  if (requests.length === 0) return <h1>No Requests Found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="text-xl  text-white"> Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, age, photoUrl, about, gender } =
          request.fromUserId;
        console.log(request.fromUserId);
        return (
          <div
            key={_id}
            className=" flex justify-betwee items-center m-4 p-4 rounded-lg  bg-primary-content w-1/3 mx-auto "
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
            <div>
              <button className="btn btn-primary mx-2">Accept</button>
              <button className="btn btn-secondary mx-2">Reject</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Requests;
