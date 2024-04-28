import React, {useMemo} from 'react';

import {Box, Text} from '@components';

type Props = {
  publicationCount: number;
  followerCount: number;
  followingCount: number;
};
export function ProfileMetadata({
  followerCount,
  followingCount,
  publicationCount,
}: Props) {
  const items: ItemType[] = useMemo(
    () => [
      {value: publicationCount.toString(), label: 'Publicações'},
      {value: followerCount.toString(), label: 'Seguidores'},
      {value: followingCount.toString(), label: 'Seguindo'},
    ],
    [followerCount, followingCount, publicationCount],
  );

  return (
    <Box>
      <Box
        mt="s24"
        flexDirection="row"
        justifyContent="space-between"
        style={{columnGap: 34}}
        alignSelf="center">
        {items.map(item => (
          <Item key={item.label} {...item} />
        ))}
      </Box>
    </Box>
  );
}

type ItemType = {
  value: string;
  label: string;
};

function Item({value, label}: {value: string; label: string}) {
  return (
    <Box key={label} alignItems="center">
      <Text preset="headingSmall">{value}</Text>
      <Text preset="paragraphSmall">{label}</Text>
    </Box>
  );
}
