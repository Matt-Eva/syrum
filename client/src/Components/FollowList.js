const FollowList = ( { users } ) => {
  
  const userList = users.map((user) => {
    return <li>{user.username}</li>
  })

  return (
    <ul>
      {userList}
    </ul>
  )
};

export default FollowList;
