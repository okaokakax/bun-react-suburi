import Spinner from '../components/Spinner';
import React from 'react';

function AboutPage() {
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
            {!showSpinner && (
                <div>
                    <h1>About</h1>
                    <span>
                        Bunでパッケージマネージャーさせて、コンパイラとかその辺をViteに任せて、あとはReactでゴニョゴニョする試作
                    </span>
                </div>
            )}
        </div>
    );
}

export default AboutPage;
