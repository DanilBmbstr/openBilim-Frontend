import Logo from './../assets/Logo.svg'

export default function Header(props) {
    const testName = { 
        fontSize: '24pt', 
        marginTop: '-40pt', 
        lineHeight: '25pt',
        margin: 0
    };
    const discipline = { 
        fontSize: '36pt',
        margin: 0
    };
    const svg = {
        width: '341px',
        height: '90px',
        marginTop: '15px'
    }

    const leftInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        marginLeft: '40px', 
        marginTop: '0px',
    };
const rightInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlign: 'right', 
    marginTop: '0px',
    marginLeft: 'auto', 
    marginRight: '40px'
};
    const headerStyle = {
        display: 'flex',
        alignItems: 'center', 
        width: '100%',
        padding: '0 20px'

    };

    return (
        <header style={headerStyle}>
            <img className="Logo" src={Logo} style={svg} alt="logo" />
            <div className='leftInfo' style={leftInfoStyle}>
                <p style={discipline}>{props.discipline}</p>
                <p style={testName}>{props.testName}</p>
            </div>


            <div className='rightInfo' style={rightInfoStyle}>
                <p style={discipline}>{props.name}</p>
                <p style={testName}>{props.group}</p>
            </div>
        </header>
    )
}