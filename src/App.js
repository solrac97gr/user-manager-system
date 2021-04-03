import { useAuth } from "./hooks/useAuth";
import { useAdmin } from "./hooks/useAdmin";
import "antd/dist/antd.css";
import { PublicViews } from "./routers/PublicViews";
import { AdminViews } from "./routers/AdminViews";
import { UserViews } from "./routers/UserViews";
export default function App() {
  const isAuth = useAuth();
  const isAdmin = useAdmin();
  return isAuth ? isAdmin ? <AdminViews /> : <UserViews /> : <PublicViews />;
}
