import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Heart, Receipt, Settings, LogOut, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface UserDashboardProps {
  userName: string;
  userEmail: string;
  onLogout: () => void;
  onClose: () => void;
}

// todo: remove mock functionality
const mockOrders = [
  { id: '1', date: '2024-11-28', items: ['Nebula Prime Ribeye', 'Orbit Elixir'], total: 90.00, status: 'completed' },
  { id: '2', date: '2024-11-15', items: ['Stellar Salmon', 'Supernova Lava Cake'], total: 60.00, status: 'completed' },
];

const mockFavorites = [
  { id: '1', name: 'Nebula Prime Ribeye', price: 68.00 },
  { id: '3', name: 'Galactic Lobster Tail', price: 85.00 },
];

const mockReservations = [
  { id: '1', date: '2024-12-15', time: '7:00 PM', guests: 4, status: 'confirmed' },
];

export default function UserDashboard({ userName, userEmail, onLogout, onClose }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl font-bold" data-testid="text-dashboard-title">My Dashboard</h1>
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-dashboard">
            <LogOut className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <Card className="h-fit">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarFallback className="text-2xl bg-primary/20 text-primary">
                    {userName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg" data-testid="text-user-name">{userName}</h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid="text-user-email">{userEmail}</p>
                <Badge variant="secondary" className="mb-6">Stellar Member</Badge>
                
                <nav className="w-full space-y-1">
                  {[
                    { id: 'overview', label: 'Overview', icon: User },
                    { id: 'orders', label: 'Order History', icon: Receipt },
                    { id: 'favorites', label: 'Favorites', icon: Heart },
                    { id: 'reservations', label: 'Reservations', icon: Calendar },
                    { id: 'settings', label: 'Settings', icon: Settings },
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? 'secondary' : 'ghost'}
                      className="w-full justify-start gap-3"
                      onClick={() => setActiveTab(item.id)}
                      data-testid={`button-tab-${item.id}`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  ))}
                </nav>

                <Button
                  variant="outline"
                  className="w-full mt-6 gap-2 text-destructive hover:text-destructive"
                  onClick={onLogout}
                  data-testid="button-dashboard-logout"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {activeTab === 'overview' && (
              <>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-primary">{mockOrders.length}</p>
                      <p className="text-sm text-muted-foreground">Total Orders</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-primary">{mockFavorites.length}</p>
                      <p className="text-sm text-muted-foreground">Favorites</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold text-primary">{mockReservations.length}</p>
                      <p className="text-sm text-muted-foreground">Reservations</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Reservations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {mockReservations.length > 0 ? (
                      mockReservations.map((res) => (
                        <div key={res.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/30">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{res.date}</p>
                              <p className="text-sm text-muted-foreground">{res.time} - {res.guests} guests</p>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {res.status}
                          </Badge>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-4">No upcoming reservations</p>
                    )}
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === 'orders' && (
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>Your past orders at Nebula Kitchen</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/30">
                      <div>
                        <p className="font-medium">{order.items.join(', ')}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${order.total.toFixed(2)}</p>
                        <Badge variant="secondary">{order.status}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === 'favorites' && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Favorites</CardTitle>
                  <CardDescription>Dishes you love from our menu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockFavorites.map((fav) => (
                    <div key={fav.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/30">
                      <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        <span className="font-medium">{fav.name}</span>
                      </div>
                      <span className="text-primary font-semibold">${fav.price.toFixed(2)}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === 'reservations' && (
              <Card>
                <CardHeader>
                  <CardTitle>Your Reservations</CardTitle>
                  <CardDescription>Manage your table bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockReservations.map((res) => (
                    <div key={res.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/30">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{res.date}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {res.time} - {res.guests} guests
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {res.status}
                        </Badge>
                        <Button variant="outline" size="sm">Modify</Button>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full mt-4" data-testid="button-new-reservation">
                    Make New Reservation
                  </Button>
                </CardContent>
              </Card>
            )}

            {activeTab === 'settings' && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-accent/30">
                    <h4 className="font-medium mb-2">Email Preferences</h4>
                    <p className="text-sm text-muted-foreground">Receive updates about new menu items and special offers.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/30">
                    <h4 className="font-medium mb-2">Dietary Preferences</h4>
                    <p className="text-sm text-muted-foreground">Set your dietary restrictions for personalized recommendations.</p>
                  </div>
                  <Button variant="outline" className="w-full">Edit Profile</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
