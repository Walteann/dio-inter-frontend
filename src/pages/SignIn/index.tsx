
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import background from './../../assets/images/background-login.jpg';
import logoInter from './../../assets/images/Inter-orange.png';
import Card from './../../components/Card';
import { Background, ButtonContainer, InputContainer, Wrapper } from './styles';

import useAuth from './../../hooks/useAuth';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();
    const { userSignIn } = useAuth();

    const handleToSignIn = async () => {

        const data = {
            email,
            password
        }

        const response = await userSignIn(data);

        if (response.id) {
            navigate('/dashboard');
            return;
        }

        alert('Usuario ou senha inválidos');

    }

    return (
        <Wrapper>
            <Background image={background} />
            
            <Card width='403px'>
                <img src={logoInter} width={172} height={61} alt="Logo inter" />

                <InputContainer>
                    <Input placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)}/>
                    <Input placeholder='SENHA' type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </InputContainer>

                <ButtonContainer>
                    <Button type='button' onClick={handleToSignIn}>Entrar</Button>
                    <p>Ainda não é Cadastrado? <Link to="/signup">Cadastre-se Já</Link></p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;