using System.ComponentModel.DataAnnotations;

namespace Project413.Data.Models
{
    public class Studio
    {
        [Key]
        public Guid SdudioId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Phones { get; set; }

        [Required]
        public string WorkingTime { get; set; }

        public string ImageSources { get; set; }

        [Required]
        public string Description { get; set; }

        public Map Map { get; set; }
        public Guid MapId { get; set; }

        public ICollection<StudioUser> StudioUser { get; set; }

        public ICollection<Review> Reviews { get; set; }

        public ICollection<Service> Services { get; set; }

        public ICollection<StudioCategory> StudioCategories { get; set; }

    }
}

