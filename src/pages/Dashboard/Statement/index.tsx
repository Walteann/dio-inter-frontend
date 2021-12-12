import {
    StatementItemContainer,
    StatementItemImage,
    StatementItemInfo,
    StatementContainer,
} from "./styles";

import { format } from 'date-fns';

import { FiDollarSign } from 'react-icons/fi';

interface User {
    firstName: string;
    lastName: string;
}

interface StatementItemType {
    user: User;
    value: number;
    type: "pay" | "received" | string;
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
                <p>{type === 'pay' ? 'Pago a': 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong> </p>
                <p>{format(updatedAt, "dd/MM/yyyy 'as' HH:mm'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )

}

const Statement = () => {

    const statements = [
        {
            user: {
                firstName: 'Szylzen',
                lastName: 'Gordinho'
            },
            value: 250.00,
            type: 'pay',
            updatedAt: new Date()
        },
        {
            user: {
                firstName: 'Leticia',
                lastName: 'Silva'
            },
            value: 170.00,
            type: 'received',
            updatedAt: new Date()
        }
    ]

    return (
        <StatementContainer>
            {statements.map(statement => 
                <StatementItem {...statement} />)
            }
        </StatementContainer>
    )
};

export default Statement;
