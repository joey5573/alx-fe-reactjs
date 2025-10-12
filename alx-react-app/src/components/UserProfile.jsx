function UserProfile(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age} years old</p>
      <p>From {props.location}</p>
    </div>
  );
}

export default UserProfile;
