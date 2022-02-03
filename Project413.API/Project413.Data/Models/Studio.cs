using System;
namespace Project413.Data.Models
{
	public class Studio
	{
		public Studio()
		{
		}

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public ICollection<string> Phones { get; set; }

		public string WorkingTime { get; set; }

        public ICollection<string> ImageSources { get; set; }

        public string Description { get; set; }

        public ICollection<Review> Reviews { get; set; }

        public ICollection<Service> Services { get; set; }

    }
}

