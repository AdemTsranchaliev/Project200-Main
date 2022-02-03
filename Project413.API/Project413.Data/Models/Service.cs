using System;
namespace Project413.Data.Models
{
	public class Service
	{
		public Service()
		{
		}

        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Duration { get; set; }

        public double Price { get; set; }
    }
}

