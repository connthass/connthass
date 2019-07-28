import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Group } from 'typescript-fetch-api';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#e1f5fe'
    }
  }
}));

interface Props {
  group: Group;
}

/**
 * グループ列内の行
 */
const GroupListItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={props.group.imagePath} />
      </ListItemAvatar>
      <ListItemText
        primary={props.group.name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {props.group.description}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default GroupListItem;