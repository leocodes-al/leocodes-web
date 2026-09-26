import { styled } from 'styled-components'

export const Divider = styled.div`
  width: 100%;
  max-width: 1200px; 
  height: 1px;       
  margin: 0 auto;    
  
  background: linear-gradient(
    90deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(0, 240, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;
