import Button from '@mui/material/Button';

const Topster = () => {
    return(
        <div>
            <Button variant="contained" color={1 ? 'success' : 'warning'}>Hello World</Button>
        </div>
    )
}

export default Topster;