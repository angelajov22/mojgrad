import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import CaseDetailPage from "./pages/CaseDetailPage";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/case/:id" element={<CaseDetailPage />} />
          <Route path="*" element={<Navigate to="/case/3421" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
