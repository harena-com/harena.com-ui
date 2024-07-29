import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { SimpleShowLayout, useShowContext } from 'react-admin';

interface ShowLayoutProps {
  loadingPrimary?: string;
  loadingSecondary?: string;
  notFoundMessage?: string;
  className?: string;
}

export const ShowLayout: React.FC<React.PropsWithChildren<ShowLayoutProps>> = ({
  children,
  loadingPrimary = 'Loading...',
  loadingSecondary = 'Please wait',
  notFoundMessage = 'Record not found',
  className,
}) => {
  const { record, isLoading } = useShowContext();

  if (isLoading) {
    return (
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' className={className}>
        <CircularProgress />
        <Typography variant='h6'>{loadingPrimary}</Typography>
        <Typography variant='body2'>{loadingSecondary}</Typography>
      </Box>
    );
  }

  if (!record) {
    return (
      <Box display='flex' alignItems='center' justifyContent='center' className={className}>
        <Typography variant='h6'>{notFoundMessage}</Typography>
      </Box>
    );
  }

  return <SimpleShowLayout className={className}>{children}</SimpleShowLayout>;
};
