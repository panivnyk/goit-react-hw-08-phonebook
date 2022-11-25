import CircularProgress from '@mui/material/CircularProgress';
import { Loading } from './Loader.styled';

export const Loader = () => {
  return (
    <Loading>
      <CircularProgress color="grey" />
    </Loading>
  );
};
