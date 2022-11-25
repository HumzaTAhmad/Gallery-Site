import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(148,0,211, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  buttonBack: {
    marginBottom: 10,
    width: 100,
    color: 'rgba(247,135,51, 1)',
    backgroundColor: 'rgba(148,0,211,1)',
  },
}));