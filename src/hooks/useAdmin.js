import { useState, useEffect } from "react";
import { getAdminStatus } from "../api/auth/getAdminStatus";

export const useAdmin = () => {
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    const getAdmin =async () => {
      const isAdmin =await getAdminStatus();
      if (isAdmin) {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    };
    getAdmin();
  }, []);
  return isAdmin;
};
