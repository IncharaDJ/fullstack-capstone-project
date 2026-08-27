function LoginPage() {
  const loginUser = async () => {
    const response = await fetch("https://example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_TOKEN"
      },
      body: JSON.stringify({
        email: "user@example.com",
        password: "123456"
      })
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <button onClick={loginUser}>
      Login
    </button>
  );
}
