import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="mb-4 text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="py-4 font-bold text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
        <CreateUser />
      </h1>
    </div>
  );
}

export default Home;
