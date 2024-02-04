import React from 'react';
import Spinner from '../components/Spinner';
import { Button } from '@mui/material';

export default function Geolocation() {
    // ページ全体がローディングかどうか
    const [loading, setLoading] = React.useState(true);
    const [lazyLoading, setLazyLoading] = React.useState(false);
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            getCurrentLocation();
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setLoading(false);
                setLazyLoading(false);
            },
            (error) => {
                console.log(error);
                setLoading(false);
                setLazyLoading(false);
            },
            { enableHighAccuracy: true }
        );
    };

    const getCurrentLocationLazy = () => {
        setLazyLoading(true);
        const timeout = setTimeout(() => {
            getCurrentLocation();
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    };

    return (
        <div>
            {/* ページ全体のローダー */}
            {(lazyLoading || loading) && <Spinner />}
            <div>
                {!loading && (
                    <div>
                        <h1>GeoLocation</h1>
                        <span>Get current latitude and longitude</span>
                        <p>
                            Latitude: {lazyLoading ? 'Loading...' : latitude}
                            <br />
                            Longitude: {lazyLoading ? 'Loading...' : longitude}
                        </p>
                        <Button
                            variant={'outlined'}
                            onClick={getCurrentLocationLazy}
                        >
                            Get Current Location
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
