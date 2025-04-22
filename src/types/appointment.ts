
export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  condition: string;
  message: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}
