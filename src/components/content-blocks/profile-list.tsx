import React from 'react';

interface Profile {
  name: string;
  credentials: string[];
}

interface ProfileListProps {
  type: 'profile_list';
  title: string;
  profiles: Profile[];
}

export function ProfileList({ title, profiles }: ProfileListProps) {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">{title}</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {profiles.map((profile, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{profile.name}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {profile.credentials.map((cred, credIndex) => (
                  <li key={credIndex}>{cred}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
