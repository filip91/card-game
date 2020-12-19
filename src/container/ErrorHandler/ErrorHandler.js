import React from "react";
import { connect } from "react-redux";
import "./ErrorHandler.css";

const ErrorHandler = ({ error }) => {
  const handleErrorStatus = (error) => {
    switch (error.status) {
      case 400:
        return <p>Bad Request — Client sent an invalid request</p>;
      case 401:
        return (
          <p>Unauthorized — Client failed to authenticate with the server</p>
        );
      case 403:
        return (
          <p>
            Forbidden — Client authenticated but does not have permission to
            access the requested resource
          </p>
        );
      case 404:
        return <p>Not Found — The requested resource does not exist</p>;
      case 412:
        return (
          <p>
            Precondition Failed — One or more conditions in the request header
            fields evaluated to false
          </p>
        );
      case 500:
        return (
          <p>Internal Server Error — A generic error occurred on the server</p>
        );
      case 503:
        return (
          <p>Service Unavailable — The requested service is not available</p>
        );
      default:
        return;
    }
  };

  return handleErrorStatus(error);
};

const mapStateToProps = ({ cards }) => ({
  error: cards.err,
});
export default connect(mapStateToProps)(ErrorHandler);
