import { COLORS } from 'src/constants';
import styled from 'styled-components';

const Sub = ({ title, note, day }: { title: string; note: string; day: boolean }) => {
  return (
    <SubLayout>
      <ImgBox>
        <ImgLayout />
      </ImgBox>
      <SubContent>
        <SubTitlt>
          {title}
          {day && <DDay>D-228</DDay>}
        </SubTitlt>
        <SubNote>{note}</SubNote>
      </SubContent>
    </SubLayout>
  );
};

export default Sub;

const SubLayout = styled.div`
  height: 215px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 10%);
  border-radius: 10px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgLayout = styled.div`
  width: 115px;
  height: 115px;
  background-color: ${COLORS.GRAY_400};
  border-radius: 50%;
  margin: 18px 24px 0px 24px;
`;

const SubContent = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubTitlt = styled.h2`
  display: inline-block;
  color: ${COLORS.GRAY_900};
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DDay = styled.div`
  font-size: 11px;
  background-color: #ffae11;
  border-radius: 4px;
  padding: 3px;
  color: white;
`;

const SubNote = styled.span`
  display: inline-block;
  color: ${COLORS.GRAY_300};
  font-size: 14px;
`;
