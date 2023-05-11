import styled, { keyframes } from 'styled-components';

const overlayAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.8; }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${overlayAnimation} 0.3s linear forwards;
`;

const LoadingSpinner = styled.div`
  border: 3px solid #fafafa;
  border-top: 3px solid #999; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Loading = () => (
  <LoadingOverlay>
    <LoadingSpinner />
  </LoadingOverlay>
);

export default Loading;
