import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const columns = [
    { id: 'acoes', label: 'Ações', minWidth: 100, align: 'center' },
    { id: 'nome', label: 'Nome', minWidth: 200, align: 'left' },
    { id: 'email', label: 'E-Mail', minWidth: 200, align: 'left' },
    { id: 'cpf', label: 'CPF', minWidth: 100, align: 'center' },
    { id: 'telefone', label: 'Telefone', minWidth: 200, align: 'center' },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const Delete = (event) => {
    console.log('Deletou');
    event.preventDefault();
}

const Edit = (event) => {
    console.log('Editou');
    event.preventDefault();
}

const datajson = require('../data/data.json');

function Listar() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [data, setData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        const GetData = async () => {
            setData(datajson);
        }
        GetData();
        console.log(datajson);
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }, { fontWeight: "bold" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow >
                                    <TableCell align="center">{row.acoes}
                                        <DeleteIcon onClick={Delete}/>
                                        <EditIcon onClick={Edit}/>
                                    </TableCell>
                                    <TableCell align="left">{row.nome}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="center">{row.cpf}</TableCell>
                                    <TableCell align="center">{row.telefone}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default withRouter(Listar);