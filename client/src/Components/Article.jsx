import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,styled } from '@mui/material';
import Grid from '@mui/material/Grid';

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

const Image = styled('img')({
    height:"268px",
    width:"100%",
    objectFit:"cover",
    borderRadius:"5px"
});

const MyCard = styled(Card)({
    maxWidth:"876px",
    margin:"2rem auto",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)"
});
function Article({data}){
    return(
        <>
           <MyCard>
                <CardContent sx={{padding:"5px !important"}}>
                    <Grid container>
                        <Grid item lg={5} sm={5} xs={12} sx={{height:"268px"}}>
                                <Image src={data.url} alt='image'/>
                        </Grid>
                        <Grid item lg={7} md={7} sm={7} xs={12} sx={{display:"flex",flexDirection:"column",lineHeight:"1.25",padding:"0 0.35rem"}}>
                                <Typography variant='h6'>
                                    {data.title}
                                </Typography>
                                <Typography variant='h8' sx={{marginTop:"0.1rem"}}>
                                    short by {data.author} / {new Intl.DateTimeFormat('en-US', options).format(new Date(data.timestamp))}
                                </Typography>
                                <Typography variant='h7' sx={{marginTop:"1rem",textAlign:"justify"}}>
                                    {data.description}
                                </Typography>
                                <Typography sx={{marginTop:"auto",marginBottom:"10px"}}>
                                    read more at <a href={data.link}>{data.publisher}</a>
                                </Typography>
                        </Grid>
                   </Grid>
                </CardContent>
           </MyCard>
        </>
    )
}

export default Article;