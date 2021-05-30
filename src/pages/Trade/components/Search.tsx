import {
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core';

type ColumnType = {
    id: string;
    label: string;
};

type RowType = {
    [key: string]: string | number;
};

const columns: ColumnType[] = [
    { id: 'name', label: 'Name' },
    { id: 'code', label: 'ISO\u00a0Code' },
    {
        id: 'population',
        label: 'Population',
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
    },
];

const rows: RowType[] = [
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
    { name: "India", code: "IN", population: 1324171354, size: 3287263 },
];

const Search = () => {
    return (
        <Box>
            <Box>

            </Box>
            <Box>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default Search;