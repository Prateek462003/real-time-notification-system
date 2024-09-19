import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4001/api/notifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("newNotification", (notification) => {
      setNotifications((prevNotifications) => [
        notification,
        ...prevNotifications,
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const markAsRead = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:4001/api/notifications/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setNotifications((prev) =>
      prev.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
    ``;
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li
            key={notification._id}
            className={`p-4 border ${
              notification.read ? "bg-gray-100" : "bg-white"
            }`}
          >
            {notification.message}
            {!notification.read && (
              <button
                className="ml-4 text-blue-500"
                onClick={() => markAsRead(notification._id)}
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
