import React from 'react';
import { Table } from 'react-bootstrap';
import { _t } from '../../i18n';
import { MappedData } from '../orders';
import { Skeleton } from '../skeleton';

const columns = [
    `${_t("market.date-created")}`,
    `${_t("market.type")}`,
    `${_t("market.price")}`,
    `${_t("wallet.hive")}`,
    `${_t("market.hbd")} ($)`,
    `${_t("market.action")}`
];

interface Props {
    data: MappedData[];
    loading: boolean;
}

export const OpenOrders = ({data, loading}: Props) => {
    return loading ? <Skeleton className="loading-hive" /> : <div className="rounded">
    <h5>{_t("market.open-orders")}</h5>
    <Table striped bordered hover size="sm">
        <thead>
        <tr>
            {columns.map(item => <th key={item}>{item}</th>)}
        </tr>
        </thead>
        <tbody>
        {data.map(item => <tr>
                <td>{item.key1}</td>
                <td>{item.key2}</td>
                <td>{item.key3}</td>
                <td>{item.key4}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
}