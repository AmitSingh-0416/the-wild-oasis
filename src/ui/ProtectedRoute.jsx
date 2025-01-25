/*eslint-disable */
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  text-align: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //1. Load the authenticated user
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useUser();

  // 2. if there is no any authenticated user then redirect user to /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. while Loading show spinner

  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  //4. if user exist then redirect to app.
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
