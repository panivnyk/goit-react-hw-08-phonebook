import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './tasksSlice';

axios.defaults.baseURL = 'https://62fbc9c4abd610251c112984.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    // Индикатор загрузки
    dispatch(fetchingInProgress());
    // HTTP-запрос
    const response = await axios.get('/tasks');
    // Обработка данных
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обработка ошибки
    dispatch(fetchingError(e.message));
  }
};
