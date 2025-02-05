import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useLocation } from "react-router-dom";

const UserCard = ({ user }) => {
  const isProfilePage = location.pathname === "/profile";
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };
  return (
    <div className="card bg-primary-content w-96 shadow-xl">
      <figure className="w-full h-80">
        <img src={photoUrl} alt="Profile Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}!</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>

        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary w-18 rounded-2xl"
            disabled={isProfilePage}
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary w-20 rounded-2xl"
            disabled={isProfilePage}
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
