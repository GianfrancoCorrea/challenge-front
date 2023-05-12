import { ReactNode } from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

type TooltipProps = {
    text: string;
    children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => (
    <TooltipContainer>
        {children}
        <TooltipText>{text}</TooltipText>
    </TooltipContainer>
);

export default Tooltip;
