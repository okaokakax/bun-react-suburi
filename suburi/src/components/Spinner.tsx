import CircularProgress from '@mui/material/CircularProgress';
const Spinner = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress />
        </div>
    );
};

export default Spinner;
