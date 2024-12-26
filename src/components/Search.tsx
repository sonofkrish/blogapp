import { KeyboardEvent } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      const query = target ? target.value : '';
      if (location.pathname === "/posts") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  };

  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
