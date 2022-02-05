using System;
using System.ComponentModel.DataAnnotations;

namespace Project413.Data.Models
{
	public class Review
	{
		public Review()
		{
		}

        public Guid Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Rating { get; set; }

        public string Description { get; set; }

        [Required]
        public DateTime AddedOn { get; set; }
    }
}

