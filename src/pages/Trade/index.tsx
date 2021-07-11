import { Container, Grid } from '@material-ui/core';
import AskingPrice from './components/AskingPrice';
import CurrentPrice from './components/CurrentPrice';
import ItemChart from './components/ItemChart';
import Order from './components/Order';
import Search from './components/Search';

const Trade = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} lg={3}>
                    <Search />
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Grid container>
                        <Grid item xs={12} lg={12}>
                            <CurrentPrice />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <ItemChart />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <AskingPrice />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Order />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Trade;