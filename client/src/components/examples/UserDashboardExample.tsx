import UserDashboard from '../UserDashboard';

export default function UserDashboardExample() {
  return (
    <UserDashboard
      userName="Aurora Stellar"
      userEmail="aurora@nebulakitchen.com"
      onLogout={() => console.log('Logout clicked')}
      onClose={() => console.log('Close dashboard')}
    />
  );
}
