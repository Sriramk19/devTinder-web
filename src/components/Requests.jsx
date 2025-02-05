import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);
  const [showbuttons, setShowButtons] = useState(true);
  console.log("Redux requests state:", requests);
  console.log("working");

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

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
  if (requests.length === 0)
    return <h1 className="flex justify-center my-10">No Requests Found</h1>;
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
            className=" flex justify-betwee items-center m-4 p-4 rounded-lg  bg-primary-content w-3/6 mx-auto "
          >
            <div className="w-1/6 flex justify-center">
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className=" mx-4 w-2/6 flex justify-center">
              <h2 className="font-bold text-lg ">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className=" mx-4 w-3/6 flex justify-center">
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
            </div>
            {/* <div class="flex justify-between items-center p-4 space-x-4 bg-gray-200">
              <div class="bg-blue-500 p-6 text-white rounded-lg w-1/3 text-center">
                Box 1
              </div>
              <div class="bg-green-500 p-6 text-white rounded-lg w-1/3 text-center">
                Box 2
              </div>
              <div class="bg-red-500 p-6 text-white rounded-lg w-1/3 text-center">
                Box 3
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
export default Requests;
