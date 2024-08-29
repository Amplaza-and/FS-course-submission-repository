const Notification = ({ status, content }) => {
  console.log({content})
  const errorStyle = {
    color: status === "ok" ? "green" : "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  if (content) {
    return <ul style={errorStyle}>{content}</ul>;
  } else {
    return <div></div>;
  }
};

export default Notification;
