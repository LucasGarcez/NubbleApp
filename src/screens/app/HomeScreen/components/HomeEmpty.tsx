import React from 'react';

import {ActivityIndicator, Text, Box, Button} from '@components';

interface Props {
  loading: boolean;
  error: boolean;
  refetch: () => void;
}
export function HomeEmpty({loading, error, refetch}: Props) {
  let component = null;
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  } else if (error) {
    component = (
      <Box>
        <Text preset="paragraphMedium" bold>
          Não foi possível carregar o feed 😢
        </Text>
        <Button title="tento novamente" preset="outline" onPress={refetch} />
      </Box>
    );
  } else {
    component = (
      <Text preset="paragraphMedium" bold>
        Não há publicações no seu feed 😢
      </Text>
    );
  }
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
