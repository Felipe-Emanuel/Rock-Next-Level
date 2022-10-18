import { styled, keyframes } from '@stitches/react';
import { EyeOpenIcon, ChatBubbleIcon, InfoCircledIcon, CaretDownIcon } from '@radix-ui/react-icons';
import { violet, blackA } from '@radix-ui/colors';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: 'white',
});

interface ContentProps {
  children?: ReactNode;
  sideOffset?: number;
}

function Content({ children, ...props  }: ContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </TooltipPrimitive.Portal>
  );
}

// Exports
export const Provider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = Content;

// Your app...
const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 }
});

export const TooltipEye = () => {
  return (
    <Provider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <EyeOpenIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent sideOffset={5} >
          {/* passar caminho do nome do produto na api */}
          Gibson Les Paul Cherry 230
        </TooltipContent>
      </Tooltip>
    </Provider>
  );
};

export const TooltipChat = () => {
  return (
    <Provider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent sideOffset={5} >
          Chat with us
        </TooltipContent>
      </Tooltip>
    </Provider>
  );
};

export const TooltipInfo = () => {
  return (
    <Provider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <InfoCircledIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent sideOffset={5} >
          Guitar especifications
        </TooltipContent>
      </Tooltip>
    </Provider>
  );
};

export const TooltipDown = () => {
  return (
    <Provider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton>
            <CaretDownIcon />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent sideOffset={5} >
          Scroll Down
        </TooltipContent>
      </Tooltip>
    </Provider>
  );
};

