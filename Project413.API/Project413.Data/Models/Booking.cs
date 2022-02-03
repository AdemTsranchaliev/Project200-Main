using System;
namespace Project413.Data.Models
{
	public class Booking
	{
		public Booking()
		{
		}

        public Guid Id { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Name { get; set; }

        public DateTime BookedOn { get; set; }

        public DateTime BookedFor { get; set; }

        public Guid ServiceId { get; set; }

        public Service Service { get; set; }

        public Guid StudioId { get; set; }

        public Studio Studio { get; set; }
    }
}

