import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter basename="/ai">
      <AppLayout />
    </BrowserRouter>
  );
}
