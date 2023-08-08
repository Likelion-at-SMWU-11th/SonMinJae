import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sookmyung",
      email: "sookmyung@example.com",
      active: true,
    },
    {
      id: 2,
      username: "mutsa",
      email: "likelion@example.com",
      active: false,
    },
    {
      id: 3,
      username: "minjae",
      email: "minjae@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user)); // concat 함수를 통해 배열에 새 항목을 추가

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
    // 즉, user.id가 id인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    // id값을 비교해서 id가 다르면 그대로 두고, 같으면 active 값을 바꾼다
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <br />
      <hr />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;
