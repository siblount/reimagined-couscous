// shared/types.ts

export interface IPost {
    _id: string;
    title: string;
    description: string;
    images: string[];
    tags: string[];
    organizationId: {
      _id: string;
      name: string;
    };
    itemsNeeded?: { item: string; quantity: number }[];
    volunteersNeeded?: number;
    eventDate?: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IOrganization {
    _id: string;
    name: string;
    description: string;
    bio: string;
    bannerImage: string;
    ownerId: string;
    adminIds: string[];
    memberIds: string[];
    website?: string;
    socialMedia?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
    };
    causes: string[];
    foundedYear: number;
  }
  
  export interface IUser {
    _id: string;
    username: string;
    email: string;
    role: 'donor' | 'member' | 'admin' | 'owner';
    organizationId?: string;
    donorProfileId?: string;
  }
  
  // Add other shared types as needed