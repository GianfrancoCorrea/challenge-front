type LoginButtonProps = {
    login: boolean;
    logout: () => void;
}

const LoginButton = ({ login, logout }: LoginButtonProps) => {
    return login ? (
        <p>
            <a href="#" onClick={() => logout()}>{'Logout'}</a>
        </p>
    ) : (
        <p>
            <a href="/login">{'Login'}</a>
        </p>
    )
}

export default LoginButton;
