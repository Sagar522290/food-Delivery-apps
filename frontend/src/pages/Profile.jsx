import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const menuItems = [
  { label: 'My Orders', icon: '🧾', to: '/orders' },
  { label: 'Addresses', icon: '📍' },
  { label: 'Payment Methods', icon: '💳' },
  { label: 'Favourite Restaurants', icon: '♡' },
  { label: 'Wallet', icon: '👛', value: '₹250' },
  { label: 'Help & Support', icon: '❓' }
];

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50 via-white to-slate-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">Profile</h1>
        </div>

        <div className="mb-6 rounded-3xl bg-linear-to-r from-orange-500 to-amber-400 p-4 text-white shadow-lg shadow-orange-200 sm:p-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl shadow-inner sm:h-16 sm:w-16">
              🧑
            </div>
            <div className="min-w-0">
              <p className="text-lg font-bold sm:text-xl">{user?.name || 'Guest User'}</p>
              <p className="truncate text-sm text-orange-50">{user?.email || 'Not logged in'}</p>
              <p className="text-sm text-orange-50">{user?.phone || 'Add phone number'}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.to && navigate(item.to)}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-lg">{item.icon}</span>
                {item.label}
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-400">
                {item.value}
                <span className="text-lg">›</span>
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100 sm:text-base"
        >
          <span>🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
}
