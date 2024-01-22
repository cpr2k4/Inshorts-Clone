import { styled} from '@mui/material';
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const StyledHeader = styled(AppBar)`
    background-color: white;
    color: black;
    height: 72px;
` 
const ImageIcon = styled('img')({
    height:55,
    margin:'auto',
    paddingRight:"1rem"
})

function Header(){
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return(
        <>
            <StyledHeader style={{position:"static"}}>
                <Toolbar>
                    <MenuIcon style={{ fontSize: '3em'}}/>
                    <ImageIcon src={url} alt="logo"/>
                </Toolbar>
            </StyledHeader>
        </> 
    );
}

export default Header;