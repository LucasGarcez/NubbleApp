import {MetaDataPage, Page} from '@types';
import {renderHook, waitFor} from 'test-utils';

import {usePaginatedList} from '../usePaginatedList';

const page1 = ['item1', 'item2', 'item3'];
const page2 = ['item4', 'item5', 'item6'];

async function getList(page: number): Promise<Page<string>> {
  const data = page === 1 ? page1 : page2;

  const meta: MetaDataPage = {
    currentPage: page,
    firstPage: 1,
    lastPage: 2,
    hasNextPage: page === 1,
    hasPreviousPage: page === 2,
    perPage: 3,
    total: 6,
  };

  return Promise.resolve({data, meta});
}

const mockedGetList = jest.fn(getList);

describe('usePaginatedList', () => {
  it('returns all pages together and stops fetching if there are no more page', async () => {
    const {result} = renderHook(() => usePaginatedList(['key'], mockedGetList));

    await waitFor(() => expect(result.current.list).toStrictEqual(page1));

    result.current.fetchNextPage();

    await waitFor(() =>
      expect(result.current.list).toStrictEqual([...page1, ...page2]),
    );

    result.current.fetchNextPage();

    await waitFor(() =>
      expect(result.current.list).toStrictEqual([...page1, ...page2]),
    );

    expect(mockedGetList).toHaveBeenCalledTimes(2);
  });
});
