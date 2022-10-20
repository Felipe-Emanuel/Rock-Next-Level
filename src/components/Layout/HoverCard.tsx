import { ReactNode } from 'react';
import { styled, keyframes } from '@stitches/react';
import { mauve } from '@radix-ui/colors';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { UserLog } from './User'
import { TooltipButton  } from './FnTooltip';
import { AlertLogOff } from './LogOff';


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

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  fill: 'white',
});

export interface ContentProps {
    children?: ReactNode;
    className?: string;
}


function Content({ children, className, ...props }: ContentProps) {

  return (
    <HoverCardPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </HoverCardPrimitive.Portal>
  );
}

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = Content;

const Flex = styled('div', { display: 'flex' });

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

export interface HoverCardDemoProps {
    className?: string
    asChield?: boolean
}

import { Backpack, GearSix, ShoppingCart, Tote } from 'phosphor-react'

export function HoverCardUser ({ className, asChield }: HoverCardDemoProps) {
    const Comp = asChield ? Slot : 'span';

    return (
        <Comp className={clsx('span', className)} >
            <HoverCard openDelay={0}>
                <HoverCardTrigger asChild>
                <ImageTrigger>
                    <UserLog />
                </ImageTrigger>
                </HoverCardTrigger>
                <HoverCardContent>
                <Flex css={{ flexDirection: 'column', gap: 7 }} >
                    <Flex css={{ flexDirection: 'column', gap: 15 }} >
                    <Text className='flex flex-grow items-center'>
                        <Text bold>Felipe</Text>
                        <button className=' absolute right-2 items-center'>
                            <TooltipButton icon={<ShoppingCart />} text='Check my cart'/>
                        </button>
                    </Text>
                    <Text className='flex flex-grow items-center'>
                        <Text bold>Account</Text>
                        <button className=' absolute right-2 items-center'>
                            <TooltipButton icon={<GearSix />} text='My account'/>
                        </button>
                    </Text>
                    <Text className='flex flex-grow items-center'>
                        <Text bold>Purchases</Text>
                        <button className=' absolute right-2 items-center'>
                            <TooltipButton icon={<Tote />} text='My bag'/>
                        </button>
                    </Text>

                    <Text className='m-auto mt-4'>
                        <AlertLogOff />
                    </Text>
                    </Flex>
                </Flex>
                </HoverCardContent>
            </HoverCard>
        </Comp>
    )
} 
