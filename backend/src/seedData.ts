// backend/src/seedData.ts
import mongoose from 'mongoose';
import User from './models/User';
import Organization from './models/Organization';
import Post from './models/Post';
import DonorProfile from './models/DonorProfile';
import bcrypt from 'bcryptjs';

const seedData = async () => {
  // Clear existing data
  await User.deleteMany({});
  await Organization.deleteMany({});
  await Post.deleteMany({});
  await DonorProfile.deleteMany({});

  // Create users
  const users = [
    {
      username: 'johndoe',
      email: 'john@example.com',
      password: await bcrypt.hash('password123', 10),
      role: 'owner'
    },
    {
      username: 'janedoe',
      email: 'jane@example.com',
      password: await bcrypt.hash('password123', 10),
      role: 'admin'
    },
    {
      username: 'bobsmith',
      email: 'bob@example.com',
      password: await bcrypt.hash('password123', 10),
      role: 'member'
    },
    {
      username: 'alicedonor',
      email: 'alice@example.com',
      password: await bcrypt.hash('password123', 10),
      role: 'donor'
    }
  ];

  const createdUsers = await User.create(users);

  // Create organizations
  const organizations = [
    {
      name: "Green Earth Initiative",
      description: "Dedicated to environmental conservation and sustainability.",
      bio: "Green Earth Initiative is committed to creating a sustainable future for our planet. We focus on community-driven projects that promote environmental awareness, conservation, and sustainable living practices.",
      bannerImage: `https://placehold.co/600x400?text=${encodeURIComponent("Green Earth Initiative")}`,
      ownerId: createdUsers[0]._id,
      adminIds: [createdUsers[0]._id, createdUsers[1]._id],
      memberIds: [createdUsers[0]._id, createdUsers[1]._id, createdUsers[2]._id],
      website: "https://greenearth.org",
      socialMedia: {
        facebook: "https://facebook.com/greenearth",
        twitter: "https://twitter.com/greenearth",
        instagram: "https://instagram.com/greenearth"
      },
      causes: ["Environment", "Sustainability", "Conservation"],
      foundedYear: 2010
    },
    {
      name: "Helping Hands Shelter",
      description: "Providing food and housing for those in need.",
      bio: "Helping Hands Shelter is dedicated to supporting our community's most vulnerable members. We provide shelter, meals, and support services to help individuals and families get back on their feet.",
      bannerImage: `https://placehold.co/600x400?text=${encodeURIComponent("Helping Hands Shelter")}`,
      ownerId: createdUsers[1]._id,
      adminIds: [createdUsers[1]._id],
      memberIds: [createdUsers[1]._id, createdUsers[2]._id],
      website: "https://helpinghands.org",
      socialMedia: {
        facebook: "https://facebook.com/helpinghands",
        twitter: "https://twitter.com/helpinghands"
      },
      causes: ["Homelessness", "Poverty", "Community Support"],
      foundedYear: 2005
    }
  ];

  const createdOrganizations = await Organization.create(organizations);

  // Update users with organization IDs
  await User.findByIdAndUpdate(createdUsers[0]._id, { organizationId: createdOrganizations[0]._id });
  await User.findByIdAndUpdate(createdUsers[1]._id, { organizationId: createdOrganizations[1]._id });
  await User.findByIdAndUpdate(createdUsers[2]._id, { organizationId: createdOrganizations[0]._id });

  // Create posts
  const posts = [
    {
      title: "Community Garden Volunteer Day",
      description: "Join us for a day of planting and maintaining our community garden. We need volunteers to help with weeding, planting new vegetables, and general garden maintenance.",
      images: [`https://placehold.co/600x400?text=${encodeURIComponent("Community Garden Volunteer Day")}`],
      tags: ["gardening", "community", "volunteer"],
      organizationId: createdOrganizations[0]._id,
      itemsNeeded: [
        { item: "Gardening gloves", quantity: 20 },
        { item: "Shovels", quantity: 10 },
        { item: "Watering cans", quantity: 5 }
      ],
      volunteersNeeded: 15,
      eventDate: new Date("2023-07-15T09:00:00Z")
    },
    {
      title: "Food Drive for Local Shelter",
      description: "We're collecting non-perishable food items for our local homeless shelter. Your donations can make a big difference in someone's life.",
      images: [`https://placehold.co/600x400?text=${encodeURIComponent("Food Drive for Lcoal Shelter")}`],
      tags: ["food drive", "donation", "community support"],
      organizationId: createdOrganizations[1]._id,
      itemsNeeded: [
        { item: "Canned vegetables", quantity: 100 },
        { item: "Pasta", quantity: 50 },
        { item: "Rice", quantity: 30 }
      ],
      eventDate: new Date("2023-08-01T10:00:00Z")
    }
  ];

  await Post.create(posts);

  // Create donor profile
  const donorProfile = {
    userId: createdUsers[3]._id,
    bio: "Passionate about making a difference in my community.",
    interests: ["Environment", "Education", "Poverty Alleviation"],
    donationHistory: [
      {
        organizationId: createdOrganizations[0]._id,
        amount: 100,
        date: new Date("2023-05-01")
      }
    ],
    preferredCauses: ["Environment", "Education"],
    volunteerHistory: [
      {
        organizationId: createdOrganizations[1]._id,
        hours: 5,
        date: new Date("2023-04-15")
      }
    ]
  };

  await DonorProfile.create(donorProfile);

  console.log('Seed data inserted successfully');
};

export default seedData;