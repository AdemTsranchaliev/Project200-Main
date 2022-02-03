using System;
namespace Project413.Data.Models
{
	public class Review
	{
		public Review()
		{
		}

        public Guid Id { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public int Rating { get; set; }

        public string Description { get; set; }

        public DateTime AddedOn { get; set; }
    }
}

