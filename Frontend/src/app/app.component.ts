import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RepositoryService } from './services/repository.service';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReservationCalendar';
  events: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
    weekends: true,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    events: []
  };

  constructor (private repositoryService : RepositoryService) {  }

  ngOnInit() {
    this.repositoryService.getAllReservations().subscribe(
      (events: any) => {
        this.calendarOptions.events = events;
      }
    );
  }
  
  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  
}
