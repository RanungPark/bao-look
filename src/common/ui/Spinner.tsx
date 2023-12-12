import { styled } from 'styled-components';

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading && (
        <Layout>
          <div className="spinner" />
        </Layout>
      )}
    </>
  );
};

export default Spinner;

const Layout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);

  .spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    border-top-color: white;
    border-bottom-color: white;
    border-radius: 50%;

    -webkit-animation: spin 1s ease-in-out infinite;
    animation: spin 1s ease-in-out infinite;
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
