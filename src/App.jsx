import { data } from "./constants/data";
import { useState } from "react";
import "./index.css";

function App() {
  const [notification, setNotification] = useState(data);

  function markAllUnread() {
    // setNotification((prev) =>
    //   prev.map((n) => ({
    //     ...n,
    //     isUnread: false,
    //   }))
    // );
  }

  function handleNotificationClick(id) {
    // setNotification((prev) =>
    //   prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n))
    // );
  }

  return (
    <main className="py-8 bg-container">
      <div className="px-8 pt-8 pb-2 w-[375px]  md:w-[560px] m-auto shadow-2xl rounded-lg bg-white">
        <div className="flex items-center justify-between mb-8 text-sm">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-names">Notification</h1>
            <span className="px-3 rounded-lg bg-counter text-container">
              {notification.filter((i) => i.isUnread).length}
            </span>
          </div>
          <p
            className="cursor-pointer text-paragraph hover:text-counter"
            onClick={markAllUnread()}
          >
            Mark all as read
          </p>
        </div>
        {notification.map((i) => (
          <div
            className={`flex flex-col p-3 mb-3 rounded-lg ${
              i.isUnread && "bg-notification"
            }`}
            key={i.id}
            onClick={handleNotificationClick(i.id)}
          >
            <div className="flex">
              <img
                className="w-[40px] h-[40px] mr-3"
                src={i.imgUrl}
                alt={i.title}
              />

              <div>
                <p className="text-xs">
                  <span className="font-bold cursor-pointer hover:text-counter">
                    {i.title}
                  </span>{" "}
                  <span className="text-slate-500">{i.paragraph}</span>{" "}
                  {i.focused && (
                    <span className="font-semibold cursor-pointer text-slate-700 hover:text-counter">
                      {i.focused}
                    </span>
                  )}{" "}
                  {i.isUnread && (
                    <span className="bg-mark block h-[10px] w-[10px] rounded-full"></span>
                  )}
                  <p className="text-xs text-time">{i.time}</p>
                  <div
                    className={`${
                      i.message &&
                      "border-2 p-2 rounded-md mt-3 max-w-[400px] hover:bg-background cursor-pointer"
                    }`}
                  >
                    {i.message && (
                      <span className="text-slate-500">{i.message}</span>
                    )}
                  </div>
                </p>
              </div>
              {i.picture && (
                <img
                  src={i.picture}
                  alt="picture"
                  className="h-[38px] w-[38px] ml-3 cursor-pointer"
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
