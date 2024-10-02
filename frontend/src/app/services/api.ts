// frontend/src/app/services/api.ts

import { IOrganizationProfile } from "@shared/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchOrganizationPublicProfile = async (id: string): Promise<IOrganizationProfile> => {
  const response = await fetch(`${API_URL}/profiles/public/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch organization public profile');
  }
  return response.json();
};