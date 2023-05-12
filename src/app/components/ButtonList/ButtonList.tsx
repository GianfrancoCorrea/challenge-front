import styles from '../../page.module.css';
import { ButtonsContainer, MenuButton, VerticalLine } from "./ButtonList.styled";
import LoginButton from "./LoginButton";

type ButtonListProps = {
    selected: string;
    login: boolean;
    logout: () => void;
}

const ButtonList = ({ login, logout, selected }: ButtonListProps) => {
    return (
        <ButtonsContainer className={styles.buttons}>
            <MenuButton $isSelected={selected === 'home'}>
                <a href="/">{'Home'}</a>
            </MenuButton>
            <VerticalLine />
            <MenuButton $isSelected={selected === 'login'}>
                <LoginButton login={login} logout={logout} />
            </MenuButton>
        </ButtonsContainer>
    )
}

export default ButtonList;
