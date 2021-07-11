import {
    Divider,
    Box,
    Grid,
} from '@material-ui/core';

const CurrentPrice = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box>종목명</Box>
                <Divider />
                <Box>신풍제약</Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Box>전일대비</Box>
                <Box>1000%</Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid container>
                    <Grid item xs={6}>
                        <Box>최고가</Box>
                        <Divider />
                        <Box>최저가</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>1000</Box>
                        <Divider />
                        <Box>100</Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CurrentPrice;