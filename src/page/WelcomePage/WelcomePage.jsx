const WelcomePage = ({children}) => {
    return (
        <>
            <p>Welcome to ypur logisti system assist</p>
            <a>login</a> <a>sign up</a>
            {children}

        </>
    )
};


export default WelcomePage;