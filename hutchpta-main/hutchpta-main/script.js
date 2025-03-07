document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true
    });

    calendar.render(); // Renders the calendar

    // Handle form submission to add an event
    document.getElementById('eventForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var eventTitle = document.getElementById('eventTitle').value;
        var eventDate = document.getElementById('eventDate').value;

        if (eventTitle && eventDate) {
            var newEvent = {
                title: eventTitle,
                start: eventDate
            };

            // Add event to the calendar
            calendar.addEvent(newEvent);
            
            // Reset form fields
            document.getElementById('eventTitle').value = '';
            document.getElementById('eventDate').value = '';
        }
    });
});
