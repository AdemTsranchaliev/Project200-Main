using System;
using System.ComponentModel.DataAnnotations;

namespace Project413.Data.Models
{
    public class Booking
    {
        public Booking()
        {
        }

        public Guid Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime BookedOn { get; set; }

        [Required]
        public DateTime BookedFor { get; set; }

        [Required]
        public Guid ServiceId { get; set; }

        [Required]
        public Guid StudioId { get; set; }
        public Service Service { get; set; }

        public Studio Studio { get; set; }
    }
}

