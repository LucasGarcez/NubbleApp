import {MetaDataPage} from 'src/types/Pagination';

import {MetaDataPageApi} from './apiTypes';

function toMetaDataPage(meta: MetaDataPageApi): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    firstPage: meta.first_page,
    lastPage: meta.last_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
