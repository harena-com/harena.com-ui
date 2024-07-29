import WelcomeMessage from '@/layout/WelcomeMessage.tsx';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppBar as RaAppBar, AppBarProps as RaAppBarProps, UserMenu as RaUserMenu } from 'react-admin';

const UserMenu: React.FC = () => {
  return (
    <Box>
      <RaUserMenu
        icon={
          <Avatar
            sx={{
              height: 40,
              width: 40,
            }}
          />
        }
      >
        <Stack px={2} py={1} direction='row' alignItems='flex-start' spacing={1}>
          <Avatar
            sx={{
              height: 40,
              width: 40,
            }}
          />
          <Stack>
            <Typography color='primary' fontWeight='560' flex={1}>
              Guest user
            </Typography>

            <Typography fontSize={15} color='text.secondary' fontWeight='400'>
              guest@harena.com
            </Typography>

            <Box mt={0.5}>
              <Chip label='Guest' size='small' color='primary' />
            </Box>
          </Stack>
        </Stack>

        <Box px={2} pb={1}></Box>
      </RaUserMenu>
    </Box>
  );
};

export const AppBar: React.FC<RaAppBarProps> = (props) => {
  return <RaAppBar {...props} title='Harena Admin' toolbar={<WelcomeMessage />} userMenu={<UserMenu />} />;
};
