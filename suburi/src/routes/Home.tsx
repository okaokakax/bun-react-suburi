import React from 'react';
import Spinner from '../components/Spinner';

const Home = () => {
    const [showSpinner, setShowSpinner] = React.useState(true);
    // 1秒ローダー仕込む
    React.useLayoutEffect(() => {
        const timeout = setTimeout(() => {
            setShowSpinner(false);
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div>
            {showSpinner && <Spinner />}
            {!showSpinner && <h1>Home page</h1>}
        </div>
    );
};

export default Home;
