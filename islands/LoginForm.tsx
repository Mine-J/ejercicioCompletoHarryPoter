import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

export const LoginForm: FunctionalComponent = () => {
  const [nombre, setNombre] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const CrearCookie = (e: Event) => {
    e.preventDefault();
    if (password === "1234") {
        document.cookie = `name=${nombre}; path=/`;
        globalThis.location.href = "/Characters";
    }
  };
  return (
    <>
      <form method="POST" onSubmit={(e) => CrearCookie(e)}>
        <p>Username:</p>
        <input
          type="text"
          placeholder="Username..."
          value={nombre}
          onChange={(e) => setNombre(e.currentTarget.value)}
          required
        />
        <p>Password:</p>
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <button type="submit" onSubmit={(e) => CrearCookie(e)}>Login</button>
      </form>
    </>
  );
};
