
import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';

const CalendarPage = ({ userRole = 'team-leader' }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Team Meeting',
      date: new Date(),
      time: '10:00 AM',
      type: 'meeting',
      description: 'Weekly team sync'
    },
    {
      id: 2,
      title: 'Client Call',
      date: new Date(Date.now() + 86400000), // Tomorrow
      time: '2:00 PM',
      type: 'call',
      description: 'Follow up with lead'
    },
    {
      id: 3,
      title: 'Property Visit',
      date: new Date(Date.now() + 172800000), // Day after tomorrow
      time: '11:00 AM',
      type: 'visit',
      description: 'Site inspection with client'
    }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'call': return 'bg-green-100 text-green-800';
      case 'visit': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-slate-200/60">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Calendar
              </h1>
              <p className="text-slate-600 mt-2 text-lg">Manage your schedule and appointments</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
              <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <CalendarIcon className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Component */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    className="w-full border-0 p-0"
                    classNames={{
                      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4 w-full",
                      caption: "flex justify-center pt-1 relative items-center mb-4",
                      caption_label: "text-lg font-semibold text-slate-800",
                      nav: "space-x-2 flex items-center",
                      nav_button: "h-8 w-8 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 rounded-lg transition-colors flex items-center justify-center",
                      nav_button_previous: "absolute left-0",
                      nav_button_next: "absolute right-0",
                      table: "w-full border-collapse",
                      head_row: "flex w-full",
                      head_cell: "text-slate-600 rounded-md w-full font-semibold text-sm py-2 text-center",
                      row: "flex w-full",
                      cell: "relative p-1 text-center text-sm focus-within:relative focus-within:z-20 w-full",
                      day: "h-12 w-full p-0 font-normal hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center",
                      day_selected: "bg-green-600 text-white hover:bg-green-700 rounded-lg",
                      day_today: "bg-slate-200 text-slate-900 font-semibold rounded-lg",
                      day_outside: "text-slate-400 opacity-50",
                      day_disabled: "text-slate-400 opacity-30",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Sidebar */}
          <div className="space-y-6">
            {/* Selected Date Info */}
            <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  {formatDate(selectedDate)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getEventsForDate(selectedDate).length > 0 ? (
                    getEventsForDate(selectedDate).map((event) => (
                      <div key={event.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-800">{event.title}</h4>
                          <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-1">{event.time}</p>
                        <p className="text-sm text-slate-500">{event.description}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500 text-sm">No events scheduled for this date</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-800 text-sm">{event.title}</h4>
                        <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-1">
                        {event.date.toLocaleDateString()} at {event.time}
                      </p>
                      <p className="text-xs text-slate-500">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
