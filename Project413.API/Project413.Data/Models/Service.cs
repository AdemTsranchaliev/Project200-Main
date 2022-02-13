using System;
using System.ComponentModel.DataAnnotations;

namespace Project413.Data.Models
{
    public class Service
    {
        public Service()
        {
        }

        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public string Duration { get; set; }

        public double Price { get; set; }

        public ServiceCategory ServiceCategory { get; set; }
    }
}

