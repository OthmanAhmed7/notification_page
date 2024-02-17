import { data } from "./constants/data";
import { useState } from "react";
import "./index.css";

function App() {
  const [notification, setNotification] = useState(data);

  function markAllUnread() {
    setNotification((prev) =>
      prev.map((n) => ({
        ...n,
        isUnread: false,
      }))
    );
  }

  function handleNotificationClick(id) {
    setNotification((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n))
    );
  }

  return (
    <main className="py-8 md:py-12 lg:py-16 bg-container">
      <div className="px-8 pt-8 pb-2 w-[375px]  md:w-[560px] lg:w-[670px] m-auto shadow-2xl rounded-lg bg-white">
        <div className="flex items-center justify-between mb-8 text-sm">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold lg:text-2xl text-names">
              Notification
            </h1>
            <span className="px-3 rounded-lg lg:text-lg bg-counter text-container">
              {notification.filter((n) => n.isUnread).length}
            </span>
          </div>
          <p
            className="cursor-pointer text-paragraph lg:text-base hover:text-counter"
            onClick={markAllUnread}
          >
            Mark all as read
          </p>
        </div>
        {notification &&
          notification.map((n) => (
            <div
              className={`flex flex-col p-3 mb-3 rounded-lg ${
                n.isUnread && "bg-notification"
              }`}
              key={n.id}
              onClick={() => handleNotificationClick(n.id)}
            >
              <div className="flex">
                <img
                  className="w-[40px] lg:w-[50px] lg:h-[50px] h-[40px] mr-3"
                  src={n.imgUrl}
                  alt={n.title}
                />

                <div>
                  <p className="lg:text-[15px] text-xs">
                    <span className="font-bold cursor-pointer hover:text-counter">
                      {n.title}
                    </span>{" "}
                    <span className="text-slate-500">{n.paragraph}</span>{" "}
                    {n.focused && (
                      <span className="font-semibold cursor-pointer text-slate-700 hover:text-counter">
                        {n.focused}
                      </span>
                    )}{" "}
                    {n.isUnread && (
                      <span className="bg-mark h-[8px] lg:h-[10px] lg:w-[10px] w-[8px] rounded-full block"></span>
                    )}
                    <p className="text-xs lg:text-sm text-time">{n.time}</p>
                    <div
                      className={`${
                        n.message &&
                        "border-2 p-2 rounded-md mt-3 lg:text-[15px] hover:bg-background cursor-pointer"
                      }`}
                    >
                      {n.message && (
                        <span className="text-slate-500">{n.message}</span>
                      )}
                    </div>
                  </p>
                </div>

                {n.picture && (
                  <img
                    src={n.picture}
                    alt="picture"
                    className="h-[38px] w-[38px] lg:h-[44px] lg:w-[44px] ml-3 cursor-pointer"
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
