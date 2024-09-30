const demoUser = {
    name: 'John Doe',
    email: 'john@example.com',
    isNonprofitMember: true,
    nonprofit: 'Education For All',
};

export default function Profile() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-orange-800">Your Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-orange-800 mb-4">{demoUser.name}</h2>
                <p className="text-orange-700">Email: {demoUser.email}</p>
                {demoUser.isNonprofitMember && (
                    <p className="text-orange-700 mt-2">Nonprofit: {demoUser.nonprofit}</p>
                )}
            </div>
            <div className="space-y-2">
                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                    Edit Profile
                </button>
                {demoUser.isNonprofitMember && (
                    <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                        Manage Nonprofit
                    </button>
                )}
                <button className="w-full bg-orange-100 text-orange-800 py-2 rounded hover:bg-orange-200">
                    Log Out
                </button>
            </div>
        </div>
    );
}