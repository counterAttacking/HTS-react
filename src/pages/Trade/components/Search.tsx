import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
} from '@material-ui/core';

type ColumnType = {
    id: string;
    label: string;
};

type PastTradePriceType = {
    price: number;
    percent: number;
};

type RowType = {
    [key: string]: string | number | PastTradePriceType;
};

const columns: ColumnType[] = [
    { id: 'name', label: '종목명' },
    { id: 'currentPrice', label: '현재가' },
    { id: 'pastPrice', label: '전일대비' },
];

const rows: RowType[] = [
    { name: "대우건설", currentPrice: 8890, pastPrice: { price: 8920, percent: -0.34 } },
    { name: "현대차", currentPrice: 241500, pastPrice: { price: 238500, percent: 1.26 } },
    { name: "카카오", currentPrice: 124000, pastPrice: { price: 126500, percent: -1.98 } },
    { name: "우리금융지주", currentPrice: 11600, pastPrice: { price: 11350, percent: 2.20 } },
    { name: "HMM", currentPrice: 45400, pastPrice: { price: 47350, percent: -4.12 } },
    { name: "대한전선", currentPrice: 3220, pastPrice: { price: 740, percent: 29.84 } },
    { name: "한전기술", currentPrice: 58000, pastPrice: { price: 56300, percent: 3.02 } },
];

const Search = () => {
    return (
        <Box>
            <Box>
                <TextField
                    variant="outlined"
                    margin="dense"
                    placeholder="종목명"
                    fullWidth />
            </Box>
            <Box>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.toString()}>
                                        {columns.map((column) => {
                                            if (column.id === "pastPrice") {
                                                const pastPrice = row[column.id] as PastTradePriceType;
                                                return (
                                                    <TableCell key={column.id}>
                                                        {pastPrice.price}
                                                    </TableCell>
                                                );
                                            }
                                            const value = row[column.id] as string | number;
                                            return (
                                                <TableCell key={column.id}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default Search;