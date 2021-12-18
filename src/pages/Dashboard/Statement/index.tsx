import {
    StatementItemContainer,
    StatementItemImage,
    StatementItemInfo,
    StatementContainer,
} from "./styles";

import { useEffect, useState } from 'react';

import { format } from 'date-fns';

import { FiDollarSign } from 'react-icons/fi';

import { transactions } from './../../../services/resources/pix';

interface User {
    firstName: string;
    lastName: string;
}

interface StatementItemType {
    user: User;
    value: number;
    type: "paid" | "received" | string;
    // type: string;
    updatedAt: Date;
}

const StatementItem = ({user, value, type, updatedAt}: StatementItemType) => {

    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">{value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <p>{type === 'paid' ? 'Pago a': 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong> </p>
                <p>{format(new Date(updatedAt), "dd/MM/yyyy 'as' HH:mm'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )

}

const Statement = () => {

    const [statements, setStatements] = useState<StatementItemType[]>([]);

    const getAllTransactions = async () => {
        const { data } = await transactions();
        console.log(data);
        setStatements(data.transactions);
    }

    useEffect(() => {

        getAllTransactions();

    }, []);


    return (
        <StatementContainer>
            {statements.length > 0 && statements.map((statement, index) => 
                <StatementItem  key={index} {...statement} />)
            }
        </StatementContainer>
    )
};

export default Statement;
