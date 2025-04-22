
import { useEffect, useState } from "react";
import { 
  getAppointments, 
  deleteAppointment,
  updateAppointmentStatus 
} from "@/services/appointmentService";
import { Appointment } from "@/types/appointment";
import { SectionHeading } from "@/components/ui/section-heading";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Phone
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Load appointments on component mount
    const fetchAppointments = () => {
      try {
        const appointmentsData = getAppointments();
        // Sort by creation date, newest first
        appointmentsData.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setAppointments(appointmentsData);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load your appointments",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, [toast]);

  const handleCancelAppointment = (id: string) => {
    try {
      const success = deleteAppointment(id);
      
      if (success) {
        setAppointments(appointments.filter(app => app.id !== id));
        toast({
          title: "Appointment Cancelled",
          description: "Your appointment has been cancelled successfully.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel appointment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
      case "confirmed":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Confirmed</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Completed</Badge>;
      case "cancelled":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Appointments"
          subtitle="View and manage your scheduled appointments"
          centered={true}
        />

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-48 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 w-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-ayush-50 text-ayush-600 mb-4">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Appointments Found</h3>
            <p className="text-gray-600 mb-6">
              You don't have any appointments scheduled yet.
            </p>
            <Button asChild className="bg-gradient-to-r from-ayush-600 to-herb-600 hover:from-ayush-700 hover:to-herb-700">
              <Link to="/contact">Book an Appointment</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{appointment.name}</CardTitle>
                    {getStatusBadge(appointment.status)}
                  </div>
                  <CardDescription className="flex items-center mt-1">
                    <Calendar size={16} className="mr-1 text-gray-500" />
                    <span>{formatDate(appointment.date)}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Condition:</p>
                      <p className="text-gray-600">{appointment.condition}</p>
                    </div>
                    
                    {appointment.message && (
                      <div>
                        <p className="text-sm font-medium text-gray-700">Additional Information:</p>
                        <p className="text-gray-600 text-sm">{appointment.message}</p>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700">Contact Information:</p>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Phone size={14} className="mr-1" />
                        {appointment.phone}
                      </div>
                      {appointment.email && (
                        <div className="text-gray-600 text-sm mt-1">
                          {appointment.email}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                        onClick={() => setSelectedAppointment(appointment)}
                      >
                        <Trash2 size={16} className="mr-1" />
                        Cancel
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Cancel Appointment</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to cancel your appointment on {selectedAppointment && formatDate(selectedAppointment.date)} for {selectedAppointment?.condition}?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="mt-4">
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedAppointment(null)}
                        >
                          Keep Appointment
                        </Button>
                        <Button 
                          variant="destructive"
                          onClick={() => {
                            if (selectedAppointment) {
                              handleCancelAppointment(selectedAppointment.id);
                              setSelectedAppointment(null);
                            }
                          }}
                        >
                          Yes, Cancel Appointment
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button 
                    variant="outline" 
                    className="text-ayush-600 border-ayush-200 hover:bg-ayush-50 hover:text-ayush-700"
                    asChild
                  >
                    <Link to="/contact">
                      <Calendar size={16} className="mr-1" />
                      New Appointment
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
