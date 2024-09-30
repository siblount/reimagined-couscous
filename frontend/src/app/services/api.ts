// frontend/src/services/api.ts
// ... existing imports and functions ...
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchOrganizationPublicProfile = async (id: string) => {
    const response = await fetch(`${API_URL}/api/organizations/${id}/public-profile`);
    if (!response.ok) {
      throw new Error('Failed to fetch organization public profile');
    }
    return response.json();
  };