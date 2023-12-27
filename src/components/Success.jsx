const Success = () => {
  function refresh() {
    window.location.reload();
  }

  return (
    <div className="user-container">
      <div> User Authenticated! </div>
      <div className="user-link" onClick={refresh}>
        reload
      </div>
    </div>
  );
};

export default Success;
