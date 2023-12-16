import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import CALENDAR_ICON from 'src/assets/icon/calendar-icon.svg';
import ROLLING_ICON from 'src/assets/icon/rolling-icon.svg';
import { COLORS, URLS } from 'src/constants';
import styled from 'styled-components';

import { ICalendar } from './store';

const Sub = ({ title, note, calendar }: { title: string; note: string; calendar: boolean }) => {
  // const today = new Date();
  // const dDay = new Date(2024, 7 - 1, 20);
  // const gap = dDay.getTime() - today.getTime();
  // const result = Math.ceil(gap / (1000 * 60 * 60 * 24));

  const [calendarDDay, setCalendarDDay] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(URLS.CALENDAR)
      .then(function (response: AxiosResponse<ICalendar>) {
        console.log(response.data);
        setCalendarDDay(response.data.data.countDDay);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  return (
    <SubLayout>
      <ImgBox>
        <ImgLayout calendar={calendar}>
          {calendar ? <img src={CALENDAR_ICON} alt="calendar Icon" /> : <img src={ROLLING_ICON} alt="rollingIcon" />}
        </ImgLayout>
      </ImgBox>
      <SubContent>
        <SubTitle>
          {title}
          {calendar && <DDay>D-{calendarDDay}</DDay>}
        </SubTitle>
        <SubNote calendar={calendar}>{note}</SubNote>
      </SubContent>
    </SubLayout>
  );
};

export default Sub;

const SubLayout = styled.div`
  height: 215px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 10%);
  border-radius: 10px;
  background-color: #ffffff;

  &:hover {
    background-color: #f7f7f7f7;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgLayout = styled.div<{ calendar: boolean }>`
  background-image: ${props =>
    props.calendar ? `url('src/assets/icon/calendar-bg.svg')` : ` url('src/assets/icon/rolling-bg.svg')`};
  width: 99px;
  height: 99px;
  border-radius: 50%;
  margin: 18px 24px 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubContent = styled.div`
  margin: 16px 15px 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubTitle = styled.h2`
  display: inline-block;
  color: ${COLORS.GRAY_900};
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DDay = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffae11;
  border-radius: 4px;
  padding: 2px 3px;
  color: white;
`;

const SubNote = styled.span<{ calendar: boolean }>`
  display: inline-block;
  color: ${COLORS.GRAY_300};
  font-size: 14px;
  width: ${props => (props.calendar ? '89px' : '104px')};
`;
