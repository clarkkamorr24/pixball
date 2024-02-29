import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const DropdownUser = () => {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const name = `${session?.firstName} ${session?.lastName}`;
  const email = session?.email;

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        // onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden w-12 rounded-full md:block lg:block xl:block">
          <Image
            width={40}
            height={40}
            src={"/images/user/user.png"}
            alt="User"
          />
        </span>
        <div className="hidden text-right md:block lg:block xl:block">
          {status === "loading" || session === null ? (
            <div className="flex animate-pulse flex-col items-end gap-2">
              <span className="block h-2.5 w-22.5 rounded-sm bg-mediumGray bg-opacity-25 text-xs font-medium text-black dark:text-white"></span>
              <span className="block h-2.5 w-32.5 rounded-sm bg-mediumGray bg-opacity-25 text-xs font-medium text-black dark:text-white"></span>
            </div>
          ) : (
            <div className="">
              <span className="block text-xs font-medium text-black dark:text-white">
                {name}
              </span>
              <span className="block text-xs text-black dark:text-white">
                {email}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default DropdownUser;
