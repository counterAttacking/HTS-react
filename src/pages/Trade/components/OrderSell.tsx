import { Box } from '@material-ui/core';

type OrderSellType = {
    index: number;
    value: number;
};

const OrderSell = (props: OrderSellType) => {
    const { index, value } = props;
    return (
        <Box hidden={index !== value}>

        </Box>
    );
};

export default OrderSell;