import { fetcher } from '@/lib/fetch';
import useSWR from 'swr';

//TODO: Copy Hook functionality
export function useCurrentUser() {
  return useSWR('/api/user', fetcher);
}

export function useUser(id) {
  return useSWR(`/api/users/${id}`, fetcher);
}
