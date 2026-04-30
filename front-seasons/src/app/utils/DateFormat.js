import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import moment from 'moment';

export const DataForm = (dateString) => {
  if (!dateString) return "";
  return moment(dateString).format('MMMM Do YYYY, h:mm:ss a');
};