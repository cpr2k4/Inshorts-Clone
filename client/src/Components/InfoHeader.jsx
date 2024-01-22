import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const Container = styled(Box)`
    display: flex;
    flex-wrap : wrap;
    justify-content:spaced-evenly;
    align-items:center;
    background-color:#f44336;
    color:white;
    max-width:900px;
    margin:auto;
    margin-top:2.5rem;
    padding:10px 32px;
`

function InfoHeader(){
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';  
    return(
        <>  
            <Container>
                <Typography style={{fontSize:"0.9rem"}}>
                     For the best experience use <b>inshorts</b> app on your smartphone
                </Typography>
                <Box style={{marginLeft:"auto"}}>
                    <img src={appleStore} alt="appleStore_img" height="35" width="124"/>
                    <img src={googleStore} alt="googleStor_img" height="35" width="124" style={{marginLeft:"1rem"}}/>
                </Box>
            </Container>
        </>
    )
}

export default InfoHeader;