import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Render error message */}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
};

export default Home;
