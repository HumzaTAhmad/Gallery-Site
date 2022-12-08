import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: 'rgba(247,135,51, 1)',
    fontWeight: 'bold'
  },
  secondButton: {
    marginBottom: 10,
    backgroundColor: 'rgba(148,0,211,1)',
    fontWeight: 'bold'
  }
}));