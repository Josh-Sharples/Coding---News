import { useEffect, useState, useContext } from "react";
import UserCard from "./UserCard";
import { fetchUsers } from "../../APICalls/ArticleAPIs";
import { LoadingContext } from "../Loading Components/LoadingContext";

export default function Users() {
  const [users, setUsers] = useState([]);

  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    fetchUsers().then(({ data }) => {
      setIsLoading(true)
      setUsers(data);
    });
  }, []);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-xl article-header mt-10">Users</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 outer-div">
        {users.map((user) => {
          return <UserCard key={user.username} user={user} />;
        })}
      </div>
    </>
  );
}
