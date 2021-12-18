import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';

import logoInter from './../../assets/images/Inter-orange.png';

import useAuth from './../../hooks/useAuth';

import { useNavigate } from 'react-router-dom';
import UserCircle from '../UserCircle';

const Header = () => {

    const navigate = useNavigate();

    const { user } = useAuth();

    const initals = 'WC';

    const handlerLogoff = () => {
        navigate('/');
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <UserInfo>
                    <UserCircle initials={initals}/>
                    <div>
                        <p>Olá. <span className="primary-color font-bold">{user.firstName} {user.lastName}</span></p>
                        <strong>{user.accountNumber}-{user.accountDigit}</strong><br />
                        <a onClick={handlerLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;