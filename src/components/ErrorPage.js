import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Page Not Found!!!!</h1>
      <button onClick={() => navigate("home")}>Back</button>
    </div>
  );
}

export default ErrorPage;
