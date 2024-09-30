// frontend/src/app/organization/[id]/page.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchOrganizationPublicProfile } from '@/app/services/api';

const OrganizationPublicProfile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: organization, isLoading, error } = useQuery(
    ['organizationPublicProfile', id],
    () => fetchOrganizationPublicProfile(id as string),
    { enabled: !!id }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading organization profile</div>;
  if (!organization) return null;

  return (
    <div className="organization-public-profile">
      <div className="banner-image">
        <img src={organization.bannerImage} alt={`${organization.name} banner`} />
      </div>
      
      <div className="org-info">
        <img src={organization.profileImage} alt={`${organization.name} logo`} className="profile-image" />
        <h1>{organization.name}</h1>
        <p>{organization.description}</p>
      </div>

      <div className="long-bio">
        <h2>About Us</h2>
        <p>{organization.longBio}</p>
      </div>

      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>Email: {organization.contactEmail}</p>
        {organization.contactPhone && <p>Phone: {organization.contactPhone}</p>}
        <p>Website: <a href={organization.website} target="_blank" rel="noopener noreferrer">{organization.website}</a></p>
        {/* Add social media links here */}
      </div>

      <div className="active-posts">
        <h2>Active Requests</h2>
        {organization.activePosts.map(post => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            {/* Add more post details and a link to the full post */}
          </div>
        ))}
      </div>

      <div className="team-members">
        <h2>Our Team</h2>
        {organization.teamMembers.map(member => (
          <div key={member._id} className="member-card">
            <img src={member.profileImage} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationPublicProfile;