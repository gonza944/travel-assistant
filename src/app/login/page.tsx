const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-16">
      <div className="flex items-center justify-center flex-col gap-4">
        <h2 className="text-neutralBackgroundColor font-title text-7xl uppercase">
          Welcome to the travel planer
        </h2>
        <p className="text-neutralBackgroundColor font-title text-3xl">
          Ready for your next adventure?
        </p>
      </div>
      <button className="font-title text-xl bg-accentColor  text-neutralBackgroundColorInverted font-bold py-2 px-4 rounded">
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
