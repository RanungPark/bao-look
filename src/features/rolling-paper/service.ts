import axios from 'axios';
import { URLS } from 'src/constants';

import { IListValues } from './types';

export interface IPostRollingPaper {
  data: {
    randomName: string;
    rollingPaperId: number;
  };
  msg: string;
}

export const postRollingPaper = async (memberId: number, message: string): Promise<IPostRollingPaper> => {
  try {
    const response = await axios.post(`${URLS.ROLLING_PAPER}/${memberId}`, {
      message,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface IGetRollingPaperLast {
  data: {
    lastId: number;
  };
  msg: string;
}

export const getRollingPaperLast = async (): Promise<IGetRollingPaperLast> => {
  try {
    const response = await axios.get(URLS.ROLLING_PAPER_LAST);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export interface IGetRollingPaperList {
  data: {
    hasNext: boolean;
    values: IListValues[];
  };
  msg: string;
}

export const getRollingPaperList = async (): Promise<IGetRollingPaperList> => {
  try {
    const response = await axios.get(URLS.ROLLING_PAPER_LIST);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
