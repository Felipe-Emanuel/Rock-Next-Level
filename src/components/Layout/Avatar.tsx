import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const StyledLoginAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 20,
  height: 20,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarLogin = StyledLoginAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

const Flex = styled('div', { display: 'flex' });

export interface AvatarUserProps {
  className?: string;
  asChield?: boolean;
}

export function AvatarUser ({className, asChield}: AvatarUserProps) {
  const Comp = asChield ? Slot : 'span';

  return (
    <Comp className={clsx(className)}>
      <Flex>
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
          />
          <AvatarFallback delayMs={600}>JD</AvatarFallback>
        </Avatar>
      </Flex>
    </Comp>
  )
} 

export function AvatarLoginUser ({className, asChield}: AvatarUserProps) {
  const Comp = asChield ? Slot : 'span';

  return (
    <Comp className={clsx(className)}>
      <Flex>
        <AvatarLogin>
          <AvatarImage
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            alt="Pedro Duarte"
          />
          <AvatarFallback delayMs={600}>JD</AvatarFallback>
        </AvatarLogin>
      </Flex>
    </Comp>
  )
} 

