const Home = ({ currentUser }) => {
    return (
        <div>
            <h1>Home Page</h1>
            {currentUser ? <p>Welcome, {currentUser.email}</p> : <p>You are not signed in</p>}
        </div>
    );
};

// Home.getInitialProps = async (context, client, currentUser) => {
//     // Any additional logic for the Home page can be added here
//     return {};
// };

export default Home;
