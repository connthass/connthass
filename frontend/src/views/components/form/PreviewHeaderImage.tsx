import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  colorCode: (props: any) => ({
    background: props.colorCode
  }),
  imageContainer: {
    height: '500px'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'cover',
    height: '500px'
  }
});

interface Props {
  colorCode: string;
  imageFile: File;
}

const PreviewHeaderImage: React.FC<Props> = (props: Props) => {
  const classes = useStyles({ colorCode: props.colorCode });
  return (
    <Grid
      className={`${classes.imageContainer} ${classes.colorCode}`}
      item
      xs={12}
    >
      {props.imageFile !== null && (
        <Box className={classes.imageWrapper}>
          <img src={URL.createObjectURL(props.imageFile)} />
        </Box>
      )}
    </Grid>
  );
};

export default PreviewHeaderImage;
