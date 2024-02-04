import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

const Spinner = () => {
    return (
        <div>
            <Backdrop open>
                <CircularProgress />
            </Backdrop>
        </div>
    );
};

export default Spinner;
